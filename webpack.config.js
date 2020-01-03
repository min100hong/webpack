const path = require('path');

module.exports={
  name:'wordRelay-Setting',
  mode:'development',   // 실서비스에서는 production 으로 변경할것
  devtool: 'eval',  // 빠르게 동작하기위해 설정
  
  resolve: {
      extensions : ['.js', '.jsx'],  // 불러올 확장자를 이렇게 써주면 entry에서 파일 확장자를 써주지 않아도 됨.
  },

  entry: {
    app:['./client'],  // WordRelay.jsx 도 써줘야 하는데, Client.jsx에서 WordRelay.jsx를 불러오기 때문에 써주지 않아도 됨. 
  },  // 입력 (가장 중요한 부분)

  module: {
    rules : [{
        test:/\.jsx?/,
        loader: 'babel-loader',
        options:{
            presets:['@babel/preset-env','@babel/preset-react'],
            plugins:['@babel/plugin-proposal-class-properties'],
        },
    }],
  },  // entry 파일에 module을 적용함.

  output: {
    path: path.join(__dirname,'dist'),   // __dirname : 현재경로를 말함,  현재경로에 dist 라고 보면됨
    filename:'app.js'
  },  // 출력 (가장 중요한 부분)
};