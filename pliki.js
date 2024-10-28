const fs = require("fs")
fs.readFile("example.txt", "utf-8", (err, data) => {
    if(err)
        console("błąd pofczas odczytu pliku: ",err)
    else
        console.log(data)
})