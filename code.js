const button = document.querySelector(".button2")
const input = document.querySelector(".button1")
const error = document.querySelector(".check")
button.addEventListener("click", function(){ 
if (input.value.includes("@") && input.value.includes(".")) {
    error.style.display = "none"

} else{
    error.style.display ="block"

}
})
