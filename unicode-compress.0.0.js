const unicodeCompress = {
  version: "0.0.0",
  compress: compress
}

function compress(input) {
  let hexPairs = input.split("").map(x=>x.charCodeAt(0).toString(16))
  
  if(hexPairs.length % 2 == 1) hexPairs.push("20")

  let hexQuads = []
  for(let i=0; i<hexPairs.length/2; i++) {
    hexQuads.push(hexPairs.slice(i*2, i*2+2).join(""))
  }

  let escapedUnicodeStr = hexQuads.map(x=>"%u" + x).join("")

  let unicodeStr = unescape(escapedUnicodeStr)

  return unicodeStr
}