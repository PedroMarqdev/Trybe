#!/bin/bash
# Eu sou Tryber e...
 for FILES in "$@"
 do
 if [ -f "$FILES" ]
 then
 echo "$FILES é um arquivo"
 elif [ -d "$FILES" ]
 then
 echo "$FILES é um diretório"
 else
 echo "$FILES não é um arquivo ou diretório :/"
  fi
  ls -l $FILES
done