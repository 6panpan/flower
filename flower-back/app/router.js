'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/flowerByPurpose.do', controller.flowerController.flowerByPurpose);
}; 
