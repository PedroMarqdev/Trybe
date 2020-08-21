#!/bin/bash
VEZES=$(date +%F)
for Rep in `ls *.png`
do
REPS="$Rep"
if [[ "$Rep" == "$VEZES`*`" ]]
then
echo "$Rep já possui data"
else
mv $Rep ${VEZES}-${Rep}
fi
done