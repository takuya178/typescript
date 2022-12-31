// 各種イベントに劇団員を派遣して演劇のパフォーマンスを行う会社を考える。
// 顧客がいくつか劇を選択し、座席や演じた劇の種類に応じて会社が請求するというのが、通常の処理になる。 

const statement = (invoice, plays) => {
  let totalAmount: number = 0;
  let volimeCredits: number = 0;
  let result:string = "statement for ${invoice.customer}"
  const format = new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 1000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown typ: ${play.type}`);
    }

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