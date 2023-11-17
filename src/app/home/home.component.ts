import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement>;

  private rotationSpeedX = 0.0;
  private rotationSpeedY = 0.0;
  private size = 2;
  private cameraZ = 200;
  private fieldOfView = 1;
  private nearClippingPane = 20;
  private farClippingPane = 1000;

  private object!: THREE.Mesh;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private loader!: GLTFLoader;
  private center!: THREE.Vector3;
  private light!: THREE.RectAreaLight;


  constructor() {
    this.loader = new GLTFLoader();
    this.scene = new THREE.Scene();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  createScene() {
    this.loadGLTF();
    const background = new THREE.Color(0xffffff);
    this.scene.background = background;
  }

  centerScene() {
    this.scene.scale.set(this.size, this.size, this.size);
    const box3 = new THREE.Box3().setFromObject(this.object);
    const center = new THREE.Vector3();
    box3.getCenter(center);
    this.center = center;
    // center scene according to this.center
    this.scene.position.sub(this.center);

    // center camera according to this.center
    this.camera.position.copy(this.center);
    this.camera.position.z += 125;
    this.camera.lookAt(this.center);
    this.createLight();
  }

  createLight() {
    const light = new THREE.RectAreaLight(0xffffff, 2, 8, 8); // soft white light
    // Center light according to this.center
    light.position.copy(this.center);
    light.position.z += 4.5;
    light.position.y -= 1.5;
    light.lookAt(this.center);
    this.light = light;
    this.scene.add(light);
  }

  loadGLTF() {
    this.loader.load(
      // resource URL
      'assets/models/giacca/giacca.gltf',
      // called when the resource is loaded
      (gltf) => {

        this.scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        this.createMeshFromGLTF(gltf);
        this.centerScene();

      },
      // called while loading is progressing
      (xhr) => {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

      },
      // called when loading has errors
      (error) => {

        console.log('An error happened');
        console.log(error);

      }
    );
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );
    this.camera.position.z = this.cameraZ;
  }

  private get aspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animate() {
    this.object.rotation.x += this.rotationSpeedX;
    this.object.rotation.y += this.rotationSpeedY;
  }

  mouseover() {
    this.rotationSpeedY += 0.02;
    this.camera.position.z -= 20; 
  }

  mouseout() {
    this.rotationSpeedY -= 0.02;
    this.camera.position.z += 20; 
  }

  private createMeshFromGLTF(gltf: any) {
    const mesh = gltf.scene.children[0];
    this.object = mesh;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  private setObjectPosition() {
    this.object.scale.set(10, 10, 10);
    this.object.position.set(0,-17.7,0);
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    const component: HomeComponent = this;

    (function render() {
      requestAnimationFrame(render);
      component.animate();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createCamera();
    this.createScene();
    this.startRenderingLoop();
  }

}
