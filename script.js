let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#rebtn1");
let newbtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true;   //for first player 

//here we are going to store winning pattern in 2d array 

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    let turn0 = true;
    enabledbox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn0){
            box.innerText = "0"; //player 1 ki turn khatam yah pr
            turn0 = false;
        }else{
            box.innerText = "X" ;
            turn0 = true;
        }
        box.disabled = true;
        cheakWinner ();
    });
});

const disabledbox =  () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledbox =  () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbox();
};

const cheakWinner = () => {
    for(let pattern of winningPattern) {
        let postval1 = boxes[pattern[0]].innerText;
        let postval2 = boxes[pattern[1]].innerText;
        let postval3 = boxes[pattern[2]].innerText;

        if( postval1 != "" && postval2 != "" && postval3 != ""){
            if(postval1 === postval2 && postval2 === postval3){
                showWinner(postval1);
            }
        }
    }
};

newbtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);