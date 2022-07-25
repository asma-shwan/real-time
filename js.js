let textEl=document.getElementById("text")
let totalEl=document.getElementById("total")
let r3El=document.getElementById("r3")
let btnEl=document.getElementById("remove")
textEl.addEventListener("keyup",function(){
 Count()
})
function Count(){
let count1=textEl.value.length
let count2=textEl.getAttribute("aria-valuemax")-textEl.value.length
    totalEl.innerHTML= `Total characters: ${count1}`
    r3El.textContent=`Remaining: ${count2}`
    if(count2==0 || count1==50){
        textEl.disabled=true 
    }

}
btnEl.addEventListener("click",function(){
   totalEl.textContent=`Total characters: 0`
   r3El.textContent=`Remaining: 50`
   textEl.value=" "
   textEl.ariaPlaceholder="write your notes" 
 textEl.disabled=false
})

