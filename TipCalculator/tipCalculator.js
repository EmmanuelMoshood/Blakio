// const myParagraph = document.getElementById('myParagraph')
// myParagraph.innerText = "I changed the value of the paragraph from index.js"

// const checkbox = document.getElementById('checkbox')
// const myInput = document.getElementById('myInput')

// const printInput = () =>{
//     console.log(myInput.value)
//     console.log(checkbox.checked)
// }

// setTimeout(() => {
//     printInput()
// }, 5000);

// const onClickFn = () => {
//     console.log("Display")
// }



//EVENTS IN JS 
//onclick
//onmouseover
//onmouseleave
//onkeyup
//onkeydown



/////////TIP CALCULATOR CODE




const getInputs = () => {
//get required elements from HTML
const cost = document.getElementById("cost")
const tipPercentage = document.getElementById('tipPercentage')
const numOfPeople = document.getElementById('numOfPeople')
//collect the values into local variables
const costInputted = cost.value
const tipInputted = tipPercentage.value
const numOfPeopleInputted = numOfPeople.value
// console.log(costInputted, tipInputted, numOfPeopleInputted)
//check if all the inputs have been entered
isAllInputEntered(costInputted, tipInputted, numOfPeopleInputted)
//call the calculateTip function with the values
calculateCost(costInputted, tipInputted, numOfPeopleInputted)
}

const hasValueCheck = (string) => {
    if(string.length > 0){
        return true
    }else{
        console.log("incomplete input")
    }
}

const isAllInputEntered = (cost, tipPercentage, numOfPeople) => {
    const hasCost = hasValueCheck(cost);
    const hasTipPercentage = hasValueCheck(tipPercentage);
    const hasNumOfPeople = hasValueCheck(numOfPeople);
    return hasCost&&hasTipPercentage&&hasNumOfPeople;
}

const calculateCost = (cost, tipPercentage, numOfPeople) => {
    //to handle decimals used parseFloat()
    const costToCalc = parseFloat(cost);
    const tipTocalc = parseFloat(tipPercentage) /100;
    const num = parseFloat(numOfPeople);

    //formula
    const total = (costToCalc + costToCalc*tipTocalc)/num
    console.log(total)
    const displayValue = total
    const answerElement = document.getElementById("answer")
    answerElement.innerText = `answer: ${displayValue}`
}

const displayTheAnswer = () => {
    // const displayValue = calculateCost()

    // const answerElement = document.getElementById("answer")
    // answerElement.innerText = `answer: ${displayValue}`
}