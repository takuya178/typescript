// バナーを印字するコードを抽出する
// 同様にprintDetailsも抽出する。
const printOwing = (invoice) => {
  let outstanding = 0;
  printBanner();

  // 未払金の計算
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  
  printDEtails();

  const printDetails = () => {
    // 明細の印字
    console.log('name:${invoice.customer}');
    console.log(`amount:${outstanding}`);
  }

  const printBanner = () => {
    console.log("***Customer Owes***");
  }
}