const Controller =require('egg').Controller;
class OrderrConstroller extends Controller{
    // 新增订单
    async addOrder() {
        // let id = this.ctx.request.body.id;
        let name = this.ctx.request.body.name;
        let price = this.ctx.request.body.price;
        let num = this.ctx.request.body.num;
        let flower_id=this.ctx.require.body.flower_id;
        let r = await this.ctx.service.orderService.addOrder(flower_id, name, price,num)
        this.ctx.response.body = r
    };
    // 获取订单
    async getOrderID() {
        const {ctx} = this;
        let id = this.ctx.request.query.id;
        ctx.body = await this.ctx.service.orderService.getOrderByID(id);
    }
    //修改订单
    async updateorder() {
        let id = this.ctx.request.query.id;
        let num = this.ctx.request.query.num;
        let r = await this.ctx.service.orderService.updateorder(id, num)
        this.ctx.response.body = r
    };
}
module.exports = OrderrConstroller