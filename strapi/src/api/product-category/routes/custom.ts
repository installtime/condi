export default  {
  routes: [
    {
      method: 'GET',
      path: '/product-categories/:slug',
      handler: 'api::product-category.product-category.findOne',
      config: {
        auth: false,
      },
    },
  ],
};