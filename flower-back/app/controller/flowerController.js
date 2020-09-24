"use strict";

const Controller = require("egg").Controller;

class GoodsController extends Controller {
    // 根据类别查询花
    async flowerByPurpose() {
        let purpose = this.ctx.request.query.purpose;
        // console.log(purpose);
        let list = await this.ctx.service.flowerService.flowerByPurpose(purpose);
        this.ctx.response.body = list;
    }
    // 根据类别查询花
    async allFlower() {
        let flower_name = this.ctx.request.query.flower_name;
        let purpose = this.ctx.request.query.purpose;
        let kind = this.ctx.request.query.kind;
        let num = this.ctx.request.query.num;
        // console.log("这里是" + flower_name, purpose, kind, num);
        let list = await this.ctx.service.flowerService.allFlower(flower_name, purpose, kind, num);
        this.ctx.response.body = list;
    }
    //查询花的信息
    async getFlowers() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.flowerService.getFlowers();
    }
    //根据id查询花的信息
    async getFlowersByID() {
        const { ctx } = this;
        let id = this.ctx.request.query.id;
        ctx.body = await this.ctx.service.flowerService.getFlowersByID(id);
    }
}

module.exports = GoodsController;
