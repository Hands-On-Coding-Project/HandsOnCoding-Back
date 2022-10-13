#!/bin/sh

echo "Creando volumen para el almacenamiento persistente"
docker volume create mongo-data || true

echo "\n"
echo "Detiene servicios en ejecución"
docker rm -f mongo || true
docker rm -f mongo-express || true

echo "\n"
echo "Ejecuta mongo"
docker run -d --name mongo \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=example \
    -v mongo-data:/data/db \
    -v ./mongo-init:/docker-entrypoint-initdb.d/ \
    mongo:6.0.2 

# NOTA: - al exponer el puerto, mongo esta disponible en localhost:27017

echo "\n"
echo "Ejecuta mongo-express (administración web)"
docker run -d --name mongo-express \
    --link mongo \
    -p 8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=example \
    -e ME_CONFIG_MONGODB_URL=mongodb://root:example@mongo:27017/ \
    mongo-express:latest

# NOTA: - mongo-express queda disponible en localhost:8081
#       - se crea el contenedor con "link" al contenedor "mongo"