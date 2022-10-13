#!/bin/sh

echo "Crea bases de datos"
docker exec -it mongo \
    mongosh -u root -p example \
    --eval "db = db.getSiblingDB('dev'); db.createCollection('dummy');"

docker exec -it mongo \
    mongosh -u root -p example \
    --eval "db = db.getSiblingDB('test'); db.createCollection('dummy');"
