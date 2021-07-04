# Taller práctico react

Ejercicio realizado durante el curso [Clases del Curso Práctico de React JS](https://platzi.com/clases/react-ejs/) disponible en plataforma Platzi

El objetivo del ejercicio es tomar esta [página base](https://github.com/platzi/curso-frontend-escuelajs) y aplicar arquitectura de componentes para construirla usando React.

# Tips para crear proyecto desde cero

## Estructura Base
1. Carpeta específica para el proyecto
2. Iniciar repo de git

        git init

3. Iniciar proyecto de Node.js

        npm init -y

4. Carpetas Base del proyecto

 + public
    + index.html
 + src
    + components
    + index.js

## Instalación de elementos necesarios

### React

1. Instalación de librería

        npm install --save react react-dom

### Babel

1. Instalación de librerías

        npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

2. Crear archivo .babelrc, el cual usualmente tiene esta base

        {
        "presets": [

            "@babel/preset-env",
            "@babel/preset-react"
        ],
            }
3. Agregar script a package.json

         "build": "webpack --mode production",

### Webpack

1. Instalación

        npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

2. Añadir archivo webpack.config.js

### Webpack Dev Server

1. Instalación

         npm install --save-dev webpack-dev-server

11. Agregar script en package.json 

        "start": "webpack serve --mode development --env development"

## Estilo con SASS
1. Instalar SASS (para estilos de css)
        npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

2. Agregar en webpack para que compile archivos CSS

        const MiniCssExtractPlugin = require('mini-css-extract-plugin');

        //regla
        {
        test: /\.(s*)css$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'sass-loader',
            ],
        },

        //pluging

    
        new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
        }),


3. Habilitar carpetas en proyecto para estilos.
 + src
    + **assets**
        + **styles**

## EsLint
1. Instalar paquetes necesarios

        npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

2. Agregar archivo de configuración de eslint : .eslintrc

## Gitignore
1. Agregar archivo .gitignore con componentes necesarios a ignorar
