---
title: Server
---

# Panduan Sisi Server

Server adalah sisi *backend* dari SEVN. Kita akan bermain di folder ```/server```

```sh
$ cd server /* masuk ke folder server */
$ npm run server /* menjalankan server */
```

## Konfigurasi Env

``./.env``
```env
WEB_PORT=3000
WEB_API_URL=/api

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

/* PROD=true (production mode), PROD={empty} (development mode) */
PROD=

JWT_SECRET=default
JWT_EXP=30m
```

- **WEB_PORT**: Port server & hasil build berjalan
- **WEB_API_URL**: Nama path untuk menempatkan seluruh endpoint API
- **DB_HOST**: Host Database
- **DB_USER**: Username Database
- **DB_PASS**: Password Database
- **DB_NAME**: Nama Database
- **PROD**: (true/false). Jika true, maka production telah berjalan
- **JWT_SECRET**: Kode rahasia untuk JWT. Baca: [Pengenalan JWT](https://jwt.io/introduction/)
- **JWT_EXP**: Waktu expired token JWT

## Membuat Router Endpoint
```sh
$ npm run make router contoh
```
Otomatis membuat file baru di ``./server/contohRouter.js`` dan route baru di ``http://localhost:3000/api/contoh``

## Sql Query

``./routers/contohRouter.js``
```js
const db = table("contoh")
```

### Select

```js

  db
  .select()
  .build();

"SELECT * FROM `contoh`"


  db
  .select()
  .select('id', 'name')
  .build();

"SELECT `id`, `name` FROM `contoh`"


  db
  .select()
  .select('id', 'name')
  .as('label')
  .build();

"SELECT `id`, `name` AS `label` FROM `contoh`"


  db
  .select()
  .select('id', 'name')
  .select('title')
  .as('label')
  .build();

"SELECT `id`, `name`, `title` AS `label` FROM `contoh`"


  db
  .select()
  .select('id', 'name')
  .as('label')
  .select('title')
  .build();

"SELECT `id`, `name` AS `label`, `title` FROM `contoh`"


  db
  .select()
  .select([ 'id', 'name' ])
  .build();

"SELECT `id`, `name` FROM `contoh`"


  db
  .select()
  .select()
  .build();

"SELECT * FROM `contoh`"


  db
  .select()
  .select(['abc','def', { a: 'ghi', sql: 'SOMEFUNC(ghi)' }])
  .build();

"SELECT `abc`, `def`, (SOMEFUNC(ghi)) AS `ghi` FROM `contoh`"


  db
  .calculateFoundRows()
  .select()
  .build();

"SELECT SQL_CALC_FOUND_ROWS * FROM `contoh`"


  db
  .calculateFoundRows()
  .select()
  .select('id')
  .build();

"SELECT SQL_CALC_FOUND_ROWS `id` FROM `contoh`"


  db
  .select()
  .select('id1', 'name')
  .from('table2', 'id2', 'id1')
  .select('id2')
  .build();

"SELECT `t1`.`id1`, `t1`.`name`, `t2`.`id2` FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .select('id1')
  .from('table2', 'id2', 'id1', { joinType: 'left inner' })
  .select('id2')
  .build();

"SELECT `t1`.`id1`, `t2`.`id2` FROM `contoh` `t1` LEFT INNER JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .select('id1', 'name')
  .from('table2', 'id2', 'contoh', 'id1')
  .select('id2')
  .build();

"SELECT `t1`.`id1`, `t1`.`name`, `t2`.`id2` FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2', 'id2', 'contoh', 'id1')
  .count()
  .build();

"SELECT COUNT(*) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2', 'id2', 'contoh', 'id1')
  .count(null, 'c')
  .build();

"SELECT COUNT(*) AS `c` FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2', 'id2', 'contoh', 'id1')
  .count('id')
  .build();

"SELECT COUNT(`t2`.`id`) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .count('id')
  .from('table2', 'id2', 'contoh', 'id1')
  .count('id')
  .build();

"SELECT COUNT(`t1`.`id`), COUNT(`t2`.`id`) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2', 'id2', 'contoh', 'id1')
  .count('id')
  .count('col')
  .build();

"SELECT COUNT(`t2`.`id`), COUNT(`t2`.`col`) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2', 'id2', 'contoh', 'id1')
  .fun('AVG', 'col')
  .build();

"SELECT AVG(`t2`.`col`) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2` = `t1`.`id1`"


  db
  .select()
  .from('table2',['id2a', 'id2b'], 'contoh', ['id1a', 'id1b'])
  .count('id')
  .build();

"SELECT COUNT(`t2`.`id`) FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id2a` = `t1`.`id1a` AND `t2`.`id2b` = `t1`.`id1b`"
```

### Where

```js
  db
  .select()
  .where()
  .build();

"SELECT * FROM `contoh`"


  db
  .select()
  .where(null)
  .build();

"SELECT * FROM `contoh`"


  db
  .select()
  .where({ col: 1 })
  .build();

"SELECT * FROM `contoh` WHERE `col` = 1"


  db
  .select()
  .where({ col: 0 })
  .build();

"SELECT * FROM `contoh` WHERE `col` = 0"


  db
  .select()
  .where({ col: null })
  .build();

"SELECT * FROM `contoh` WHERE `col` IS NULL"


  db
  .select()
  .where({ col: sql.eq(null) })
  .build();

"SELECT * FROM `contoh` WHERE `col` IS NULL"


  db
  .select()
  .where({ col: sql.ne(null) })
  .build();

"SELECT * FROM `contoh` WHERE `col` IS NOT NULL"


  db
  .select()
  .where({ col: undefined })
  .build();

"SELECT * FROM `contoh` WHERE `col` IS NULL"


  db
  .select()
  .where({ col: false })
  .build();

"SELECT * FROM `contoh` WHERE `col` = false"


  db
  .select()
  .where({ col: "" })
  .build();

"SELECT * FROM `contoh` WHERE `col` = ''"


  db
  .select()
  .where({ col: true })
  .build();

"SELECT * FROM `contoh` WHERE `col` = true"


  db
  .select()
  .where({ col: 'a' })
  .build();

"SELECT * FROM `contoh` WHERE `col` = 'a'"


  db
  .select()
  .where({ col: 'a\'' })
  .build();

"SELECT * FROM `contoh` WHERE `col` = 'a\\''"


  db
  .select()
  .where({ col: [ 1, 2, 3 ] })
  .build();

"SELECT * FROM `contoh` WHERE `col` IN (1, 2, 3)"


  db
  .select()
  .where({ col: [] })
  .build();

"SELECT * FROM `contoh` WHERE FALSE"


  db
  .select()
  .where({ col1: 1, col2: 2 })
  .build();

"SELECT * FROM `contoh` WHERE `col1` = 1 AND `col2` = 2"


  db
  .select()
  .where({ col1: 1 }, { col2: 2 })
  .build();

"SELECT * FROM `contoh` WHERE (`col1` = 1) AND (`col2` = 2)"


  db
  .select()
  .where({ col: 1 }).where({ col: 2 })
  .build();

"SELECT * FROM `contoh` WHERE (`col` = 1) AND (`col` = 2)"


  db
  .select()
  .where({ col1: 1, col2: 2 }).where({ col3: 3 })
  .build();

"SELECT * FROM `contoh` WHERE (`col1` = 1 AND `col2` = 2) AND (`col3` = 3)"


  db
  .select()
  .from('table2', 'id', 'id')
  .where('contoh', { col: 1 }, 'table2', { col: 2 })
  .build();

"SELECT * FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id` = `t1`.`id` WHERE (`t1`.`col` = 1) AND (`t2`.`col` = 2)"


  db
  .select()
  .from('table2', 'id', 'id')
  .where('contoh', { col: 1 }, { col: 2 })
  .build();

"SELECT * FROM `contoh` `t1` JOIN `table2` `t2` ON `t2`.`id` = `t1`.`id` WHERE (`t1`.`col` = 1) AND (`col` = 2)"


  db
  .select()
  .where({ col: sql.gt(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` > 1"


  db
  .select()
  .where({ col: sql.gte(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` >= 1"


  db
  .select()
  .where({ col: sql.lt(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` < 1"


  db
  .select()
  .where({ col: sql.lte(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` <= 1"


  db
  .select()
  .where({ col: sql.eq(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` = 1"


  db
  .select()
  .where({ col: sql.ne(1) })
  .build();

"SELECT * FROM `contoh` WHERE `col` <> 1"


  db
  .select()
  .where({ col: sql.between('a', 'b') })
  .build();

"SELECT * FROM `contoh` WHERE `col` BETWEEN 'a' AND 'b'"


  db
  .select()
  .where({ col: sql.not_between('a', 'b') })
  .build();

"SELECT * FROM `contoh` WHERE `col` NOT BETWEEN 'a' AND 'b'"


  db
  .select()
  .where({ col: sql.like('abc') })
  .build();

"SELECT * FROM `contoh` WHERE `col` LIKE 'abc'"


  db
  .select()
  .where({ col:
  sql.not_like('abc') })
  .build();

"SELECT * FROM `contoh` WHERE `col` NOT LIKE 'abc'"


  db
  .select()
  .where({ col: sql.not_in([ 1, 2, 3 ]) })
  .build();

"SELECT * FROM `contoh` WHERE `col` NOT IN (1, 2, 3)"


  db
  .select()
  .where({ __sql: [["LOWER(`stuff`) LIKE 'peaches'"]] })
  .build();

"SELECT * FROM `contoh` WHERE LOWER(`stuff`) LIKE 'peaches'"


  db
  .select()
  .where({ __sql: [["LOWER(`stuff`) LIKE ?", ['peaches']]] })
  .build();

"SELECT * FROM `contoh` WHERE LOWER(`stuff`) LIKE 'peaches'"


  db
  .select()
  .where({ __sql: [["LOWER(`stuff`) LIKE ? AND `number` > ?", ['peaches', 12]]] })
  .build();

"SELECT * FROM `contoh` WHERE LOWER(`stuff`) LIKE 'peaches' AND `number` > 12"


  db
  .select()
  .where({ __sql: [["LOWER(`stuff`) LIKE ? AND `number` == ?", ['peaches']]] })
  .build();

"SELECT * FROM `contoh` WHERE LOWER(`stuff`) LIKE 'peaches' AND `number` == NULL"
```

### Order

```js
  db
  .select()
  .order('col')
  .build();

"SELECT * FROM `contoh` ORDER BY `col` ASC"


  db
  .select()
  .order('col', 'A')
  .build();

"SELECT * FROM `contoh` ORDER BY `col` ASC"


  db
  .select()
  .order('col', 'Z')
  .build();

"SELECT * FROM `contoh` ORDER BY `col` DESC"


  db
  .select()
  .order('col').order('col2', 'Z')
  .build();

"SELECT * FROM `contoh` ORDER BY `col` ASC, `col2` DESC"


  db
  .select()
  .order('col', [])
  .build();

"SELECT * FROM `contoh` ORDER BY col"


  db
  .select()
  .order('?? DESC', ['col'])
  .build();

"SELECT * FROM `contoh` ORDER BY `col` DESC"


  db
  .select()
  .order('ST_Distance(??, ST_GeomFromText(?,4326))', ['geopoint', 'POINT(-68.3394 27.5578)'])
  .build();

"SELECT * FROM `contoh` ORDER BY ST_Distance(`geopoint`, ST_GeomFromText('POINT(-68.3394 27.5578)',4326))"
```

### Limit

```js
  db
  .select()
  .limit(123)
  .build();

"SELECT * FROM `contoh` LIMIT 123"


  db
  .select()
  .limit('123456789')
  .build();

"SELECT * FROM `contoh` LIMIT 123456789"
```

### Select Function

```js
  db
  .select()
  .fun('myfun', 'col1')
  .build();

"SELECT MYFUN(`col1`) FROM `contoh`"


  db
  .select()
  .fun('myfun', [ 'col1', 'col2'])
  .build();

"SELECT MYFUN(`col1`, `col2`) FROM `contoh`"


  db
  .select()
  .fun('dbo.fnBalance', [ 80, null, null], 'balance')
  .build();

"SELECT DBO.FNBALANCE(80, NULL, NULL) AS `balance` FROM `contoh`"


  db
  .select()
  .fun('myfun', [ 'col1', 'col2'], 'alias')
  .build();

"SELECT MYFUN(`col1`, `col2`) AS `alias` FROM `contoh`"


  db
  .select()
  .fun('myfun', [ 'col1', sqlQuery.Text('col2') ], 'alias')
  .build();

"SELECT MYFUN(`col1`, 'col2') AS `alias` FROM `contoh`"
```

### Insert

``` js
  db
  .insert()
  .into('contoh')
  .build();

"INSERT INTO `contoh`"


  db
  .insert()
  .into('contoh')
  .set({})
  .build();

"INSERT INTO `contoh` VALUES()"


  db
  .insert()
  .into('contoh')
  .set({ col: 1 })
  .build();

"INSERT INTO `contoh` (`col`) VALUES (1)"


  db
  .insert()
  .into('contoh')
  .set({ col1: 1, col2: 'a' })
  .build();

"INSERT INTO `contoh` (`col1`, `col2`) VALUES (1, 'a')"
```

### Update

```js
  db
  .update()
  .into('table1')
  .build();

"UPDATE `table1`"


  db
  .update()
  .into('table1')
  .set({ col: 1 })
  .build();

"UPDATE `table1` SET `col` = 1"


  db
  .update()
  .into('table1')
  .set({ col1: 1, col2: 2 })
  .build();

"UPDATE `table1` SET `col1` = 1, `col2` = 2"


  db
  .update()
  .into('table1')
  .set({ col1: 1, col2: 2 }).where({ id: 3 })
  .build();

"UPDATE `table1` SET `col1` = 1, `col2` = 2 WHERE `id` = 3"
```

### Delete

```js
  db
  .delete()
  .build();

"DELETE FROM `contoh`"


  db
  .delete()
  .where({ id: 3 })
  .build();

"DELETE FROM `contoh` WHERE `id` = 3"
```

## JWT Middleware Untuk Route
JWT digunakan untk melindungi dan meng-autentikasi API response

### Mendapatkan token JWT

``./router/contohRouter.js``
```js
import jwt from '../library/jwt'

var payload = {
  id: 1,
  name: "arsan"
}
var token = jwt.sign(payload) // menghasilkan token
```

### Memverifikasi Token

``./router/contohRouter.js``
```js
router.post('/', (req,res) => {
  var token = jwt.verify(req.query.token)
  res.send("Token valid!")
})
```
Jika token valid, maka akan diteruskan ke ``res.send()``. Jika gagal, maka akan menghasilkan respon error JWT

### Verifikasi Dengan Syarat
Digunakan untuk memverifikasi token berdasarkan payload.

``./router/contohRouter.js``
```js
router.post('/', (req,res) => {
  var token = jwt.verify(req.query.token).where({id:1})
  res.send("Token valid")
})
```
Jika token valid dan payload token sesuai kriteria ``.where()``, maka akan diteruskan ke ``res.send()``. Jika gagal atau tidak sesuai kriteria, maka akan menghasilkan respon error JWT

Selengkapnya di [Panduan JWT](https://jwt.io/)
