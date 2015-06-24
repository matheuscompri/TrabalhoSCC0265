#/bin/bash
for i in `ls`
do
        echo $i;
        extension="${i##*.}"
        filename="${i%.*}"
        if [ $extension == "JPG" ]
        then
                echo "troca"
                mv $filename.JPG $filename.jpg
        fi
done  
