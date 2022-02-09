console.log("jogo top")

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


const planoDeFundo = {  
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
        desenha() {
            contexto.fillStyle = '#70c5ce';
            contexto.fillRect(0,0, canvas.width, canvas.height)
            
        contexto.drawImage(
            sprites, 
            planoDeFundo.spriteX, planoDeFundo.spriteY, // sprite X, sprite Y 
            planoDeFundo.largura, planoDeFundo.altura, // tamanho recorte sprite 
            planoDeFundo.x, planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura, 
        );
        contexto.drawImage(
            sprites, 
            planoDeFundo.spriteX, planoDeFundo.spriteY, // sprite X, sprite Y 
            planoDeFundo.largura, planoDeFundo.altura, // tamanho recorte sprite 
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y, 
            planoDeFundo.largura, planoDeFundo.altura, 
        );
    },
};

const flappybird = {  
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,

        atualiza(){
            flappybird.velocidade = flappybird.velocidade + flappybird.gravidade;
            console.log(flappybird.velocidade)
            flappybird.y = flappybird.y + flappybird.velocidade;
        },

        desenha() {
        contexto.drawImage(
            sprites, 
            flappybird.spriteX, flappybird.spriteY, // sprite X, sprite Y 
            flappybird.largura, flappybird.altura, // tamanho recorte sprite 
            flappybird.x, flappybird.y, 
            flappybird.largura, flappybird.altura, 
        );
    }
}



const chao = {  
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height -112,
        desenha() {
        contexto.drawImage(
            sprites, 
            chao.spriteX, chao.spriteY, // sprite X, sprite Y 
            chao.largura, chao.altura, // tamanho recorte sprite 
            chao.x, chao.y, 
            chao.largura, chao.altura, 
        );
        contexto.drawImage(
            sprites, 
            chao.spriteX, chao.spriteY, // sprite X, sprite Y 
            chao.largura, chao.altura, // tamanho recorte sprite 
            (chao.x + chao.largura), chao.y, 
            chao.largura, chao.altura, 
        );
    },
};



function loop(){
    flappybird.atualiza();

    planoDeFundo.desenha();
    flappybird.desenha();
    chao.desenha();
    requestAnimationFrame(loop);
}

loop();