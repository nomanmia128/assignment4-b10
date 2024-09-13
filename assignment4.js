// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {
    if(0 >= income){
        return 'Invalid Input'
    }
    else if(0 >= expenses){
        return 'Invalid Input'
    }
    else{
        if(income <= expenses){
            return 0
        }
    }

    if(0 <= income || 0 <= expenses){
        let total = income - expenses
        let tax = (total * .20)
        return tax
    }
}

// const incomeExpenses2 = calculateTax(34000, 1753)
// const incomeExpenses3= calculateTax(5000, 1500)

// const incomeExpenses4 = calculateTax(7000, 7000)
// const incomeExpenses5 = calculateTax(-5000, 2000)
// const incomeExpenses6 = calculateTax(6000, -1500)

// console.log(
//     incomeExpenses1,
//     incomeExpenses2,
//     incomeExpenses3,
//     incomeExpenses4,
//     incomeExpenses5,
//     incomeExpenses6
// )
// ---------------


// Problem-02 : Tax Calculator


function sendNotification(email) {
    const emailName = email.split('@')
    
    if(emailName.length !== 2){
        return 'Invalid Email'
    }

    
    const userName = emailName[0]
    const domainName = emailName[1]
    return `${userName} sent you an email from ${domainName}`
}

// console.log(sendNotification('zihad@gmail.com'))

// const emailName1 = sendNotification('zihad@gmail.com')
// const emailName2 = sendNotification('farhan34@yahoo.com')
// const emailName3 = sendNotification('nadim.naem5@outlook.com')
// const emailName4 = sendNotification('fahim234.hotmail.com')
// const emailName5 = sendNotification('sadia8icloud.com')

// console.log(
//     emailName1,
//     emailName2,
//     emailName3,
//     emailName4,
//     emailName5
// );
// ---------------------


// Problem-03: Checking Digits Inside a Name


// ======
function checkDigitsInName(name) {
    
    if(typeof name !== 'string'){
        return 'Invalid Input'
    }
    for(let nam of name){
        if(!isNaN(nam) && nam !== ' '){
            return true
        }
    }
    return false
}

// console.log(checkDigitsInName('fsdf44'))
// const inputName1 = checkDigitsInName('Raji23')
// const inputName2 = checkDigitsInName('n9ayeem')
// const inputName3 = checkDigitsInName('elmu3')
// const inputName4 = checkDigitsInName('Suman')
// const inputName5 = checkDigitsInName('Name2024')
// const inputName6 = checkDigitsInName('!@#')
// const inputName7 = checkDigitsInName(["Raj"])

// console.log(
//     inputName1,
//     inputName2,
//     inputName3,
//     inputName4,
//     inputName5,
//     inputName6,
//     inputName7
// );
// --------------


// Problem 04 : Calculate Admission Final Score 


function calculateFinalScore(obj) {
    
     if(typeof obj !== 'object' ||
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean'
    ){
        return 'Invalid Input'
    }

    if(obj.testScore >= 50){
        return;
    }
    if(obj.schoolGrade >= 30){
        return;
    }

    let totalScore = obj.testScore + obj.schoolGrade;

    if(obj.isFFamily){
        totalScore += 20;
    }

    const finalScore = totalScore >= 80;

    return finalScore;
}

// const object = calculateFinalScore(
//     { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
//     // { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
//     // "hello" 
//     // { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
// )
// console.log(object);
// ---------------------


// / Problem 05:  Predict Avarage Waiting Time


function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)){
        return 'Invalid Input'
    }

    let totalTime = 0
    for(const time of waitingTimes){
        totalTime = totalTime + time
    }

    const elmentCount = waitingTimes.length
    const avarage = totalTime / elmentCount
    const avarageRound = Math.round(avarage)
    const vivaRest = (serialNumber - 1) - elmentCount
    const minute = vivaRest * avarageRound

    return minute
}



// const vivaDide1 = waitingTime([ 3, 5, 7, 11, 6 ], 10)
// const vivaDide2 = waitingTime([13, 2], 6)
// const vivaDide3 = waitingTime([13, 2, 6, 7, 10], 6)
// const vivaDide4 = waitingTime([6], 4)
// const vivaDide6 = waitingTime(7 , 10)
// const vivaDide7 = waitingTime("[6,2]", 9)
// const vivaDide5 = waitingTime([7, 8, 3, 4, 5], "9")

// console.log(
//     vivaDide1,
//     vivaDide2,
//     vivaDide3,
//     vivaDide4,
//     vivaDide5,
//     vivaDide6,
//     vivaDide7
// );


