module.exports = {

    presets : [
        "@babel/preset-env",
        "@babel/preset-typescript",
        ["@babel/preset-react", {
        runtime : 'automatic' //faz com que não precizemos importar o React em todos os componentes que formos criar
        }]
    ]

                                                            
}