'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
<<<<<<< HEAD
  // router.get('/', controller.home.index);
  // router.post('/',controller)
  
};
=======
  router.get('/flowerByPurpose.do', controller.flowerController.flowerByPurpose);
}; 
>>>>>>> aff434c1597d3c302a8ac74677f3903c28b67dd9
