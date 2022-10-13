echo "Creando volumen para el almacenamiento persistente"
docker volume create mongo-data

echo "Detiene servicios en ejecución"
docker rm -f mongo
docker rm -f mongo-express

echo "Ejecuta mongo"
docker run -d --name mongo ^
    -p 27017:27017 ^
    -e MONGO_INITDB_ROOT_USERNAME=root ^
    -e MONGO_INITDB_ROOT_PASSWORD=example ^
    -v mongo-data:/data/db ^
    mongo:6.0.2 

echo "Ejecuta mongo-express (administración web)"
docker run -d --name mongo-express ^
    --link mongo ^
    -p 8081:8081 ^
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root ^
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=example ^
    -e ME_CONFIG_MONGODB_URL=mongodb://root:example@mongo:27017/ ^
    mongo-express:latest