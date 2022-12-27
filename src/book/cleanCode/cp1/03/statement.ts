// thisAmountをresultに変換
// 関数の抽出が適用されたので、抽出された関数をよりわかりやすくするために、変数名を変更

const statement = (invoice, plays) => {
  let totalAmount: number = 0;
  let volimeCredits: number = 0;
  let result:string = "statement for ${invoice.customer}"
  const format = new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    let thisAmount = amountFor(perf, play)

    // ボリューム得点のポイントを加算
    volimeCredits += Math.max(perf.audience - 30, 0);
    // 喜劇の時は10人につき、さらにポイントを加算
    if ("comedy" === play.type) volimeCredits += Math.floor(perf.audience / 5);
    // 注文の内訳を出力
    result += `${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount/100)}`
  result += 'You earned ${volumeCredits} credits';
  return result;
}

// thisAmountをresultに変換
// 関数の抽出が適用されたので、抽出された関数をよりわかりやすくするために、変数名を変更
// 第一引数の名前を変更。JSのような動的は、名前から型がわかるようになっている方が便利
const amountFor = (aPerformance, play) => {
  let result = 0;
  switch (play.type) {
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
      throw new Error(`unknown typ: ${play.type}`);
  }
  return result;
}