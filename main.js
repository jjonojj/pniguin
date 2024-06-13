import * as THREE from 'three';

const scl = new THREE.TextureLoader();
scl.setPath( './' );


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
scene.background = scl.load("./cube2.png");

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
renderer.domElement.style = "margin: -40px"
document.body.appendChild( renderer.domElement );

const loader = new THREE.TextureLoader();
loader.setPath( './' );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: loader.load("./cube2.png") } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let val = 0.03;

function animate() {

	cube.rotation.x += val;
	cube.rotation.y += val;

	renderer.render( scene, camera );

}