// same as ES5.1
console.log("𠮷".length == 2);

// new RegExp behaviour, opt-in ‘u’
console.log("𠮷".match(/./u)[0].length == 2);

// new form
console.log("\u{20BB7}" == "𠮷" == "\uD842\uDFB7");

// new String ops
console.log("𠮷".codePointAt(0) == 0x20BB7);

// for-of iterates code points
for(var c of "𠮷𠮷") {
  console.log(c);
}
