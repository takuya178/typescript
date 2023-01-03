// 全体の処理を2つのフェーズに分ける。前半フェーズでは請求書出力のためのデータを計算
// 後半フェーズではデータをプレーンテキストやHTMLに出力する。
const statement = (invoice, plays) => {
  const statementData = {};
  return renderPlainText(statementData, invoice, plays);
}

const renderPlainText = (data, invoice, plays) => {
  let result:string = "statement for ${invoice.customer}"

  for (let perf of invoice.performances) {
    volimeCredits += volumeCreditsFor(perf);
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${usd(totalAmount)}`
  result += 'You earned ${volumeCredits} credits';
  return result;
}

const amountFor = (aPerformance) => {
  let result = 0;
  switch (playFor(aPerformance)) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 1000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown typ: ${playFor(aPerformance)}`);
  }
  return result;
}

const playFor = (aPerformance) => {
  return plays[aPerformance.playId];
}

const volumeCreditsFor = (aPerformance) => {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}

const usd = (aNumber) => {
  return new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: aNumber/100 }).format;
}
