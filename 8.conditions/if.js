const price = 10000;
const payment = 10000;

// 1. Kalau uangnya pas
if (payment === price) {
  console.log("Makasih udah bayar pake uang pas");
} else if (payment > price) {
  // 2. Ketika uangnya lebih
  const change = payment - price;

  console.log(`Terima kasih, kembalian anda sebesar ${change}`);
} else {
  const moneyDeficit = price - payment;

  console.log(`Maaf uang anda kurang ${moneyDeficit}`);
}
