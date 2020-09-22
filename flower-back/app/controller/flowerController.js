"use strict";

const Controller = require("egg").Controller;

class GoodsController extends Controller {
    // 根据类别查询花
    async flowerByPurpose() {
        let purpose = this.ctx.request.query.purpose;
        console.log(purpose)
        let list = await this.ctx.service.flowerService.flowerByPurpose(purpose);
        this.ctx.response.body = list;
    }

    //查询花的信息
    async getFlowers() {
        const {ctx} = this;
        ctx.body = await this.ctx.service.flowerService.getFlowers();
    }
     //根据id查询花的信息
     async getFlowersByID() {
        const {ctx} = this;
        let id = this.ctx.request.query.id;
        ctx.body = await this.ctx.service.flowerService.getFlowersByID(id);
    }
}

module.exports = GoodsController;
