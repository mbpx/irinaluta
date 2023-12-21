import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

@Component({
  selector: 'app-display3d-v1',
  templateUrl: './display3d-v1.component.html',
  styleUrls: ['./display3d-v1.component.sass']
})
export class Display3Dv1 implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef<HTMLCanvasElement>;

  @Input('resource')
  resourceName: string = '';
  private resourceUrl: string = '';

  private rotationSpeedX = 0.0;
  private rotationSpeedY = 0.0;
  private size = 2;
  
  @Input('zoom')
  cameraZ = 125;

  @Input('y')
  cameraY = 0;
  private fieldOfView = 1;
  private nearClippingPane = 20;
  private farClippingPane = 1000;

  @Input('rotation')
  initialRotation = 0;
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

  loadScene() {
    this.resourceUrl = 'assets/models/' + this.resourceName + '/' + this.resourceName + '.gltf';
    this.loadGLTF();
    // const background = null;
    // this.scene.background = background;
  }

  createScene() {
    this.scene.scale.set(this.size, this.size, this.size);
    const box3 = new THREE.Box3().setFromObject(this.object);
    const center = new THREE.Vector3();
    box3.getCenter(center);
    this.center = center;
    this.scene.position.sub(this.center);   // center scene according to this.center
    this.object.rotation.y = this.initialRotation;

    this.createCamera();
    this.createLight();
  }

  createLight() {
    this.light = new THREE.RectAreaLight(0xffffff, 2.5, 8, 8); // soft white light
    // Center light according to this.center
    this.light.position.copy(this.center);
    this.light.position.z += 4.5;
    this.light.position.y -= 1.5;
    this.light.lookAt(this.center);
    this.light = this.light;
    this.scene.add(this.light);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    );

    this.camera.position.copy(this.center);   // center camera according to this.center
    this.camera.position.z += this.cameraZ;
    this.camera.lookAt(this.center);

    this.camera.position.y += this.cameraY;
  }

  loadGLTF() {
    this.loader.load(
      // resource URL
      this.resourceUrl,
      // called when the resource is loaded
      (gltf) => {

        this.scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        this.createMeshFromGLTF(gltf);
        this.createScene();
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

  private createMeshFromGLTF(gltf: any) {
    const mesh = gltf.scene.children[0];
    this.object = mesh;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  private get aspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animate() {
    this.object.rotation.x += this.rotationSpeedX;
    this.object.rotation.y += this.rotationSpeedY;
  }

  mouseover() {
    this.rotationSpeedY -= 0.02;
    this.camera.position.z -= this.cameraZ / 5; 
  }

  mouseout() {
    this.rotationSpeedY += 0.02;
    this.camera.position.z += this.cameraZ / 5; 
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
    this.renderer.setClearColor( 0x000000, 0 );

    const component: Display3Dv1 = this;

    (function render() {
      requestAnimationFrame(render);
      component.animate();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadScene();
    this.startRenderingLoop();
  }
}
