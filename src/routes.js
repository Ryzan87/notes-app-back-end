const { updateNote, deleteNote } = require('./handler');

const routes = [
  // {
  //   method: 'POST',
  //   path: '/notes',
  //   handler: notesHandler.addNote,
  // },
  // {
  //   method: 'GET',
  //   path: '/notes',
  //   handler: notesHandler.getAllNotes,
  // },
  // {
  //   method: 'GET',
  //   path: '/notes/{id}',
  //   handler: notesHandler.getNoteById,
  // },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNote,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNote,
  },
];

module.exports = routes;