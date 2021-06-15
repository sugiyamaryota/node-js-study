// Run `node index.js` in the terminal

'use strict';
const http = require('http');
const fibonacci = require('./fibonacci');
// サーバオブジェクトの生成とリクエストハンドラの設定
http
  .createServer((req, res) => {
    // http://localhost:3000/10 へのリクエストではreq.urlは'/10'になるので、 // そこから1文字目を取り除いてnを取得する
    const n = Number(req.url.substr(1));
    if (Number.isNaN(n)) {
      // Number.isNaN()で数値かどうか判定し、数値でなかった場合は無視
      return res.end();
    }
    const result = fibonacci(n);
    // res.end()で計算結果をレスポンスとして返す
    res.end(result.toString());
  })
  .listen(3000); // 3000ポートでリクエストを待機
