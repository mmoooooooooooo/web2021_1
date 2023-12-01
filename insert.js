const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

//let sql = `insert into car ("name", "maker_id") values ("NSX", 1);`;
let sql = `insert into shop ("genre", "shopName" , "postal_code" , "prefecture" , "city" , "address1" , "address2" , "time1" , "time2") values (0 , "い" , "181-0000" , 0 , "三鷹" , "3-2" , "あいう" , 1 , 2);`;

db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
