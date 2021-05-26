let snake = "Hola_Buenos_dias";
function snakeToCamel() {
    snake = snake.replace(/([-_])/g, "");
    snake = snake.charAt(0).toLowerCase() + snake.slice(1);
    console.log(snake)
}
snakeToCamel();

let camel = "holaBuenosDias";
function camelToSnake() {
    camel = camel.split(/(?=[A-Z])/);
    const guion = camel.join("-").toString();
    const barraBaja = camel.join("_").toString();
    console.log(guion, barraBaja);


}
camelToSnake();