export default ({ env }) => ({
  host: '0.0.0.0',
  port: process.env.PORT || 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('VERCEL_URL') ? `https://${env('VERCEL_URL')}` : 'http://localhost:1337',
});
