const Hapi = require('@hapi/hapi')
const routes = require('./src/routes')

const init = async () => {
  const server = Hapi.server({
    port: 2500,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();