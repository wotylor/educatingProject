
var projectName = '民宿租赁系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '民宿信息',
	url: './pages/minsuxinxi/list.html'
},
{
	name: '在线咨询',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboot5dy57/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除","审核"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除","审核"],"menu":"房东","menuJump":"列表","tableName":"fangdong"}],"menu":"房东管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除","审核"],"menu":"民宿信息","menuJump":"列表","tableName":"minsuxinxi"}],"menu":"民宿信息管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"会员等级","menuJump":"列表","tableName":"huiyuandengji"}],"menu":"会员等级管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}],"menu":"办理会员管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}],"menu":"预定信息管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}],"menu":"完成订单管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}],"menu":"订单评价管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","删除"],"menu":"在线咨询","tableName":"messages"}],"menu":"在线咨询"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"热门游记","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","立即预定"],"menu":"民宿信息列表","menuJump":"列表","tableName":"minsuxinxi"}],"menu":"民宿信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","支付"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}],"menu":"办理会员管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","支付","退订","入住"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}],"menu":"预定信息管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","退房"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","评价"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}],"menu":"完成订单管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}],"menu":"订单评价管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","立即预定"],"menu":"民宿信息列表","menuJump":"列表","tableName":"minsuxinxi"}],"menu":"民宿信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除","审核","查看评论"],"menu":"民宿信息","menuJump":"列表","tableName":"minsuxinxi"}],"menu":"民宿信息管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","审核"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}],"menu":"预定信息管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","审核","支付"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","审核"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","审核"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}],"menu":"完成订单管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}],"menu":"订单评价管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线咨询","tableName":"messages"}],"menu":"在线咨询"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","立即预定"],"menu":"民宿信息列表","menuJump":"列表","tableName":"minsuxinxi"}],"menu":"民宿信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"房东","tableName":"fangdong"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
