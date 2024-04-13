var rule = {
	title:'4KHDR[磁]',
	host:'https://www.4khdr.cn',
        homeUrl: "/forum.php?mod=forumdisplay&fid=2&page=1",
	url: '/forum.php?mod=forumdisplay&fid=2&filter=typeid&typeid=fyclass&page=fypage',
	//forum.php?mod=forumdisplay&fid=2&&filter=typeid&typeid={cateId}&page={catePg}
	//filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/search.php?mod=forum&searchid=2061&orderby=lastpost&ascdesc=desc&searchsubmit=yes&kw=**;get',
	searchable:2,
	quickSearch:1,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
         	'Cookie':'hvLw_2132_saltkey=OL9kR3tI; hvLw_2132_lastvisit=1712652087; Hm_lvt_786cb39ec50724f53df428d52b8b7497=1712655692; _clck=1tysrbw%7C2%7Cfkw%7C0%7C1560; hvLw_2132_seccodecSASgA=2239.ca8afeb49ceab9d231; hvLw_2132_seccodecSAxkj=2254.1d1a71c422693b3b5e; hvLw_2132_sendmail=1; hvLw_2132_seccodecS=2414.827b31a4d25aa5c66f; hvLw_2132_ulastactivity=1712983558%7C0; hvLw_2132_auth=2db6mijckp5kcdjOtXcv5QrY5F9162mXONBkswwtM2TpUhhC7T%2Bwsc2qlctByW3gDUdRBJsV8GE2wkfmhk63HiwCbME; hvLw_2132_sid=0; hvLw_2132_noticeTitle=1; hvLw_2132_smile=1D1; hvLw_2132_home_diymode=1; hvLw_2132_newemail=252902%09721155657%40qq.com%091712983659; hvLw_2132_seccodecS0=2448.8ca77916a61a08af1c; hvLw_2132_checkpm=1; hvLw_2132_st_p=252902%7C1712983678%7C31586af47c493cfa4c71ef4d3d2decb5; hvLw_2132_viewid=tid_11058; _clsk=11buuow%7C1712983691928%7C26%7C1%7Cl.clarity.ms%2Fcollect; hvLw_2132_lastact=1712983700%09forum.php%09forumdisplay; hvLw_2132_st_t=252902%7C1712983700%7Ca5bbf78f9f2f98ccdfefaa3c1debb9ba; hvLw_2132_forum_lastvisit=D_2_1712983700; Hm_lpvt_786cb39ec50724f53df428d52b8b7497=1712983704',
	},
	timeout:5000,
	class_name: "4K电影&4K美剧&4K华语&4K动画&4K纪录片&4K日韩印&蓝光电影&蓝光电视剧&蓝光动画&其他",
	class_url:"3&8&15&6&11&4&29&31&32&51",
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&fnont&&Text;a&&href',
	一级:'ul#waterfall li;a&&title;img&&src;div.auth.cl&&Text;a&&href',
	二级:{
		title:"#thead_subject&&Text",
		img:"img.zoom&&src",
		desc:'td[id^="postmessage_"] font&&Text',
		content:'td[id^="postmessage_"] hr&&Text',
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'div.pcb table.t_table a');
let tabsa = [];
let tabsq = [];
let tabsm = false;
let tabse = false;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("https://www.aliyundrive.com/s/") || burl.startsWith("https://www.alipan.com/s/")){
		tabsa.push("阿里雲盤");
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		tabsq.push("夸克網盤");
	}else if (burl.startsWith("magnet")){
		tabsm = true;
	}else if (burl.startsWith("ed2k")){
		tabse = true;
	}
});
if (tabsm === true){
	TABS.push("磁力");
}
if (tabse === true){
	TABS.push("電驢");
}
if (false && tabsa.length + tabsq.length > 1){
	TABS.push("選擇右側綫路");
}
let tmpIndex;
tmpIndex=1;
tabsa.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
tmpIndex=1;
tabsq.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
log('4khdr TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'div.pcb table.t_table a');
let lista = [];
let listq = [];
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('4khdr title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('4khdr burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
	if (burl.startsWith("https://www.aliyundrive.com/s/") || burl.startsWith("https://www.alipan.com/s/")){
		if (true){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=ali&type=push&url=" + encodeURIComponent(burl);
		}
		}else{
			burl = 'push://' + burl;
		}
		loopresult = title + '$' + burl;
		lista.push(loopresult);
	}else if (burl.startsWith("https://pan.quark.cn/s/")){
		if (true){
		if (TABS.length==1){
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&confirm=0&url=" + encodeURIComponent(burl);
		}else{
			burl = "http://127.0.0.1:9978/proxy?do=quark&type=push&url=" + encodeURIComponent(burl);
		}
		}else{
			burl = 'push://' + burl;
		}
		loopresult = title + '$' + burl;
		listq.push(loopresult);
	}else if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("ed2k")){
		liste.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm);
}
if (liste.length>0){
	LISTS.push(liste);
}
if (false && lista.length + listq.length > 1){
	LISTS.push(["選擇右側綫路，或3秒後自動跳過$http://127.0.0.1:10079/delay/"]);
}
lista.forEach(function(it){
	LISTS.push([it]);
});
listq.forEach(function(it){
	LISTS.push([it]);
});
`,

	},
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
if (rule_fetch_params.headers.Cookie.startsWith("http")){
	rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);
	let cookie = rule_fetch_params.headers.Cookie;
	setItem(RULE_CK, cookie);
};
log('4khdr search cookie>>>>>>>>>>>>>>>' + rule_fetch_params.headers.Cookie);
let new_host= HOST + '/search.php';
let new_html=request(new_host);
let formhash = pdfh(new_html, 'input[name="formhash"]&&value');
log("4khdr formhash>>>>>>>>>>>>>>>" + formhash);
let params = 'formhash=' + formhash + '&searchsubmit=yes&srchtxt=' + encodeURIComponent(KEY);
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
let postData = {
    body: params
};
Object.assign(_fetch_params, postData);
log("4khdr search postData>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = post( HOST + '/search.php?mod=forum', _fetch_params)
//log("4khdr search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
let dlist = pdfa(search_html, 'div#threadlist ul li');
dlist.forEach(function(it){
	let title = pdfh(it, 'h3&&Text');
	if (searchObj.quick === true){
		if (title.includes(KEY)){
			title = KEY;
		}
	}
	let img = "";
	let content = pdfh(it, 'p:eq(2)&&Text');
	let desc = pdfh(it, 'p:eq(3)&&Text');
	let url = pd(it, 'a&&href', HOST);
	d.push({
		title:title,
		img:img,
		content:content,
		desc:desc,
		url:url
		})
});
setResult(d);
	`,
}
