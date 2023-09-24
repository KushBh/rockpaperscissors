function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "rock";
    }else if(choice == 1){
        return "scissors";
    }else if(choice == 2){
        return "paper";
    }
}

