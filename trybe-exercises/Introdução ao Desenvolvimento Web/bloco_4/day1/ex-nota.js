let porcentagem = 40;

switch(true){
    case porcentagem >= 90:
        console.log("Sua nota é A!");
        break;
    case porcentagem >= 80:
        console.log("Sua nota é B!");
        break;
    case porcentagem >= 70:
        console.log("Sua nota é C!");
        break;
    case porcentagem >= 60:
        console.log("Sua nota é D!");
        break;
    case porcentagem >= 50:
         console.log("Sua nota é E!");
         break;
    case porcentagem < 70:
         console.log("Sua nota é F!");
         break;
    default:
        console.log("Ih rapá, bota uma nota de 0 a 100 aí!");
}
