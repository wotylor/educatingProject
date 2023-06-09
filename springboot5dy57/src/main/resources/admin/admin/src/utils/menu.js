const menu = {
    list() {
        return [
            //管理员
            {"backMenu":
                    [
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除","审核"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}
                                    ],"menu":"用户管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除","审核"],"menu":"房东","menuJump":"列表","tableName":"fangdong"}
                                    ],"menu":"房东管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除","审核"],"menu":"民宿信息","menuJump":"列表","tableName":"minsuxinxi"}
                                    ],"menu":"民宿信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"会员等级","menuJump":"列表","tableName":"huiyuandengji"}
                                    ],"menu":"会员等级管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}
                                    ],"menu":"办理会员管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}
                                    ],"menu":"预定信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}
                                    ],"menu":"退订信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}
                                    ],"menu":"入住信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}
                                    ],"menu":"完成订单管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}
                                    ],"menu":"订单评价管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-message","buttons":["查看","修改","删除"],"menu":"在线咨询","tableName":"messages"}
                                    ],"menu":"在线咨询"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},
                                    {"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"热门游记","tableName":"news"}
                                    ],"menu":"系统管理"}
                        ],
                "frontMenu":
                    [
                        {
                            "child":
                                [
                                    {
                                        "appFrontIcon":"cuIcon-shop",
                                        "buttons":["查看","立即预定"],
                                        "menu":"民宿信息列表",
                                        "menuJump":"列表",
                                        "tableName":"minsuxinxi"
                                    }
                                ],    "menu":"民宿信息模块"
                        }
                    ],
                "hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"
            },

            //用户
            {"backMenu":
                    [
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","支付"],"menu":"办理会员","menuJump":"列表","tableName":"banlihuiyuan"}
                                    ],"menu":"办理会员管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-form","buttons":["查看","支付","退订","入住"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}
                                    ],"menu":"预定信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}
                                    ],"menu":"退订信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-phone","buttons":["查看","退房"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}
                                    ],"menu":"入住信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-shop","buttons":["查看","评价"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}
                                    ],"menu":"完成订单管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}
                                    ],"menu":"订单评价管理"}
                        ],

                "frontMenu":
                    [
                        {
                            "child":
                                [
                                    {
                                        "appFrontIcon": "cuIcon-shop",
                                        "buttons": ["查看", "立即预定"],
                                        "menu": "民宿信息列表",
                                        "menuJump": "列表",
                                        "tableName": "minsuxinxi"
                                    }
                                ], "menu": "民宿信息模块"
                        }
                    ],
                "hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"
            },

            //房东
            {"backMenu":
                    [
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除","审核","查看评论"],"menu":"民宿信息","menuJump":"列表","tableName":"minsuxinxi"}
                                    ],"menu":"民宿信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-form","buttons":["查看","审核"],"menu":"预定信息","menuJump":"列表","tableName":"yudingxinxi"}
                                    ],"menu":"预定信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-time","buttons":["查看","审核","支付"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}
                                    ],"menu":"退订信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-phone","buttons":["查看","审核"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}
                                    ],"menu":"入住信息管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-shop","buttons":["查看","审核"],"menu":"完成订单","menuJump":"列表","tableName":"wanchengdingdan"}
                                    ],"menu":"完成订单管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"订单评价","menuJump":"列表","tableName":"dingdanpingjia"}
                                    ],"menu":"订单评价管理"},
                        {"child":
                                [
                                    {"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"在线咨询","tableName":"messages"}
                                    ],"menu":"在线咨询"}
                        ],

                "frontMenu":
                    [
                        {
                            "child":
                                [
                                    {
                                        "appFrontIcon":"cuIcon-shop","buttons":["查看","立即预定"],
                                        "menu":"民宿信息列表","menuJump":"列表",
                                        "tableName":"minsuxinxi"
                                    }
                                ],"menu":"民宿信息模块"
                        }
                    ],
                "hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"房东","tableName":"fangdong"
            }
        ]
    }
}
export default menu;
