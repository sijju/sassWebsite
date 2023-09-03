const production = process.env.NODE_ENV === 'production'
export const SITE_URL = production ? 'https://sass-website-tau.vercel.app/' : 'http://localhost:3000'