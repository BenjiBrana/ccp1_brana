// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.port || 3000;

// Créez une instance Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Analysez l'URL
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Gérez les routes personnalisées
      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error(
        'Erreur lors du traitement de la requête',
        req.url,
        err
      );
      res.statusCode = 500;
      res.end('Erreur interne du serveur');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Prêt sur http://${hostname}:${port}`);
    });
});
