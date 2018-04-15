# Unicode-compress

Compress JavaScript as unicode wich can later be decompressed and executed using `unescape()` and `eval()`.

## Example

Uncompressed js:
```
console.log("Hello world!")
```

Unicode-compressed js:
```
eval(unescape(escape(`捯湳潬攮汯木≈敬汯⁷潲汤™⤠`).replace(/u(..)/g,"$1%")))
```

Both programs will print "Hello word!" to the console.

## Installation

There is none, simply clone this repo and open the `index.html` file in your browser of choice