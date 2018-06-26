'use strict';

/**
 * 单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
    it('controller 获取表格数据', () => {
        app.mockCsrf();
        return app.httpRequest()
        .get('/api/user/getAll')
        .send({
            pageSize: 1,
            pageNum: 1
        })
        .expect((res) => {
            console.log(res.body.data);
            assert(res.body);
        })
    });

})