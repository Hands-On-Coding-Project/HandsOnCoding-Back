#!/bin/sh

echo "Detiene servicios en ejecución"
docker rm -f mongo || true
docker rm -f mongo-express || true
