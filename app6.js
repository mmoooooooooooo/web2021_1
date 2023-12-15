const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



var http = require("http");
var fs = require("fs");

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const massage = "";
  res.render('show', { mes: "hello" });
});



app.post("/insert", (req, res) => {
  let sql = `insert into Shop ("genre", "shopName" , "postal_code" , "prefecture" , "city" , "address1" , "address2" , "time1" , "time2") values (` + req.body.genre + `, "` + req.body.shopName + `" , "` + req.body.postal_code + `" ,` + req.body.prefecture + ` , "` + req.body.city + `" , "` + req.body.address1 + `" , "` + req.body.address2 + `" , ` + req.body.time1 + ` , ` + req.body.time2 + `);`
  console.log(sql);
  db.serialize(() => {
    db.run(sql, (error, row) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      console.log("データを追加しました");
    });
  });
  res.render("main", { mes: "登録が完了しました！" });
});


app.get("/serch", (req, res) => {
  console.log( req.query );
    db.serialize( () =>  {
      let sql = "select id,shopName from Shop where genre = "+ req.query.genre + " and prefecture =  "+ req.query.prefecture + ";";
      console.log( sql );
      db.all(sql, (error,data) => {
        if(error){
          res.render('error', { mes: "条件のお店は見つかりませんでした"});
        }
        console.log( data );
        console.log("成功しました。");
        res.render('list', {data:data});
      })

  })
});
app.get("/shop/:id", (req, res) =>{
  db.serialize( () =>  {
    let sql = "select genre.name as genre,shopName,postal_code,prefecture,city,address1,address2,time1,time2 from Shop inner join Genre on genre = Genre.id  where Shop.id = "+ req.params.id + ";";
    console.log( sql );
    db.all(sql, (error,data) => {
      if(error){
        res.render('error', { mes: "エラー"});
      }
      console.log( data );
      console.log("成功しました。");
      let sql ="select*from "
      res.render('result', {data:data});
    })

})
});

app.use(function (req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
