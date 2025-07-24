const strapi = require('@strapi/strapi');
const path = require('path');

let strapiInstance;

async function createStrapi() {
    if (!strapiInstance) {
        // Compile TypeScript to JavaScript if needed
        const appContext = await strapi.compile();
        strapiInstance = strapi(appContext);
        await strapiInstance.load();
    }
    return strapiInstance;
}

module.exports = async (req, res) => {
    try {
        const app = await createStrapi();

        // Let Strapi handle the request
        app.server.app.callback()(req, res);
    } catch (error) {
        console.error('Strapi serverless error:', error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        });
    }
}; 