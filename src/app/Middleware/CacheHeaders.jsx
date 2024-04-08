export default function cacheHeaders(req, res, next) {
  // Ajouter les en-têtes de sécurité
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' https://example.com"
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // Ajouter l'en-tête Cache-Control existant
  res.setHeader(
    'Cache-Control',
    'public, max-age=31536000, must-revalidate'
  );

  // Appeler next() pour passer au middleware suivant
  next();
}
