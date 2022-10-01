// 時刻の組み合わせは、24 x 60 x 60 = 86400通りある。
// それぞれの数字で点灯される量は事前に求めておくと楽

const N = 30;
// 2桁の数字に対する点灯数を返す
const check = (num: number) => {
  const light = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
  return light[Math.floor(num / 10)] + light[num % 10];
}

let cnt = 0;
for (let h = 0; h < 24; h++) {
  for (let m = 0; m < 60; m++) {
    for(let s = 0; s < 60; s++) {
      if (check(h) + check(m) + check(s) === N) cnt++;
    }
  }
}
console.log(cnt);
