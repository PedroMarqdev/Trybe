#!/bin/bash
echo "Você está começando Shell, parabéns!" # Essa frase, será exibida na tela
echo "Criando um arquivo de texto!"
touch testinho.txt
echo "Aguarde"; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;
echo "Digite o que você quer no arquivo!"
cat > testinho.txt
echo "Aguarde"; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;
echo "Arquivo de texto criado com sucesso!"
