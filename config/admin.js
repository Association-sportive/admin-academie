module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0457ed8f7f64bf4ccdcd36ce4780dd99'),
  },
});
