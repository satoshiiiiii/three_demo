import Responsive from './Responsive';
import SmoothScroll from './SmoothScroll';
// import Accordion from './Accordion';
// import Tab from './Tab';
import SpNavi from './SpNavi';
import ToTop from './ToTop';
// import DropDownMenu from './DropDownMenu';
// import BlockLink from './BlockLink';
// import Gmap from './Gmap';
import bowser from 'bowser';
// import matchheight from 'jquery-match-height';
// import link_icon from './link_icon';

if(bowser.msie === true) {
	let version = 'ie_'+Math.floor(bowser.version);
	$('body').addClass('ie '+version);
}else if(bowser.msedge === true){
	$('body').addClass('edge');
}else if(bowser.firefox === true){
	$('body').addClass('ff');
}else if(bowser.tablet === true){
	$('body').addClass('tablet');
}
if(bowser.mobile === true){
	$('body').addClass('device--mobile');
	if(bowser.android === true) {
		$('body').addClass('device--mobile--android');
	}
}

let os, ua = navigator.userAgent;
if (ua.match(/Win(dows )?NT 10\.0/)) {
	os = "win10";
}
else if (ua.match(/Win(dows )?NT 6\.3/)) {
	os = "win8_1";
}
else if (ua.match(/Win(dows )?NT 6\.2/)) {
	os = "win8";
}
else if (ua.match(/Win(dows )?NT 6\.1/)) {
	os = "win7";
}else{
	os = '';
}

$('body').addClass(os);
/* ===============================================
Check responsive state
=============================================== */
// const r = new Responsive();

// $(window).on('resize',function(){
// check is responsive;
// 	console.log(r.state()());
// });
// check is mobile;
// alert(r.isPhone());
/* ===============================================
SP Navi
=============================================== */
//通常盤
// let param = {
// 	target:'#spnavi',
// 	trigger:'.btn_sp_navi',
// 	filter:'resposive_flg',
// 	speed:200
// };
// const spnavi = new SpNavi(param);
// spnavi.exec();

//execに可変引数で処理を渡してナビの開閉時に処理させるサンプル
//例として、SPナビでアコーディオンを開くたびにiScrollをリセットする
// let spnav_accordion_1 = (scroller)=>{
// 	$('#scroller .inner > ul > li > span').off();
// 	$('#scroller .inner > ul > li > span').on('click',function(){
// 		let $parent = $(this).parent('li');
// 		let $child = $(this).next('.gnavi-child');
// 		let status = $child.css('display');

// 		if(status == 'block'){
// 			$child.slideUp(300,function(){
// 				scroller.refresh();
// 			});
// 			$parent.removeClass('active');
// 		}else{
// 			$child.slideDown(300,function(){
// 				scroller.refresh();
// 			});
// 			$parent.addClass('active');
// 		}

// 		return false;
// 	});
// }
// spnavi.exec(spnav_accordion_1);

/* ===============================================
Smooth Scroll
=============================================== */
const sms = new SmoothScroll();
sms.exec();
/* ===============================================
To Top
show/hide toggle
=============================================== */
const totop = new ToTop('#totop','#global_footer',100,400);
totop.exec();


/* ===============================================
#
=============================================== */
function init(){

	console.log("opk");
	//サイズ指定
	const width = 960;
	const height = 540;

	//レンダラー作成
	const renderer = new THREE.WebGLRenderer({
		canvas:document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width,height);


	//シーンを作成
	const scene = new THREE.Scene();

	//カメラを作成
	const camera = new THREE.PerspectiveCamera(55,width / height);
	camera.position.set(0,0,+1000);

	//箱を作成
	const geometry = new THREE.BoxGeometry(400,400,400);
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry,material);
	scene.add(box);

	tick();

	//毎フレーム時に実行するループイベント
	function tick(){
		requestAnimationFrame(tick);

		box.rotation.y += 0.01;
		renderer.render(scene,camera);	//レンダリング
	}
}


window.addEventListener('load',init);
