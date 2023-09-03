const production = process.env.NODE_ENV === 'production'
export const SITE_URL = production ? 'prod_url' : 'http://localhost:3000'