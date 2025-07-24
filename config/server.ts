module.exports = ({ env }: { env: any }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('RENDER_EXTERNAL_URL', 'http://localhost:1337'),
});