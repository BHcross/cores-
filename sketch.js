var tela;
var bloco1, bloco2, bloco3, bloco4;
var bola, arestas;
var music;
var parede1, parede2, parede3, parede4

function preload() {
    // carregue o som aqui
}

function setup() {
    tela = createCanvas(770, 650);

    bloco1 = createSprite(0, 640, 360, 30);
    bloco1.shapeColor = "black";

    bloco2 = createSprite(280, 640, 200, 30);
    bloco2.shapeColor = "black";

    bloco3 = createSprite(480, 640, 200, 30);
    bloco3.shapeColor = "black";

    bloco4 = createSprite(670, 640, 200, 30);
    bloco4.shapeColor = "black";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20, 750), 100, 40, 40);
    bola.shapeColor = rgb(255, 255, 255);
    bola.velocityX = Math.round(random(5, 22));
    bola.velocityY = Math.round(random(5, 22));

    parede1 = createSprite(790, 300, 30, 800);
    parede1.visible = false
    parede3 = createSprite(0, 300, 30, 800);
    parede3.visible = false
    parede2 = createSprite(450, 650, 950, 30);
    parede2.visible = false
    parede4 = createSprite(420, 0, 950, 30);
    parede4.visible = false



}

function draw() {
    background(rgb(169, 169, 169));
    if (bola.isTouching(parede1) || bola.isTouching(parede2) || bola.isTouching(parede3) || bola.isTouching(parede4)) {
        bola.bounceOff(parede1);
        bola.bounceOff(parede2);
        bola.bounceOff(parede3);
        bola.bounceOff(parede4);
    }



    //escreva o código de ricochete de bola para bloco1 
    if (bloco1.isTouching(bola)) {
        bola.shapeColor = "blue";

    }


    if (bloco2.isTouching(bola)) {
        bola.shapeColor = "orange";

    }
    if (bloco3.isTouching(bola)) {
        bola.shapeColor = "green";

    }
    if (bloco4.isTouching(bola)) {
        bola.shapeColor = "red";

    }
    if (bloco4.isTouching(bola)&& bloco3.isTouching(bola)) {
        bola.shapeColor = "brown";

    }
    if (bloco1.isTouching(bola)&& bloco2.isTouching(bola)) {
        bola.shapeColor = "lightgreen";

    }
    if (bloco2.isTouching(bola)&& bloco3.isTouching(bola)) {
        bola.shapeColor = rgb(215, 2, 221);

    }



    drawSprites();
}