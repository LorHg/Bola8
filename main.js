let userName = 'Lorea';
userName = '' ? console.log('Hola!') : console.log(`Hola, ${userName}!`);
let userQuestion = '¿Voy a encontrar trabajo este año?'; 
console.log(`Has preguntado: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';
switch (randomNumber) {
case 0:
 eightBall = 'Está claro que sí.';
 break;
case 1:
 eightBall = 'Es muy probable.';
 break;
case 2:
 eightBall = 'Es confuso, pregunta de nuevo.';
 break;
case 3:
 eightBall = 'No puedo predecirlo ahora.';
 break;
case 4:
 eightBall = 'No cuentes con ello.';
 break;
case 5:
 eightBall = 'Mis fuentes dicen que no.';
 break;
case 6:
 eightBall = 'El panorama no pinta bien.';
 break;
case 7:
 eightBall = 'Todo apunta a que sí.';
} 
console.log(`La bola 8 dice: ${eightBall}`);
