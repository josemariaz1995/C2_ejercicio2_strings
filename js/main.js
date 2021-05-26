let snake = "Hola_áuenos_dias";
function snakeToCamel() {
    snake= snake.split(/([-_])/g);
    snake= snake.map(
        (n) => 
           n.charAt(0).toUpperCase() + n.slice(1)
    );
    snake = snake.join("");
    snake = snake.charAt(0).toLowerCase(/(?=[A-Z][A-zÀ-ú])/) + snake.slice(1);
    console.log(snake)
}
snakeToCamel();

let camel = "holaÁuenosDias";
function camelToSnake() {
    camel = camel.split(/(?=[A-ZÀ-Ú])/);
    const guion = camel.join("-");
    const barraBaja = camel.join("_");
    console.log(guion, barraBaja);


}
camelToSnake();