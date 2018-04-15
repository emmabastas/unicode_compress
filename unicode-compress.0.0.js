const unicodeCompress = {
  version: "0.0.0",
  compress: compress
}

function compress(input) {
  let hexPairs = input.split("").map(x=>x.charCodeAt(0).toString(16))
  
  let hexQuads = []
  for(let i=0; i<hexPairs.length/3; i++) {
    hexQuads.push(hexPairs.slice(i*3, i*3+3).join(""))
  }

  let escapedUnicodeStr = hexQuads.map(x=>"%u" + x).join("")

  let unicodeStr = unescape(escapedUnicodeStr)

  return unicodeStr
}