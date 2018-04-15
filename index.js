function main() {
  let codeTextarea = document.getElementById("code-textarea")
  let compressButton = document.getElementById("compress-button")
  let outputCodeTextarea = document.getElementById("output-code")

  compressButton.addEventListener("click", () => {
    let out = unicodeCompress.compress(codeTextarea.value)
    outputCodeTextarea.innerHTML = "eval(unescape(escape(`" + out +  "`).replace(/u(..)/g,\"$1%\")))"
  })
}

document.addEventListener("DOMContentLoaded", main)
if (document.readyState!="loading") main()