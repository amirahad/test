

declare module '@strapi/strapi/admin' {
  export interface StrapiApp {
    config: {
      locales: string[];
    };
    bootstrap: (app: StrapiApp) => void;
  }
  export default StrapiApp;
}

declare module '@strapi/strapi' {
  export interface StrapiApp {
    config: {
      locales: string[];
    };
    bootstrap: (app: StrapiApp) => void;
  }
}