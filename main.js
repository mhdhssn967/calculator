// Display content in screen
function displayContent(content){
    result.value+=content
}
function clearContent(){
    result.value=""
}
function calcOutput(){
    result.value=eval(result.value)
}
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}