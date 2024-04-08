module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'nonce-randomnonce' 'strict-dynamic' https:; object-src 'none'; style-src 'self' https: 'unsafe-inline'; img-src 'self' https: data:; media-src 'self' https:; frame-src 'none'; font-src 'self' https:;",
          },

          // X-Content-Type-Options
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // X-Frame-Options
          { key: 'X-Frame-Options', value: 'DENY' },

          // Cache-Control (pour les autres chemins)
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};
