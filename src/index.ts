import strapi from '@strapi/strapi';

export default async (context: any) => {
  try {
    const strapiInstance = strapi.createStrapi();
    await strapiInstance.start();
    return strapiInstance;
  } catch (error) {
    console.error('Strapi bootstrap error:', error);
    throw error;
  }
};