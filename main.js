function Game(yourChoice){
    var humanChoice, BotChoice;
    humanChoice = yourChoice.id;
    BotChoice = ComputerChoice(RandomInt());
    result = DecideWinner(humanChoice,BotChoice);
    message = finalMessage(result);
    HtmlChanges(humanChoice ,BotChoice, message);
}

function RandomInt(){
    return Math.floor(Math.random() * 3);
}

function ComputerChoice(Num){
    var result = ['rock','paper','scissor'][Num];
    return result;
}

function DecideWinner(yourChoice,BotChoice){
    var TempDB = {
        'rock' : {'scissor':'1','rock':'0.5','paper':'0'},
        'paper' : {'scissor':'0','rock':'1','paper':'0.5'},
        'scissor' : {'scissor':'0.5','rock':'0','paper':'1'},
    }

    var humanScore = TempDB[yourChoice][BotChoice];
    var BotScore = TempDB[BotChoice][yourChoice];
    return [humanScore,BotScore];
}

function finalMessage([humanChoice,BotChoice]){
    if(humanChoice === '0'){
        return {'message':'You Lost', 'color':'red'};
    } else if(humanChoice === '1'){
        return {'message':'You Won', 'color':'green'};
    } else {
        return {'message':'Its a draw', 'color':'blue'};
    }
}

function HtmlChanges(humanChoice, BotChoice, msg) {
    var imgDB = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var BotDiv = document.createElement('div');
    var msgDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imgDB[humanChoice] +"' height=150 width=150 >";
    msgDiv.innerHTML = "<h1 style=color:"+msg['color']+">"+msg['message']+"</h1>";
    BotDiv.innerHTML = "<img src='"+imgDB[BotChoice] +"' height=150 width=150 >";

    document.getElementById('flex-box').appendChild(humanDiv);
    document.getElementById('flex-box').appendChild(msgDiv);
    document.getElementById('flex-box').appendChild(BotDiv);
};