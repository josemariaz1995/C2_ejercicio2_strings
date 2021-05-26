let snake = "Hola_Buenos_dias";
function snakeToCamel() {
    snake = snake.replace(/([-_])/g, "");
    snake = snake.charAt(0).toLowerCase() + snake.slice(1);
    console.log(snake)
}
snakeToCamel();