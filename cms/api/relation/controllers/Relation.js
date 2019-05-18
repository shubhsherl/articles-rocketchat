'use strict';

/**
 * Relation.js controller
 *
 * @description: A set of functions called "actions" for managing `Relation`.
 */

module.exports = {

  /**
   * Retrieve relation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.relation.search(ctx.query);
    } else {
      return strapi.services.relation.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a relation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.relation.fetch(ctx.params);
  },

  /**
   * Count relation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.relation.count(ctx.query);
  },

  /**
   * Create a/an relation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.relation.add(ctx.request.body);
  },

  /**
   * Update a/an relation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.relation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an relation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.relation.remove(ctx.params);
  }
};
