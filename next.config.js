module.exports = {
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/freenext',
    DB_URI: 'mongodb+srv://trivopr:admin123@cluster0.tnu6d.mongodb.net/Cluster0?retryWrites=true&w=majority',

    STRIPE_API_KEY: '',
    STRIPE_SECRET_KEY: '',

    STRIPE_WEBHOOK_SECRET: '',

    CLOUDINARY_CLOUD_NAME: '',
    CLOUDINARY_API_KEY: '',
    CLOUDINARY_API_SECRET: '',

    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',
    SMTP_FROM_EMAIL: '',
    SMTP_FROM_NAME: '',

    NEXTAUTH_URL: '',
  },
  images: {
    domains: ['res.cloudinary.com', 'dummyimage.com'],
    loader: 'imgix',
    path: 'https://dummyimage.com/',
  },
};
