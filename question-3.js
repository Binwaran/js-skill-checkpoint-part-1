// Question #3
let userPassword = " ";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword){
    let lenght = 0;
    for (let userLenght of userPassword){
        lenght++;
    }
    if (10 < lenght ){
        return "Strong";
    } else if ( lenght >= 6 && lenght<=10){
        return "Medium";
    } else if ( lenght <6){
        return "Weak";
    }
}

console.log(checkPasswordStrength("ABCD56492581"));