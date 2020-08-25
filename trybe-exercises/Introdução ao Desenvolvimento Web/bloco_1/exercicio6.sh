#!/bin/bash

PATH="/home/toshinho/Downloads/Pathtest/Pathinho.jpg"

if [ -e $PATH ]
then
echo "O caminho $PATH está habilitado!"
fi
if [ -w "$PATH" ]
then
echo "Você tem permissão para editar $PATH"
else
echo "Você não tem permissão para editar $PATH"
fi