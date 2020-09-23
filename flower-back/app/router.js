"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get("/flowerByPurpose.do", controller.flowerController.flowerByPurpose);
    router.get("/allFlower", controller.flowerController.allFlower);

    // 根据花id查询用户评价
    router.get("/getBuyByID", controller.userController.getBuyByID);

    //查询花的信息
    router.get("/getFlowers", controller.flowerController.getFlowers);
    //根据id查询花的信息
    router.get("/getFlowersByID", controller.flowerController.getFlowersByID);

    //新增订单
    router.post("/addOrder", controller.orderController.addOrder);
    //根据id查询订单的信息
    router.get("/getOrderID", controller.orderController.getOrderID);
    //修改订单中的数量
    router.post("/updateorder", controller.orderController.updateorder);
};
