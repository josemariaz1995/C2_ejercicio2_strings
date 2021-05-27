/* correccion

1. extraer las palabra
 conts palabras = fraseSnake.split('_')

2.recorrer el grupo de palbras
 let palabrasModificadas = palabras[0];

+ cojera la pirmera palabra de ala array y
  despues en for iremos añadiendole la siguiente seccion
  de array en mayusculas

for(conts palabra in palabras.slice(1)){
 const inicialMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1)
  palabrasModificadas += inicialMayusculas;
}
console.log(palabrasModificadas);

3. por cada palabra menos la primeras ponemos en mayuscula */



let snake = "Hola_áuenos_dias";
function snakeToCamel() {
    snake= snake.split("_");
    console.log(snake);
    snake= snake.map(
        (n) =>
           n.charAt(0).toUpperCase() + n.slice(1)
    );
    snake = snake.join("");
    snake = snake.charAt(0).toLowerCase(/(?=[A-Z][A-zÀ-ú])/) + snake.slice(1);
    console.log(snake)
}
snakeToCamel();


const fraseCamelCase = "holaBuenosDias";

let camel = "holÄuenosDias";
function camelToSnake() {
    camel = camel.split(/(?=[A-ZÀ-ÿ])/);
    const guion = camel.join("-").toLowerCase();
    const barraBaja = camel.join("_").toLowerCase();
    console.log(guion, barraBaja);


}
camelToSnake();
