function play(){
    // random number:
    var randomNumber1=Math.floor((Math.random()*6)+1);
    var randomNumber2=Math.floor((Math.random()*6)+1);
    var randomNumber1Source="./images/dice"+randomNumber1+".png"
    var randomNumber2Source="./images/dice"+randomNumber2+".png"

    // picture source:
    document.querySelector(".img1").setAttribute("src",randomNumber1Source);
    document.querySelector(".img2").setAttribute("src",randomNumber2Source);

    // result:
    if (randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 wins!";
    }
    else if (randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
}

play();