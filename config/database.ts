import path from 'path';

export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const databaseUrl = env('DATABASE_URL');
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: databaseUrl,
        ssl: {
          rejectUnauthorized: false
        }
      },
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
