# web2021_1

2021年度の授業用リポジトリ

## ファイル一覧

ファイル名/ディレクトリ名 | 役割
-|-
app.js | expressによるHello world
app2.js | テンプレートファイルshow.ejsを使用したHello World
app3.js | app2.jsにpublicディレクトリの処理を加えたもの
app4.js | app3.jsにファイルが見つからなかった場合の処理を加えたもの
app5.js | データベースから都道府県，人口を取得して返す
app6.js | 都道府県，人口の表示数をページから取得する
public | 静的なページデータ
views | テンプレートファイル
create.js | テーブルを登録するサンプル
delete.js | テーブルからデータを削除するサンプル
insert.js | テーブルにデータを追加するサンプル
schema.js | テーブル情報を表示するサンプル
select.js | テーブルからデータを取得するサンプル
tables.js | テーブル名を表示するサンプル
test.db | app5.jsやapp6.jsで使用するデータベース

# テーブル店舗情報

### Shop
項目 | 型 | 内容 | 例
-|-|-|-
id |integer |primary key<br>店舗ID | 0
genre|int |not null<br>ジャンル | 0
shopName|text|not null<br>店名|いづく
postal_code|char|not null<br>郵便番号|1111111
prefecture|int|not null<br>都道府県|0
city|text|not null<br>市区町村|三鷹
address1|char|not null<br>丁目・番地|3丁目2番地
address2|text|not null<br>建物名等|千葉工業大学
time1|int|not  null<br>営業時間（時）|５
time2|int|not null<br>営業時間（時）|6


# テーブルジャンル

### Genre
項目 | 型 | 内容 | 例
-|-|-|-
id | integer | primary key<br>ジャンルID|0
genre|name text| not null<br>ジャンル|中華

