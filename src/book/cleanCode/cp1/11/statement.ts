// customerをinvoiceから取り出して、中間オブジェクトに加える。
// 計算処理を全てstatement関数に移動し、renderPlainTextは引数dataで渡されたデータを加工するだけにできる。
// 同様にperformanceも中間オブジェクトに追加する。これによりrenderPlainTextのinvoiceパラメータが不要になる。
const statement = (invoice, plays) => {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.peformances;
  return renderPlainText(statementData, plays);
}

const renderPlainText = (data, plays) => {
  let result:string = `statement for ${data.customer}`
  for (let perf of data.performances) {
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)`;
  }
  result += `Amount owed is ${usd(totalAmount)}`
  result += 'You earned ${volumeCredits} credits';
  return result;
}

const totalVolumeCredits = () => {
  let result = 0;
  for (let perf of data.performances) {
    result += volumeCreditsFor(perf);
  }
}

const totalAmount = () => {
  let result = 0;
  for (let perf of DataTransfer.peformances) {
    result += amountFor(perf);
  }
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
