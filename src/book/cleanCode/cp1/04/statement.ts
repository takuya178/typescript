// play変数の削除
// aPerformance変数はループ変数。ループの1回ごとに値が変化する。
// しかしplayはperformanceから取得できるため、パラメータで渡す必要はない。amountFor関数の中でいつでも取り出せる。
// 一時変数があるとローカルスコープの変数が増えてしまし、抽出が面倒になる。

// 変数のインライン化（const play = playFor(perf)を削除）

const statement = (invoice, plays) => {
  let totalAmount: number = 0;
  let volimeCredits: number = 0;
  let result:string = "statement for ${invoice.customer}"
  const format = new Intl.NumberFormat("en-US", { stype: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

  for (let perf of invoice.performances) {
    // const play = playFor(perf);
    // let thisAmount = amountFor(perf)

    // ボリューム得点のポイントを加算
    volimeCredits += Math.max(perf.audience - 30, 0);
    // 喜劇の時は10人につき、さらにポイントを加算
    if ("comedy" === playFor(perf).type) volimeCredits += Math.floor(perf.audience / 5);
    // 注文の内訳を出力
    result += `${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${format(totalAmount/100)}`
  result += 'You earned ${volumeCredits} credits';
  return result;
}

// play.typeをplayFor(aPerformance)に変換
// その後第二引数を削除
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

// ローカル変数を削除することによる大きな利点は、扱うべきローカルスコープが減ることにより、メソッドの抽出が楽になること。

