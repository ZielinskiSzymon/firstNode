let i=0
let interval = setInterval(()=>{
i++
console.log(i)
if(i==5)
    clearInterval(interval)
},1000)