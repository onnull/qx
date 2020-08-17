主机名= api.weibo.cn，mapi.weibo.com，*。uve.weibo.com，mp.weixin.qq.com，api.bilibili.com，app.bilibili.com，www.zhihu.com，api。 zhihu.com，link.zhihu.com，aweme * .snssdk.com，*。kuwo.cn，*。xiaoxiao * .com，api * .tiktokv.com，*。musical.ly，*。amemv.com，p .du.163.com，getuserinfo.321mh.com，getuserinfo-globalapi.zymk.cn，ios.fuliapps.com，vsco.co，api.vnision.com，*。my10api.com，apple.fuliapps.com，newdrugs .dxy.cn，app101.avictown.cc，api.hlo.xyz，api.ijo.xyz，www.luqijianggushi.com，account.wps.cn，u.kanghuayun.com，api1.dobenge.cn，api.mvmtv .com，mitaoapp.yeduapp.com，origin-prod-phoenix.jibjab.com，www.3ivf.com，pay.guoing.com，api.bjxkhc.com，viva.v21xy.com，biz.caiyunapp.com，ap * .intsig.net，mp.bybutter.com，api.vuevideo.net，api.picsart.c *，api.meiease.c *，ios.xiangjiaoapps.com，apple.xiangjiaoapps.com，*。xiangxiangapps.com， trade-acs.m.taobao。com，api.m.jd.com，ios.prod.ftl.netflix.com，api.gamer.com.tw


＃去微博应用内广告（由yichahucha）
^ https？：//（（sdk | wb）app.uve.weibo.com（/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua）url脚本-响应正文https://raw.githubusercontent.com /yichahucha/surge/master/wb_launch.js
^ https？：// m？api.weibo.c（n | om）/ 2 /（状态/（未读|扩展|正/得到/（朋友|视频）（/ | _）（混合）？时间轴）|故事/（video_stream | home_list）|（组| fangle）/时间线|配置文件/状态|评论/ build_comments |照片/推荐列表|服务/ picfeed | searchall |卡片列表|页面|！/ photos / pic_recommend_status |视频/ tiny_stream_video_list）url脚本-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

＃去微信公众号广告（由Choler）
^ https？：\ / \ / mp \ .weixin \ .qq \ .com \ / mp \ / getappmsgad url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/微信

＃知乎去广告（by onewayticket255）
https://api.zhihu.com/（ad |戏剧|边缘|商业|市场/弹出广告|搜索/（顶部|预设|标签）|。*功能注释广告）网址拒绝-200
https://api.zhihu.com/people/ url脚本-响应主体https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20people.js
https://api.zhihu.com/moments/推荐网址script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
https://api.zhihu.com/topstory/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
https://api.zhihu.com/v4/questions url脚本-响应-正文https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
https://link.zhihu.com/?target= url脚本请求标头https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20link.js

＃哔哩哔哩哩动画去广告（by onewayticket255）
https://app.bilibili.com/x/v2/(splash|search/(defaultword|square））网址拒绝-200
https://api.bilibili.com/x/v2/dm/ad url reject-200
https://app.bilibili.com/x/v2/space?access_key url脚本-响应-正文https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20space.js
https://app.bilibili.com/x/resource/show/tab?access_key url脚本-响应主体https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
https://app.bilibili.com/x/v2/feed/index?access_key url脚本-响应正文https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
https://app.bilibili.com/x/v2/account/mine?access_key url脚本-响应主体https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
https://app.bilibili.com/x/v2/view?access_key url脚本-响应-正文https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
https://api.bilibili.com/x/v2/reply/main?access_key url脚本响应主体https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom?access_key url脚本响应正文https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge ％20bilibili％20live.js

＃抖音去广告去水印（作者Choler）
^ https：// aweme-eagle（。*）\ .snssdk \ .com \ / aweme /.+/（feed | aweme / post | follow / feed）/网址脚本-响应正文https：//raw.githubusercontent .com / NobyDa / Script / master / Surge / JS / Aweme.js

＃酷我音乐SVIP（by yxiaocai）
^ https？：\ / \ / vip1 \ .kuwo \ .cn \ /（（vip \ / v2 \ / user \ / vip | vip \ / spi / mservice）url脚本-响应正文https：//raw.githubusercontent。 com / NobyDa / Script / master / Surge / JS / Kuwo.js
^ https？：\ / \ / musicpay \ .kuwo \ .cn \ / music \ .pay \？uid \ = \ d +网址302 http://musicpay.kuwo.cn/music.pay?uid=1

＃小小影视Vip（由Meeta赞助）
https：\ / \ /.* \。xiaoxiao。* \。com \ /（vod \ / reqplay \ / | ucp / index | getGlobalData）url脚本-响应正文https://raw.githubusercontent.com/NobyDa/脚本/主文件/ QuantumultX /文件/xxys.js

＃爱美剧Vip（huihui）（官网：app.meiju2018.com）
^ https？：\ / \ / api.bjxkhc.com \ / index \ .php \ / app \ / ios \ /（vod \ / show |（user | vod | topic | type）\ / index）网址脚本响应-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js
＃广告
^ https？：//api.bjxkhc.com/index.php/app/ios/ads/index网址拒绝字典
^ https？：//api.bjxkhc.com/index.php/app/ios/ver/index_ios$网址拒绝
^ https？：//api.bjxkhc.com/index.php/app/ios/pay/ok$网址拒绝字典

＃网易蜗牛读书VIP（由yxiaocai和JO2EY共同撰写）
^ https？：// p \ .du \ .163 \ .com / readtime / info.json网址拒绝
^ https？：\ / \ / p \ .du \ .163 \ .com \ / gain \ / readtime \ / info \ .json url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/ master / QuantumultX / File / wnyd.js

