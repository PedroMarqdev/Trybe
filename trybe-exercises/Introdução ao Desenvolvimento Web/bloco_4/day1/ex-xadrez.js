let peca = "Torre";

    if (peca == "rei" || peca.toLowerCase() == "rei") {
        console.log("O rei pode se locomover em todas as direções em uma unidade");
    }
    else if(peca == "rainha" || peca.toLowerCase() == "rainha") {
        console.log("A rainha se move ao longo de qualquer direção, mas não pode pular qualquer peça");
    }
    else if (peca == "bispo" || peca.toLowerCase() == "bispo") {
        console.log("O bispo pode se mover ao longo da horizontal, mas não pula peça");
    }
    else if (peca == "cavalo" || peca.toLowerCase() == "cavalo") {
        console.log("O cavalo é a única peça que pode pular outras, seu movimento é em L, duas casas na horizontal e uma na vertical");
    }
    else if (peca == "torre" || peca.toLowerCase() == "torre") {
        console.log("A torre se movimenta ao longo da horizontal e vertical, mas não pode pular peças");
    }
    else if (peca == "peão" || peca.toLowerCase() == "peão") {
        console.log("O peao movimenta apenas uma casa para frente e só pode captura outras peças na diagonal. O peão também pode se mover 2 unidades no seu primeiro movimento do jogo");
    }
    else{
        console.log("Você não inseriu uma peça de xadrez...")
    }
