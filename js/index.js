const arena = document.getElementById("main");
let snake = [];
snake[0] = document.createElement('div');
snake[0].className = 'node';
snake[0].id = "0";
snake[0].style.left = "40px";
snake[0].style.top = "1px";
arena.append(snake[0]);
snake[1] = document.createElement('div');
snake[1].className = 'node';
snake[1].id = "0";
snake[1].style.left = "30px";
snake[1].style.top = "1px";
arena.append(snake[1]);
snake[2] = document.createElement('div');
snake[2].className = 'node';
snake[2].id = "0";
snake[2].style.left = "20px";
snake[2].style.top = "1px";
arena.append(snake[2]);
snake[3] = document.createElement('div');
snake[3].className = 'node';
snake[3].id = "0";
snake[3].style.left = "10px";
snake[3].style.top = "1px";
arena.append(snake[3]);
snake[4] = document.createElement('div');
snake[4].className = 'node';
snake[4].id = "0";
snake[4].style.left = "0px";
snake[4].style.top = "1px";
arena.append(snake[4]);

let dir = "ArrowRight";
function move(dir){
    switch(dir){
        case "ArrowRight":
            if(snake[0].offsetLeft + 10 > 440 || hitSelt(snake[0].offsetLeft + 10,snake[0].offsetTop,snake)){
                alert("lox");
                break;}
            if(snake[0].offsetLeft + 10 === food.offsetLeft && snake[0].offsetTop === food.offsetTop){
                snake.push(eat(food));
                foodPos(food);
                break;
            }
            snake[snake.length-1].style.left = snake[0].offsetLeft + 10 +'px';
            snake[snake.length-1].style.top = snake[0].offsetTop+"px";
            break;
        case "ArrowLeft":
            if(snake[0].offsetLeft - 10 < 0 || hitSelt(snake[0].offsetLeft - 10,snake[0].offsetTop,snake)){
                alert("lox");
                break;}
            if(snake[0].offsetLeft - 10 === food.offsetLeft && snake[0].offsetTop === food.offsetTop){
                snake.push(eat(food));
                foodPos(food);
                break;
            }
            snake[snake.length-1].style.left = snake[0].offsetLeft - 10 +'px';
            snake[snake.length-1].style.top = snake[0].offsetTop+"px";
            break;
        case "ArrowDown":
            if(snake[0].offsetTop + 10 > 441 || hitSelt(snake[0].offsetLeft,snake[0].offsetTop+10,snake)){
                alert("lox");
                break;}
            if(snake[0].offsetTop + 10 === food.offsetTop && snake[0].offsetLeft === food.offsetLeft){
                snake.push(eat(food));
                foodPos(food);
                break;
            }
            snake[snake.length-1].style.top = snake[0].offsetTop + 10 +'px';
            snake[snake.length-1].style.left = snake[0].offsetLeft+"px";
            break;
        case "ArrowUp":
            if(snake[0].offsetTop - 10 < 0 || hitSelt(snake[0].offsetLeft,snake[0].offsetTop-10,snake)){
                alert("lox");
                break;}
            if(snake[0].offsetTop - 10 === food.offsetTop && snake[0].offsetLeft === food.offsetLeft){
                    snake.push(eat(food));
                    foodPos(food);
                    break;
                }
            snake[snake.length-1].style.top = snake[0].offsetTop - 10 +'px';
            snake[snake.length-1].style.left = snake[0].offsetLeft+"px";
            break;
    }
    for(let a=snake.length-1;a>0;a--){
        [snake[a],snake[a-1]] = [snake[a-1],snake[a]];
    }
}
function eat(food){
    console.log(food.offsetTop + ','+food.offsetLeft)
    let newNode =  document.createElement('div');
    newNode.className = 'node';
    newNode.style.top = food.offsetTop + "px";
    newNode.style.left = food.offsetLeft + "px";
    arena.append(newNode);
    return newNode;
}
function foodPos(food){
    food.style.left = Math.floor((Math.random()*450)/10)*10+"px";
    food.style.top = Math.floor((Math.random()*450)/10)*10+1+"px";
}
function hitSelt(x,y,array){
    if(array.filter(a => a.offsetLeft ===x && a.offsetTop === y).length !==0)
        return true;
    return false;
}
let food = document.createElement('div');
food.className = 'food';
foodPos(food);
arena.append(food);
document.addEventListener('keydown',logKey);
function logKey(e){
    if(["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","Space"].indexOf(e.code)>=0)
        if ((dir === "ArrowRight" || dir === "ArrowLeft")&&(e.code === "ArrowRight" || e.code === "ArrowLeft"))
            return;
        if ((dir === "ArrowUp" || dir === "ArrowDown")&&(e.code === "ArrowUp" || e.code === "ArrowDown"))
            return;
        dir = e.code;
}

setInterval(()=>{move(dir);},50);