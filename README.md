Projecto para el curso de taller de contruccion de software    
Consiste en una app web para comparar la compatibilidad de componentes
de pcs

# Luego de clonar el repo


## 1.requisitos

    + nodejs y npm < https://nodejs.org/en/ >
    + mongodb <https://www.mongodb.com/ version community>
    + angular(cli) < https://angular.io/ >
 ##### alternativos
    + mongo compass(es una manera grafica de ver los datos)
## 2.dependencias
    + mueverse a la carpeta `trabajo-taller-soft`
    + ejecutar `npm install`
    + entrar a la carpeta client 
    + ejecutar `npm install`
## 3.cargar datos
    + iniciar el motor de mongo (en linux es `sudo mongod`  pero nose en windows)
    + moverse a la carpeta data del proyecto
    + iniciar la shell de mongo (en linux es `mongo` simplemente)
    + dentro de la shell ejecutar ` load("cpu.js") `
    + dentro de la shell ejecutar ` load("gpu.js") `
    + dentro de la shell ejecutar ` load("motherboard.js") `
## 4.ejecutar esta basura
    + inicias el motor de mongo (` sudo mongod `)
    + dentro de la carpeta trabajo-taller-soft ejecuta ` npm run dev `
    + entrar en la carpeta ` client/ `
    + ejecutar ` ng serve --open `  o ejecutar ng serve y abrir en el navegador localhost:3000
## 5.Maravillate xD
