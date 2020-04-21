# Deploy

Mendeploy dalam hal ini adalah menggabungkan frontend Vue.js ke dalam folder ``/server`` sehingga menjadi web yang monolitic.

## Atur .env

``/server/.env``
```env
PROD=true
```

## Build Vue.js
``/client``
```sh
$ npm run build
```

## Menjalankan Aplikasi
Masuk ke root ``/``
```sh
$ serve server
```
_\*Jika belum memiliki perintah **serve**, jalankan ``npm i -g serve`` terlebih dahulu_

Seluruh hasil aplikasi web berada di folder ``/server``
