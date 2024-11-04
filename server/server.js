const db = require("./utils/db");

//requireでexpressモジュール読み込み
const express = require('express');
//import db from './utils/db'
//expressモジュールを実体化して、定数appに代入
const app = express();
//ポート番号を指定
const port = 3001;

const customerRoutes = require('./routes/customerRoute')

app.use("./api", customerRoutes);

// '/'パスにGET要求があった際に実行する処理
app.get('/', (req, res) => {
  res.send('Hello Wolrd...');
})

// '/'apiパスの￥にGET要求があった際に実行する処理
app.get('/api', (req, res) => {
  // /apiにアクセスした際に、MySQLに対して行う処理
  //res.json({ message: "Hello World!" })
  db.query(
    'SELECT * FROM management',
    function(err, results, fields){
      if(err){
          console.log('接続エラー');
          throw err;
      }
      res.json({ message: results[0].会社名})
      //テーブル接続は出来たので上のj村を
    }
  )
});

//3000ポートでlisten
app.listen(port, () => {
  console.log(`listening on *:${port}`)
})


// "icons": [
//   {
//     "src": "favicon.ico",
//     "sizes": "64x64 32x32 24x24 16x16",
//     "type": "image/x-icon"
//   },
//   {
//     "src": "logo192.png",
//     "type": "image/png",
//     "sizes": "192x192"
//   },
//   {
//     "src": "logo512.png",
//     "type": "image/png",
//     "sizes": "512x512"
//   }
// ],
