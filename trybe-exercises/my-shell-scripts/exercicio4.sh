#!/bin/bash
read -p "Qual o seu endereço de IP?" IP
read -p "E sua porta?" PORTA 
if [ $PORTA ]
then
echo "O seu serviço é $IP:$PORTA"
else
echo "A porta não foi encontrada, por favor, insira uma porta"
fi