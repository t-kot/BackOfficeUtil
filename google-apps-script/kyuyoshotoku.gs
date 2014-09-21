/*
給与所得控除額を返す
https://www.nta.go.jp/taxanswer/shotoku/1410.htm
*/
function getShotokuKoujo(shunyu) {
  var result;
  if(shunyu <= 1800000) { //1,800,000円以下
    result = shunyu * 0.4;

    if(result < 650000) {
      result = 650000;
    }
  } else if (shunyu <= 3600000) { //1,800,000円超	3,600,000円以下
    result = shunyu * 0.3 + 180000;
  } else if (shunyu <= 6600000) { //3,600,000円超	6,600,000円以下
    result = shunyu * 0.2 + 540000;
  } else if (shunyu <= 10000000) { //6,600,000円超	10,000,000円以下
    result = shunyu * 0.1 + 1200000;
  } else if (shunyu <= 15000000) { //10,000,000円超　	15,000,000円以下
    result = shunyu * 0.05 + 1700000;
  } else { //15,000,000円超
    result = 2450000;
  }
  return result;
}

function getKyuyoShotoku(shunyu) {
  return shunyu - getShotokuKoujo(shunyu);
}

function getShotokuKoujoTest() {
  Logger.log(getShotokuKoujo(5000000) == 1540000);
}

function getKyuyoShotokuTest() {
  Logger.log(getKyuyoShotoku(2000000) == 1220000);
  Logger.log(getKyuyoShotoku(3000000) == 1920000);
  Logger.log(getKyuyoShotoku(4000000) == 2660000);
  Logger.log(getKyuyoShotoku(5000000) == 3460000);
}
