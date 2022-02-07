#siempre debe haber una imagen de base
FROM node:17-alpine3.14
#ruta del entorno de trabajo que se crea en el contenedor
WORKDIR /app
# Copia los archivos de la aplicacion en la carpeta app del contenedor
COPY . .
# instalo las dependencias
RUN npm i
# compilo el codigo
RUN npm run  build
# especificacion del comando que se va a correr # siempre debe tenerla
CMD ["node", "/app/dist/index.js"]