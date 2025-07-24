import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),
    useNullAsDefault: true,
  },
});
