// 関数のインライン化
const printOwing = (invoice) => {
  printBanner();
  let outstanding = calculateOutstanding();
  console.log('name:${invoice.customer}');
  console.log(`amount:${outstanding}`);
}

// ↓
const printOwing = (invoice) => {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  const printDetails = (outstanding) => {
    console.log('name:${invoice.customer}');
    console.log(`amount:${outstanding}`);
  }
}
