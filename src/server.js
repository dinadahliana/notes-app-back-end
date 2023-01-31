/* eslint-disable no-unused-vars */
/* Memuat kode untuk membuat, mengonfigurasi,
dan menjalankan server HTTP menggunakan Hapi. */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Sever berjalan pada ${server.info.uri}`);
};

init();

