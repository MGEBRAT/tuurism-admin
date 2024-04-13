'use strict';

/**
 * wewe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wewe.wewe');
