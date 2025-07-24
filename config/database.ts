import path from 'path';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');
  
  if (!databaseUrl) {
    console.error('DATABASE_URL environment variable is not set');
    throw new Error('DATABASE_URL environment variable is required');
  }

  return {
    connection: {
      client: 'postgres',
      connection: databaseUrl,
      acquireConnectionTimeout: 60000,
      pool: {
        min: 0,
        max: 10,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 30000,
        destroyTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 200,
      },
      useNullAsDefault: true,
    },
  };
};
