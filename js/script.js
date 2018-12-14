//DOM ELEMENTS
var button = document.getElementsByTagName('button')[0];
var print = document.getElementById('print');

button.addEventListener('click', function() {
    //Get User Inputs
    var i = 0;
    var numbers = parseInt(document.getElementById('numbers').value);
    var range = parseInt(document.getElementById('range').value);
    var power = parseInt(document.getElementById('power').value);
    var numberList = []; //Data Structures for store numbers

    //Erase previous numbers
    print.innerHTML = "";

    //Generate and store numbers
    for (i = 0; i < numbers; i++) {
        var randomNumber = Math.floor(Math.random() * range) + 1;
        //Avoid a repeated number
        if (numberList.indexOf(randomNumber) === -1) {
            numberList.push(randomNumber);
        } else {
            numbers++;
        }
    }

    //Sort numbers in ascending order
    numberList.sort(function(a, b) {
        return a - b;
    });

    //Check if the last number is not higher than the power value
    if (numberList[numberList.length - 1] >= power) {
        var powerRandom = Math.floor(Math.random() * power) + 1;
        numberList.pop();
        numberList.push(powerRandom);
    }

    //Print numbers
    for (i = 0; i < numberList.length; i++) {
    	if (i !== numberList.length - 1) {
            print.insertAdjacentHTML('beforeend', '<div class="ball bounceInDown">' + numberList[i] + '</div>'); 
        } else {
    		//print power ball
            print.insertAdjacentHTML('beforeend', '<div class="powerball bounceInDown">' + numberList[i] + '</div>'); 
        }
    }
});