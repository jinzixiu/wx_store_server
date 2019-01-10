/*
 * Created by dashan~changjiang on 2019/1/10 11:31.
 */



const router = require('koa-router')()



const CONF = require('../conf/baseConf')


const prefixStr = "wx"
router.prefix(`/${prefixStr}`)


router.get('/login', async (ctx, next) => {
	
	
	console.log("login");
	ctx.body = CONF
	
	//1.从服务器拿到用户的
	
	//https://api.weixin.qq.com/sns/jscode2session?appid=<AppId>&secret=<AppSecret>&js_code=<code>&grant_type=authorization_code
	
})

router.get('/string', async (ctx, next) => {
	ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
	ctx.body = {
		title: 'koa2 sdfsdfsdfsdjsson'
	}
})

module.exports = router
