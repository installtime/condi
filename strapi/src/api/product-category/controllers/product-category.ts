/**
 * product-category controller
 */


import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-category.product-category', ({strapi}) => ({
    async findOne(ctx) {
 
        const sanitizedQueryParams = await this.sanitizeQuery(ctx);


        const {slug} = ctx.params


         const results = await strapi.db.query('api::product-category.product-category').findOne({
            where: { slug },
            populate: {
           
                    list: true
            },
          
         })


         const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
    },
}));

