muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.tab-item';
var rule={
    title:'往往影视',
    模板:'mxpro',
    host:'https://www.wwys.pro/',
    homeUrl:'/label/new.html',
    // url:'/oftensshow/fyclass--------fypage---.html',
    url:'/show/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by or "time"}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
   //https://www.wwys.pro/show/1--hits-%E5%96%9C%E5%89%A7-%E5%9B%BD%E8%AF%AD-------2024.html
    filter:{
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"dongzuopian"},{"n":"喜剧片","v":"xijupian"},{"n":"爱情片","v":"aiqingpian"},{"n":"恐怖片","v":"kongbupian"},{"n":"悬疑片","v":"xuanyipian"},{"n":"科幻片","v":"kehuanpian"},{"n":"惊悚片","v":"jingsongpian"},{"n":"犯罪片","v":"fanzuipian"},{"n":"剧情片","v":"juqingpian"},{"n":"冒险片","v":"maoxianpian"},{"n":"奇幻片","v":"qihuanpian"},{"n":"武侠片","v":"wuxiapian"},{"n":"战争片","v":"zhanzhengpian"},{"n":"动画片","v":"donghuapian"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "dianshiju":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"dianshiju"},{"n":"国产剧","v":"guochanju"},{"n":"日韩剧","v":"rihanju"},{"n":"港台剧","v":"gangtaiju"},{"n":"欧美剧","v":"oumeiju"},{"n":"泰国剧","v":"taiguoju"},{"n":"其他剧","v":"qitaju"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "dongman":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"dongman"},{"n":"国漫","v":"guoman"},{"n":"日漫","v":"riman"},{"n":"韩漫","v":"hanman"},{"n":"美漫","v":"meiman"},{"n":"其他漫","v":"qitaman"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "zongyi":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"zongyi"},{"n":"大陆综艺","v":"daluzongyi"},{"n":"港台综艺","v":"gangtaizongyi"},{"n":"日韩综艺","v":"rihanzongyi"},{"n":"欧美综艺","v":"oumeizongyi"},{"n":"其他综艺","v":"qitazongyi"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "jilupian":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "tiyu":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"tiyu"},{"n":"足球","v":"zuqiu"},{"n":"篮球","v":"lanqiu"},{"n":"台球","v":"taiqiu"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        dianshiju:{cateId:'dianshiju'},
        dongman:{cateId:'dongman'},
        zongyi:{cateId:'zongyi'},
        jilupian:{cateId:'jilupian'},
        tiyu:{cateId:'tiyu'}
    },
    headers: {
        'User-Agent': 'PC_UA',
    },
    class_parse: '.navbar-items&&li;a&&title;a&&href;a&&href;.*/(.*?).html',
    sniffer:1,
    // 辅助嗅探规则
    isVideo:"http((?!http).){26,}\\.(m3u8|mp4|flv|avi|mkv|wmv|mpg|mpeg|mov|ts|3gp|rm|rmvb|asf|m4a|mp3|wma)",

    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,

    // searchUrl:'/oftenssearch/**----------fypage---.html',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/oftensdetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}
