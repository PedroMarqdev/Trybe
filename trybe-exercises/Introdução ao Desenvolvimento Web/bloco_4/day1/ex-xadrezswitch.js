let peca = "Rainha";

switch (true){
    case peca == "rei" || peca.toLowerCase() == "rei":
    console.log("O rei pode se locomover em todas as direções em uma unidade");
    break;
    case peca == "rainha" || peca.toLowerCase() == "rainha":
    console.log("A rainha se move ao longo de qualquer direção, mas não pode pular qualquer peça");
    break;
    case peca == "bispo" || peca.toLowerCase() == "bispo":
    console.log("O bispo pode se mover ao longo da horizontal, mas não pula peça");
    break;
    case peca == "cavalo" || peca.toLowerCase() == "cavalo":
    console.log("O cavalo é a única peça que pode pular outras, seu movimento é em L, duas casas na horizontal e uma na vertical");
    case peca == "torre" || peca.toLowerCase() == "torre":
    console.log("A torre se movimenta ao longo da horizontal e vertical, mas não pode pular peças");
    break;
    case peca == "peão" || peca.toLowerCase() == "peão":
    console.log("O peao movimenta apenas uma casa para frente e só pode captura outras peças na diagonal. O peão também pode se mover 2 unidades no seu");
    default:
    console.log("Acho que você não inseriu uma peça de xadrez...");
}