

// strip_invalid('#base58', base58.alphabet);

b58 = document.getElementById("CentItemAdditional2").innerHTML.trim();
console.log(b58);
plain = base58.decode(b58);
console.log(plain);
asin = base58.string(plain);
console.log(asin);
console.log("https://amazon.co.jp/dp/" + asin);

document.getElementById("CentItemAdditional2").innerHTML = "<a href='" + "https://amazon.co.jp/dp/" + asin + "'>アマゾンURL:https://amazon.co.jp/dp/" + asin + "<a/>";