/*
 * Created by dashan~changjiang on 2019/1/10 11:31.
 */



const router = require('koa-router')()



const CONF = require('../conf/baseConf')
var request = require("request");


const prefixStr = "wx"
router.prefix(`/${prefixStr}`)


router.get('/login', async (ctx, next) => {
	
	let parm = ctx.request.query

    console.log(parm);
	console.log("login");
	ctx.body = CONF
	
	//1.从服务器拿到用户的

    var options = { method: 'GET',
        url: CONF.weixinURL,
        qs:
            { appid: CONF.appid,
				secret: CONF.secret,
				js_code: parm.code,
				grant_type: 'authorization_code' },
		};

    
	
	try{


        let res = await wxLogin(options)

        ctx.body ={code:200,msg:"success",data:JSON.parse(res)}

    }catch (err) {
        return ctx.body ={code:400,msg:err.message}
    }
	


    async function wxLogin(options){
        return new Promise(function(resolve,reject){
            request(options, function (error, response, body) {

                if (error) reject(error)
                
                resolve(body)
            });
        })
    }


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


