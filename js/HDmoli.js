// 网址发布页 https://molicp.com
muban.首图.二级.title = '.text-fff--font&&Text;.data--span:eq(0)&&Text';
muban.首图.二级.desc = '#rating&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text';
muban.首图.二级.content = '.padding-0&&p&&Text';
var rule = {
    title:'HDmoli',
    模板:'首图',
    host:'https://molicp.com',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".content-top&&a&&href");print(src);HOST=src',
    // url:'/mlist/fyclass-fypage.html',
    url:'/search.php?page=fypage&searchtype=5&itd=fyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}&jq={{fl.class}}&area={{fl.area}}&year={{fl.year}}&letter=&yuyan=&state={{fl.state}}&order={{fl.by}}',
    ////search.php?searchtype=5&order=douban&tid=6&area=美国&year=2024&letter=&yuyan=&money=&ver=&jq=剧情&state=w
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作","v":"5"},{"n":"爱情","v":"6"},{"n":"科幻","v":"7"},{"n":"恐怖","v":"8"},{"n":"战争","v":"9"},{"n":"喜剧","v":"10"},{"n":"纪录片","v":"11"},{"n":"剧情","v":"12"},{"n":"犯罪","v":"30"},{"n":"动画","v":"32"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"战争","v":"战争"},{"n":"恐怖","v":"恐怖"},{"n":"剧情","v":"剧情"},{"n":"爱情","v":"爱情"},{"n":"家庭","v":"家庭"},{"n":"励志","v":"励志"},{"n":"悬疑","v":"悬疑"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"历史","v":"历史"},{"n":"惊悚","v":"惊悚"},{"n":"音乐","v":"音乐"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"运动","v":"运动"},{"n":"喜剧","v":"喜剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"中国","v":"中国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"more","v":"more"}]},{"key":"state","name":"状态","value":[{"n":"全部","v":""},{"n":"完结","v":"w"},{"n":"连载中","v":"l"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"评分","v":"douban"}]}],
        "2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"美剧","v":"15"},{"n":"韩剧","v":"16"},{"n":"日剧","v":"13"},{"n":"英剧","v":"34"},{"n":"中国","v":"14"},{"n":"泰剧","v":"29"},{"n":"综艺","v":"39"},{"n":"其他","v":"38"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"战争","v":"战争"},{"n":"恐怖","v":"恐怖"},{"n":"剧情","v":"剧情"},{"n":"爱情","v":"爱情"},{"n":"家庭","v":"家庭"},{"n":"励志","v":"励志"},{"n":"悬疑","v":"悬疑"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"历史","v":"历史"},{"n":"惊悚","v":"惊悚"},{"n":"音乐","v":"音乐"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"运动","v":"运动"},{"n":"喜剧","v":"喜剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"中国","v":"中国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"more","v":"more"}]},{"key":"state","name":"状态","value":[{"n":"全部","v":""},{"n":"完结","v":"w"},{"n":"连载中","v":"l"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"评分","v":"douban"}]}],
        "41":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"41"},{"n":"日本","v":"42"},{"n":"其他","v":"43"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"战争","v":"战争"},{"n":"恐怖","v":"恐怖"},{"n":"剧情","v":"剧情"},{"n":"爱情","v":"爱情"},{"n":"家庭","v":"家庭"},{"n":"励志","v":"励志"},{"n":"悬疑","v":"悬疑"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"历史","v":"历史"},{"n":"惊悚","v":"惊悚"},{"n":"音乐","v":"音乐"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"运动","v":"运动"},{"n":"喜剧","v":"喜剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"中国","v":"中国"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"more","v":"more"}]},{"key":"state","name":"状态","value":[{"n":"全部","v":""},{"n":"完结","v":"w"},{"n":"连载中","v":"l"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"评分","v":"douban"}]}]
    },
    filter_def:{
        1:{cateId:'1',by:'time'},
        2:{cateId:'2',by:'time'},
        41:{cateId:'41',by:'time'}
    },
    searchUrl:'/search.php?page=fypage&searchword=**&searchtype=',
    class_parse: '.myui-header__menu li;a&&Text;a&&href;.*/index(\\d+).html',
}