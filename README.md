# API for AIS

This api is provided to share data among devices connected to, those can be web, android, arduino, rasberry, etc.

## Platforms

- typescipt
- nodejs/expressjs
- postgresql client
- mongodb client
- prisma

## Requirements

- nodejs 16.13.1
- postgresql 14.5
- mongodb 6.0.2

## Steps

1. `git clone https://github.com/khoirulhasin/ais_backend.git [project_name]`
2. `cd [project_name]`
3. `npm i`
4. `npm run dev`
5. `http://localhost:400/messages/index`

*nb: To custom configuration, please check src/environments/.env*

## Docker

`docker compose --verbose up --detach --build`

`docker compose -f docker-compose.yml -f docker-compose.dev.yml --verbose up -d`

`docker exec -it backend-ais /bin/sh`

`docker images -a -q | % { docker image rm $_ -f }`

`docker rmi -f $(docker images -aq)`

`docker rm -vf $(docker ps -aq)`

`docker compose logs --follow`

## Debug
Especially for Windows, when running localhost:4000 then you face **empty response**, please restart  **Host Nework Service**