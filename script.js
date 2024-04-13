const surpriseList = [
    "i said from 1 to 5 😉",
    "لا اله الا الله",
    "الله اكبر",
    "سبحان الله",
    "استغفر الله",
    "الحمد لله"
]


function getInputValue(){
    const value = document.querySelector("input").value
    const num = document.querySelector("span")
    num.innerHTML = value 
    document.querySelector("span").textContent = surpriseList [value]
}
   
    
    document.querySelector(".calculate").onclick = getInputValue
