const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
create table Shop(
  id integer primary key,
  genre int not null,
  shopName text not null,
  postal_code char(10) not null,
  prefecture int not null,
  city text not null,
  address1  char(20) not null,
  address2 text not null,
  time1 int not null,
  time2 int not null   
);
`

db.serialize( () => {
  db.run( schema, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "テーブルを作成しました" );
  });
});
