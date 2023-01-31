/* eslint-disable no-unused-vars */
/* Memuat kode konfigurasi routing server
seperti: path, method, dan handler yang digunakan. */
// eslint-disable-next-line object-curly-spacing
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteById,
} = require('./handler');

const routes = [
  {
    method: 'POST', // menuliskan catatan dari client ke server
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET', // menampilkan catatan dari server ke client
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET', // buka catatan
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT', // edit catatan
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE', // hapus catatan
    path: '/notes/{id}',
    handler: deleteNoteById,
  },
];

module.exports = routes;
