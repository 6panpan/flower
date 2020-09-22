'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  
  //用户
  //注册
  router.post('/regist', controller.userController.regist)
  //登录
  router.post('/login', controller.userController.login)
  //判断手机号的唯一性
  router.post('/onlyphone', controller.userController.onlyphone)
  //根据用户id获取用户信息
  router.get('/getUserinf', controller.userController.getUserinf)
  //根据用户id修改用户信息
  router.post('/infchange', controller.userController.infchange)

  
  //纪念日
  //添加纪念日
  router.post('/addRemind', controller.remindController.addRemind)
  //根据用户id获取纪念日
  router.post('/getRemind', controller.remindController.getRemind)
  //根据纪念日id删除纪念日
  router.post('/delRemind', controller.remindController.delRemind)

  //花
  router.get('/flowerByPurpose.do', controller.flowerController.flowerByPurpose);

  // 根据花id查询用户评价
  router.get('/getBuyByID', controller.userController.getBuyByID);

  //查询花的信息
  router.get('/getFlowers', controller.flowerController.getFlowers);
  //根据id查询花的信息
  router.get('/getFlowersByID', controller.flowerController.getFlowersByID);

  //新增订单
  router.post('/addOrder', controller.orderController.addOrder);
  //根据id查询订单的信息
  router.get('/getOrderID', controller.orderController.getOrderID);
  //修改订单中的数量
  router.post('/updateorder', controller.orderController.updateorder)
};
