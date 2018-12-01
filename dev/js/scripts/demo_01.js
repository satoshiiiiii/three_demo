window.addEventListener('load',init_1);

function init_1(){
	//レンダラー作成
	const renderer = new THREE.WebGLRenderer({
		canvas:document.querySelector('#myCanvas1')
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