＃看漫画极速版vip（由HoGer提供）
^ https？：\ / \ / getuserinfo \ .321mh \ .com \ / app_api \ / v5 \ / getuserinfo \ / url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/文件/kmh.js

＃知音漫客VIP（by mieqq）
^ https：//getuserinfo-globalapi.zymk.cn/app_api/v5/（getuserinfo | coin_account | getuserinfo_ticket | getcomicinfo）/网址脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX /File/Zymh.js

＃哔哩哔哩哩番剧开启1080P +
^ https：\ / \ / ap（p | i）\。bilibili \ .com \ /（（（pgc \ / player \ / api \ / playurl）|（x \ / v2 \ / account \ / myinfo \？）| （x \ / v2 \ / account / mine \？））url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

＃VSCO滤镜VIP
^ https？：\ / \ / vsco \ .co \ / api \ / subscriptions \ /2.1 \ / user-subscriptions \ / url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script/master/ QuantumultX /文件/vsco.js

＃大片-视频编辑器VIP
^ https？：\ / \ / api \ .vnision \ .com \ / v1 \ /（用户\ / |横幅）url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX /File/dapian.js

＃91短视频
^ https？：\ / \ /.+ \。（my10api |（。* 91。*））\。（com | tips | app | xyz）（：\ d {2,5}）？\ / api.php $ url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/91.js

＃香蕉视频VIP
^ https？：\ / \ /.* \。（fuli | xiang（jiao | xiang））apps \ .com \ /（ucp \ / index | getGlobalData |。+ \ / reqplay \ /）url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

＃用药助手解锁专业版（由Primovist提供）
^ https？：\ / \ /（i | newdrugs）\。dxy \ .cn \ /（snsapi \ / username \ / | app \ / user \ /（pro \ / stat \？| init \？timestamp =））网址script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js

＃陆琪讲故事
^ https：\ / \ / www \ .luqijianggushi \ .com \ / api \ / v2 \ / user \ /获取url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/Surge/ JS / luqi.js

＃WPS（通过eHpo）
^ https：//account.wps.cn/api/users/网址script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

＃水印精灵vip（Alex0510）
^ https：\ / \ / api1 \ .dobenge \ .cn \ / api \ / user \ / getuserinfo url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/syjl .js

＃大千视界
^ https：\ / \ / api \ .mvmtv \ .com \ / index \ .php。*（c = user。* a = info | a = addr。* vid =。*）url脚本-响应正文https： //raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/dqsj.js

＃JibJab解锁pro
^ https：\ / \ / origin-prod-phoenix \ .jibjab \ .com \ / v1 \ /用户url脚本-响应正文https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/ jibjab.js

＃小影解锁Vip（通过@ hiepkimcdtk55）
^ https：\ / \ / viva \ .v21xy \ .com \ / api \ / rest \ / u \ / vip网址script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/ JS / vivavideo.js

＃彩云天气Vip
^ https：\ / \ / biz \ .caiyunapp \ .com \ / v2 \ / user \？app_name \ = weather url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/文件/ColorWeather.js

＃扫描全能王pro
^ https：\ / \ /（api | api-cs）\。intsig \ .net \ / purchase \ / cs \ / query_property \？网址script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

＃VUE专业版
^ https：\ / \ / api \ .vuevideo \ .net \ / api \ / v1 \ /（users \ /.+ \ / profile | subtitle \ / prepare）url脚本-响应正文https：//raw.githubusercontent .com / NobyDa / Script / master / Surge / JS / VUE.js

＃NiChi解锁素材
^ https？：\ / \ / mp \ .bybutter \ .com \ / mood \ /（官方模板|特权）url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script/master/Surge /JS/NiChi.js

＃PicsArt美易pro
^ https：\ / \ / api \。（picsart | meiease）\。c（n | om）\ / users \ / show \ / me \ .json url脚本-响应正文https://raw.githubusercontent.com /NobyDa/Script/master/Surge/JS/PicsArt.js

＃动画疯去广告
https：\ / \ / api \ .gamer \ .com \ .tw \ / mobile_app \ / anime \ / v3 \ / token \ .php网址script-request-header https://raw.githubusercontent.com/NobyDa/Script /master/Surge/JS/Bahamut.js
https：\ / \ / api \ .gamer \ .com \ .tw \ / mobile_app \ / anime \ / v3 \ / token \ .php url脚本响应正文https://raw.githubusercontent.com/NobyDa/Script /master/Surge/JS/Bahamut.js

＃京东千年
^ https？：// api \ .m \ .jd \ .com / client \ .action \？functionId =（wareBusiness | serverConfig | basicConfig）url脚本-响应正文https://raw.githubusercontent.com/yichahucha/浪涌/大师/jd_price.js

＃淘宝千年
^ http：//.+/amdc/mobileDispatch网址script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^ https？：// trade-acs \ .m \ .taobao \ .com / gw / mtop \ .taobao \ .detail \ .getdetail url脚本-响应-正文https://raw.githubusercontent.com/yichahucha/surge /master/tb_price.js

＃Netflix评分
^ https？：// ios \ .prod \ .ftl \ .netflix \ .com / iosui / user /.+ path =％5B％22videos％22％2C％\ d +％22％2C％22summary％22％5D网址脚本请求标头https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^ https？：// ios \ .prod \ .ftl \ .netflix \ .com / iosui / user /.+ path =％5B％22videos％22％2C％\ d +％22％2C％22summary％22％5D网址脚本响应正文https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
