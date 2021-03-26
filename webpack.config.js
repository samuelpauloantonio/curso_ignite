
const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment   = process.env.NODE_ENV !== 'production'

module.exports = {
  mode : isDevelopment ? 'development' : 'production', //carrega o codigo de forma mais rapida sem perfomar o nosso codigo do bundle
  devtool : isDevelopment ? 'eval-source-map' : 'source-map',// permite ver as linhas certas do nosso app que tem problema no devtool
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename:"bundle.js",
  },

  
  devServer : {
    contentBase : path.resolve(__dirname , 'public') ,//ablita o refresh automatico da pagina criando um servido
    // webpack e carrega o nosso html
    hot : true
  },
  
  resolve : {
    extensions : ['.js', '.jsx'] // indica qual extensoes de arquivo nos estamos usando 
    // para que o webpack procure por eles  e fassa  a conversao para o nosso bundle 
  },
  
  plugins : [
    isDevelopment  && new  ReactRefreshWebpackPlugin(),
    new htmlWebpackPlugin ({
      template : path.resolve(__dirname , 'public',  'index.html'), // permite servir o arquivo estatico html,
      //sem precisa colocar o caminho do  src para o js manualmente no arquivo index.html
      // criando automaticamente uma copia do html igual o bundle foi feito

    })
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
         
          options : {
            plugins : [
              isDevelopment  && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },


      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
        },
      },

      
        {

          test: /\.scss$/,
            exclude:/node_modules/,
            use : ['style-loader', 'css-loader', 'sass-loader']
    
        }    
       


      
    //  
    //   {
    //     test : /.*\.(gif|png|jpe?g)$/i,
    //     use:{
    //       loader : 'file-loader'
    //     }
    //   }
    ],
  },
};
