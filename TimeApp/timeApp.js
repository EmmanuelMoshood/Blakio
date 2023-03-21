


// const intervalFunc = setInterval(getTime, 2000)

// //set when to make this timee out 
// setTimeout(() => {
//     clearInterval(intervalFunc) //function
// }, 10000)       //number of miliseconds


//get by Id and display
//hrs
//mins
//sec


//date object
//initize a new date object in a function called get timme




// USING SOLID PRINCIPLES

const getHours = () => {
    const time = new Date();
    let hrs = time.getHours()
    if(hrs > 12){
        hrs =  hrs-12
    }
    return hrs;
}
const getMinutes = () => {
    const time = new Date();
    const mins = time.getMinutes()
    return mins;
}
const getSeconds = () => {
    const time = new Date();
    const sec = time.getSeconds()
    return sec;
}

const getAllTimeFuncThenSetHTML = () => {
    const hours = getHours()
    const minutes = getMinutes()
    const seconds = getSeconds()
    const timeOfDay = getTimeOfDay()
    setHTML(hours,minutes,seconds,timeOfDay)
}

const addZeroToNumLess10 = (num) => {
    if(num < 10){
        return num = "0" + num;
    }
    return num
}
const getTimeOfDay = () => {
    const time = new Date();
    let hrs = time.getHours()
    let timeOfDay = "AM"
    if(hrs > 12){
        timeOfDay = "PM"
    }
    return timeOfDay;
}

setInterval(()=>{
    getAllTimeFuncThenSetHTML();
}, 1000)

const setHTML = (hrs, mins, sec, timeOfDay) => {
    const hourElement = document.getElementById("hr")
    const minutesElement = document.getElementById("min")
    const secondsELement = document.getElementById("sec")
    const timeOfDayElement = document.getElementById("timeOfDay")
    
    hourElement.innerText = addZeroToNumLess10(hrs);
    minutesElement.innerText = addZeroToNumLess10(mins);
    secondsELement.innerText = addZeroToNumLess10(sec);
    timeOfDayElement.innerText = timeOfDay;
    
    console.log("This is the time:", hrs, mins, sec, timeOfDay)
}