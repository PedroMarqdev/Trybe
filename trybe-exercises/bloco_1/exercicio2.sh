#!/bin/bash
read -p "Qual o seu nome?" NOME;
read -p "E sua idade?" IDADE;
echo "Estamos pegando informação de quem é o usuário"
echo "Aguarde"; sleep 2;
echo "Obrigado por esperar, estamos pegando informação do diretório"
sleep 1;
echo "Aguarde"; sleep 2;
RESULTADO="Seu nome é $NOME\nPossui $IDADE anos\nE seu usuário é: `whoami` \nE você está no diretório: `pwd`";
echo -e  $RESULTADO