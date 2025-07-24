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
        ssl: env('DATABASE_SSL', true) // allow toggle via env
          ? { rejectUnauthorized: false }
          : false,
      },
      acquireConnectionTimeout: 60000,
      pool: {
        min: 2, // better for production
        max: 10,
        idleTimeoutMillis: 30000,
        createTimeoutMillis: 30000,
        acquireTimeoutMillis: 60000,
        destroyTimeoutMillis: 5000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 200,
      },
    },
  };
};
