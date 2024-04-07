export default function cacheHeaders(req, res, next) {
  res.setHeader(
    'Cache-Control',
    'public, max-age=31536000, must-revalidate'
  );
  next();
}
