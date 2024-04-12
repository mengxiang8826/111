var rule = {
	title:'BT世界[磁]',
	host:'https://www.btsj6.com/',
	// host:'https://www.66s6.net',
	// url: '/fyclass/index_fypage.html[/fyclass/index.html]',
	url: '/category/fyclass/fypage/',
	//filter_url:'{{fl.class}}',
	filter:{
		},
	searchUrl: '/?s=**;GET',
	//https://www.btsj6.com
	searchable:2,
	quickSearch:0,
	filterable:1,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
    class_name: "动作片&科幻片&犯罪片&战争片&爰情片&悬疑片&喜剧片&恐怖片&灾难片&奇幻片&惊悚片&动画片&剧情片&纪录片&內地剧&欧美剧&韩剧&日剧",
  	class_url: "dongzuo&kehuan&fanzui&zhanzeng&aiqing&xuanyi&xiju&kongbu&zainan&qihuan&jingsong&donghua&juqing&jilu&neidi&oumei&hanju&riju",
	//class_parse:''#nav&&li;a&&Text;a&&href;.*/(.*?).html',
	cate_exclude:'',
	play_parse:true,
	limit:6,
	推荐: `js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = [];
let html = request(input);
let list = pdfa(html, 'div#slider-wrap div.slider ul li');
list.forEach(it => {
	d.push({
		title: pdfh(it, '.cap&&Text'),
		desc: pdfh(it, 'div.entry-rating&&Text') + ' / ' + pdfh(it, 'div.entry-status&&Text'),
		pic_url: pd(it, 'a img&&src', HOST),
		url: pd(it, 'a&&href',HOST)
	});
});
setResult(d);
	`,
	一级:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = [];
let html = request(input);
let list = pdfa(html, 'div.mainleft ul#post_container li');
list.forEach(it => {
	d.push({
		title: pdfh(it, 'div.thumbnail img&&alt'),
		desc: pdfh(it, 'div.info&&span.info_date&&Text') + ' / ' + pdfh(it, 'div.info&&span.info_category&&Text'),
		pic_url: pd(it, 'div.thumbnail img&&src', HOST),
		url: pd(it, 'div.thumbnail&&a&&href',HOST)
	});
})
setResult(d);
`,
		"title": "#content&&h1&&Text;.info_category&&Text",
		"img": "#post_content&&img&&src",
		"desc": ";;;#post_content&&p:eq(0)&&Text;#post_content&&p:eq(2)&&Text",
		"content": "#post_content&&p:eq(1)&&Text",
		"tabs": `js:
			TABS = ["道长磁力"];
			let tabs = pdfa(html, '#content&&h3:not(:contains(网盘))');
			tabs.forEach((it) => {
				TABS.push(pdfh(it, "body&&Text").replace('播放地址','道长在线').replace('（无插件 极速播放）','一').replace('（无需安装插件）','二'))
			});
		`,
		"lists": `js:
			log(TABS);
			pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
			LISTS = [];
			let i = 1;
			TABS.forEach(function(tab) {
				if (/道长磁力/.test(tab)) {
					var d = pdfa(html, '.context&&td');
					d = d.map(function(it) {
						var title = pdfh(it, 'a&&Text');
						var burl = pd(it, 'a&&href');
						return title + '$' + burl
					});
					LISTS.push(d)
				} else if (/道长在线/.test(tab) && i <= TABS.length-1) {
					var d = pdfa(html, '.context&&.widget:eq(list_idx)&&a'.replace("list_idx", i));
					d = d.map(function(it) {
						var title = pdfh(it, 'a&&Text');
						var burl = pd(it, 'a&&href');
						return title + '$' + burl
					});
					LISTS.push(d)
					i = i + 1;
				}
			});
		`,
	},
	搜索: '*',
}
