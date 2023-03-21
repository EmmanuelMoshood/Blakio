const myParagraph = document.getElementById('myParagraph')
myParagraph.innerText = "I changed the value of the paragraph from index.js"

const checkbox = document.getElementById('checkbox')
const myInput = document.getElementById('myInput')

const printInput = () =>{
    console.log(myInput.value)
    console.log(checkbox.checked)
}

setTimeout(() => {
    printInput()
}, 5000);

const onClickFn = () => {
    console.log("Display")
}



//EVENTS IN JS 
//onclick
//onmouseover
//onmouseleave
//onkeyup
//onkeydown
