const logdiv=document.getElementById('log')
const statediv= document.getElementById('state')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
  
start.addEventListener('click',()=>{
    document.addEventListener('keydown',handledown)
    document.addEventListener('keyup',handleup)
    start.disabled=true
    stop.disabled=false

})
stop.addEventListener('click',()=>{
    document.removeEventListener('keyup',handleup)
    document.removeEventListener('keydown',handledown)
    logdiv.textContent="";
    statediv.textContent=" ";
    start.disabled=false
    stop.disabled=true


})
function handledown(e){
    logdiv.textContent=`${e.key} pressed down`
    statediv.textContent='key is down'
}
function handleup(e){
    logdiv.textContent=`${e.key} pressed up`
    statediv.textContent="key is up"
}