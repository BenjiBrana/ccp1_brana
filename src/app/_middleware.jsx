export const middleware = (handler) => async (req, res) => {
  // Activer la mise en cache pour les images pendant 1 an
  res.setHeader('Cache-Control', 'public, max-age=31536000');

  return handler(req, res);
};

export default middleware;
