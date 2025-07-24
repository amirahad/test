import path from 'path';

export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  console.log('Database config function called');
  console.log('env function type:', typeof env);
  
  const databaseUrl = env('DATABASE_URL');
  console.log('DATABASE_URL value:', databaseUrl);
  
  // Fallback configuration for testing
  const config = {
    connection: {
      client: 'postgres',
      connection: databaseUrl || 'postgresql://localhost:5432/strapi',
      useNullAsDefault: true,
    },
  };

  console.log('Returning config:', JSON.stringify(config, null, 2));
  return config;
};
