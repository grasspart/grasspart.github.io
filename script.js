var mark = 0;
function change(){
    mark = document.getElementById("Beast").value;
    if(mark == 0){
        document.getElementById("RButton").style.display = "none";
        document.getElementById("Checking").style.display = "none";
    }
else {if(mark == 1){
        document.getElementById("RButton").style.display = "none";
        document.getElementById("Checking").style.display = "none";
    }
else {if (mark == 2){
document.getElementById("RButton").style.display = "block";
document.getElementById("Checking").style.display = "none";
    }
else {if (mark == 3){
document.getElementById("RButton").style.display = "block";
document.getElementById("Checking").style.display = "block";
    }
else {if (mark == 4){
document.getElementById("RButton").style.display = "block";
document.getElementById("Checking").style.display = "block";
    }
else {if (mark == 5){
document.getElementById("RButton").style.display = "block";
document.getElementById("Checking").style.display = "block";
    }
}
}
}
}
}
document.getElementById("sum").textContent="-";
}

function total()
{
var number; var price; var amount;
if(mark == 0){
price = 30;
number = document.getElementById("Number").value;
amount = number*price;
document.getElementById("sum").textContent = amount;
    }
else if(mark == 1){
price = 100;
number = document.getElementById("Number").value;
amount = number*price;
document.getElementById("sum").textContent = amount;
    }
else if(mark == 2){
price = 130;
number = document.getElementById("Number").value;
if(document.getElementById("Cage").checked)
amount = number*price*0.6;
if(document.getElementById("House").checked)
amount = number*price;
document.getElementById("sum").textContent = amount;
}
else if(mark == 3){
price = 90;
number = document.getElementById("Number").value;
if(document.getElementById("Cage").checked)
amount = number*price*0.5;
if(document.getElementById("House").checked)
amount = number*price;
if(document.getElementById("delivery").checked)
amount = amount + 10;
document.getElementById("sum").textContent = amount;
    }
else if(mark == 4){
price = 150;
number = document.getElementById("Number").value;
if(document.getElementById("Cage").checked)
amount = number*price*0.5;
if(document.getElementById("House").checked)
amount = number*price;
if(document.getElementById("delivery").checked)
amount = amount + 10;
document.getElementById("sum").textContent = amount;
    }
else if(mark == 5){
price = 300;
number = document.getElementById("Number").value;
if(document.getElementById("Cage").checked)
amount = number*price*0.5;
if(document.getElementById("House").checked)
amount = number*price;
if(document.getElementById("delivery").checked)
amount = amount + 10;
document.getElementById("sum").textContent = amount;
    }
}
