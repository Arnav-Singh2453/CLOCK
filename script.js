
let b1 = document.getElementById("fll")
let b2 = document.getElementById("amar")
document.repl
let s = undefined
let m = undefined
let h = undefined
let d = undefined
let t = undefined
let timer1 = undefined
let timer2 = undefined

let div = document.getElementById("div1")
let div1 = document.getElementById("div")
function timefull(){
    let  a = new Date()    
     const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
     const formattedTime = formatter.format(a);
     return formattedTime
    
}
setInterval(function(){
    div.innerHTML = timefull()},1000)
setInterval(function(){
        div1.innerHTML = timehalf()},1000)
function timehalf(){
    let  a = new Date()    
    s = a.getSeconds();
    m = a.getMinutes();
    h = a.getHours()
    t = h + " : "+m+" : "+s
     return t
}


b1.onclick = function () {
    div1.hidden = false 
    div.hidden= true
}
    
    
    
   
   

b2.onclick = function(){ 
    div1.hidden= true
    div.hidden = false
}



