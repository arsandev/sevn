---
title: Client
---

# Panduan Sisi Client

Seperti yang sudah dikatakan, sisi client menggunakan Vue.js. Kita akan bermain di folder ``/client``

```sh
$ cd client /* masuk ke folder client */
$ npm run client /* menjalankan client */
```

## Konfigurasi

``./vue.config.js``

```js
module.exports = {
  outputDir: path.resolve(__dirname, '../server/vue'),
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
```

- **devServer.proxy** adalah alamat server. Sesuaikan host dan port yang digunakan server (jika alamat server berubah).
- **outputDir** adalah lokasi dimana hasil *build* dari Vue.js akan diletakan (secara default di folder ``/server/vue``).

Selengkapnya di [Panduan Vue Js](https://vuejs.org/v2/guide/)
