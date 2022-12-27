const statement = (invoice, plays) => {
  let totalAmount: number = 0;
  let volimeCredits: number = 0;
  let result:string = "statement for ${invoice.customer}"
  // const format = new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

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

// 一時変数は問題のものなので、置き換える。
// formatという名前も危険。
// 文字列のテンプレート内の小さなスコープで使われているだけで、強調すべきは金額のフォーマットをおこなっていることなので、それを明確にする。
// const format = (aNumber) => {
const usd = (aNumber) => {
  return new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: aNumber/100 }).format;
}
