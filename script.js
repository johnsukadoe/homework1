const number = Math.ceil(Math.random()*10);
let tries = 0;

function guessNum(num){
    if (tries < 5){
        if(num === number){
            alert("Ура угадали!")
        }else{
            alert("К сожалению вы не угадали");
            tries++;
        }
    }else{
        alert("Попытки закончились((")
    }
}