const strapi = require('@strapi/strapi');

export default async (context: any) => {
  try {
    const appContext = await strapi.compile();
    const strapiInstance = strapi(appContext);
    await strapiInstance.start();
    return strapiInstance;
  } catch (error) {
    console.error('Strapi bootstrap error:', error);
    throw error;
  }
};