import * as THREE from '../build/three.module.js';

class App{
    constructor(){
        const divContainer = document.querySelector("#webgl-container");
        this._divContatiner = divContainer;

        const renderer =  new.THREE.WebGLRenderer({antialias: true});//오브젝트들의 경계선이 계단 현상없이 구현된다
        renderer.setPixelRatio(window.devicePixelRatio);//픽셀의 종횡비 설정 1.5
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;//다른 메서드에서 참조할 수 있도록 필드화 밑줄_로 시작:앱클래스 내부의 프라이빗한 메서드

        const scene = new THREE.Scene();//scene객체 생성
        this._scene = scene;//필드화

        this._setupCamera();//카메라 메서드 호출
        this._setupLight();//라이트 메서드 호출
        this._setupModel();//3차원 메서드 호출

        window.onresize = this.resize.bind(this);//렌더러나 카메라는 창크기가 변할 때 마다 설정 바뀌어야 함. 
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }
    _setupCamera(){
        const width = this._divContatiner.clientWidth;
        const height = this._divContatiner.clientHeight;
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );
        camera.position.z =2;
        this._camera = camera;
    }
}
window.onload = function(){
    new App();
}