import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x1d90c6 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

camera.position.z = 7;

function animate(time) {
    renderer.render(scene, camera);
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;
}

renderer.setAnimationLoop(animate);
