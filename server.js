const express = require('express');
const next = require('next');
const cacheHeaders = require('./Middleware/CacheHeaders'); // Importez le middleware que vous avez créé

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Appliquer le middleware cacheHeaders
  server.use(cacheHeaders);

  // Gérer toutes les autres requêtes avec Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Démarrer le serveur
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
