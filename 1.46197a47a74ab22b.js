"use strict";(self.webpackChunkirinaluta=self.webpackChunkirinaluta||[]).push([[1],{8001:(M,p,s)=>{s.r(p),s.d(p,{V1Module:()=>w});var d=s(6814),t=s(6146),c=s(9844),h=s(1896);const u=["canvas"],m=(o,P)=>({"height.px":o,"width.px":P});let f=(()=>{class o{constructor(){this.resourceName="",this.resourceUrl="",this.rotationSpeedX=0,this.rotationSpeedY=0,this.size=2,this.cameraZ=125,this.cameraY=0,this.fieldOfView=1,this.nearClippingPane=20,this.farClippingPane=1e3,this.height=300,this.width=300,this.initialRotation=0,this.loader=new h.E,this.scene=new c.xsS}get canvas(){return this.canvasRef.nativeElement}loadScene(){this.resourceUrl="assets/models/"+this.resourceName+"/"+this.resourceName+".gltf",this.loadGLTF()}createScene(){this.scene.scale.set(this.size,this.size,this.size);const e=(new c.ZzF).setFromObject(this.object),n=new c.Pa4;e.getCenter(n),this.center=n,this.scene.position.sub(this.center),this.object.rotation.y=this.initialRotation,this.createCamera(),this.createLight()}createLight(){this.light=new c.T_f(16777215,2.5,8,8),this.light.position.copy(this.center),this.light.position.z+=4.5,this.light.position.y-=1.5,this.light.lookAt(this.center),this.light=this.light,this.scene.add(this.light)}createCamera(){this.camera=new c.cPb(this.fieldOfView,this.aspectRatio,this.nearClippingPane,this.farClippingPane),this.camera.position.copy(this.center),this.camera.position.z+=this.cameraZ,this.camera.lookAt(this.center),this.camera.position.y+=this.cameraY}loadGLTF(){this.loader.load(this.resourceUrl,e=>{this.scene.add(e.scene),this.createMeshFromGLTF(e),this.createScene()},e=>{console.log(e.loaded/e.total*100+"% loaded")},e=>{console.log("An error happened"),console.log(e)})}createMeshFromGLTF(e){this.object=e.scene.children[0],this.renderer.outputColorSpace=c.KI_}get aspectRatio(){return this.canvas.clientWidth/this.canvas.clientHeight}animate(){this.object.rotation.x+=this.rotationSpeedX,this.object.rotation.y+=this.rotationSpeedY}mouseover(){this.rotationSpeedY-=.02,this.camera.position.z-=this.cameraZ/5}mouseout(){this.rotationSpeedY+=.02,this.camera.position.z+=this.cameraZ/5}startRenderingLoop(){this.renderer=new c.CP7({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.outputColorSpace=c.KI_,this.renderer.setClearColor(0,0);const e=this;!function n(){requestAnimationFrame(n),e.animate(),e.renderer.render(e.scene,e.camera)}()}ngOnInit(){}ngAfterViewInit(){this.loadScene(),this.startRenderingLoop()}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-display3d-v1"]],viewQuery:function(n,i){if(1&n&&t.Gf(u,5),2&n){let r;t.iGM(r=t.CRH())&&(i.canvasRef=r.first)}},inputs:{resourceName:["resource","resourceName"],cameraZ:["zoom","cameraZ"],cameraY:["y","cameraY"],height:"height",width:"width",initialRotation:["rotation","initialRotation"]},decls:3,vars:4,consts:[[1,"clock"],["id","canvas",3,"ngStyle","mouseenter","mouseleave"],["canvas",""]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"canvas",1,2),t.NdJ("mouseenter",function(){return i.mouseover()})("mouseleave",function(){return i.mouseout()}),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("ngStyle",t.WLB(1,m,i.height,i.width)))},dependencies:[d.PC],styles:["#canvas[_ngcontent-%COMP%]{background-color:#0000}@keyframes _ngcontent-%COMP%_glow-object{0%{filter:drop-shadow(0px 0px 12px #f6eafd)}25%{filter:drop-shadow(0px 0px 24px #f6eafd)}75%{filter:drop-shadow(0px 0px 6px #f6eafd)}to{filter:drop-shadow(0px 0px 12px #f6eafd)}}body[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;margin:0}.clock[_ngcontent-%COMP%]{width:300px;height:300px}"]})}return o})();var a=s(6223),l=s(3911);let v=(()=>{class o{constructor(e){this.fb=e}ngOnInit(){this.contactForm=this.fb.group({name:["",a.kI.required],email:["",[a.kI.required,a.kI.email]],message:["",a.kI.required]})}submitForm(){this.contactForm.valid?console.log("Form submitted:",this.contactForm.value):console.log("Form has errors. Please check.")}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(a.qu))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-form"]],decls:15,vars:13,consts:[["id","contacto",1,"contact-form-container"],[1,"contact-form",3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","id","name","formControlName","name",1,"form-input",3,"placeholder"],["type","email","id","email","formControlName","email",1,"form-input",3,"placeholder"],["id","message","formControlName","message",1,"form-input",3,"placeholder"],[1,"flex","justify-center"],["type","submit",1,"contact-button"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return i.submitForm()}),t.TgZ(2,"div",2),t._UZ(3,"input",3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"input",4),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",2),t._UZ(9,"textarea",5),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",6)(12,"button",7),t._uU(13),t.ALo(14,"translate"),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",i.contactForm),t.xp6(2),t.s9C("placeholder",t.lcZ(4,5,"contact.name")),t.xp6(3),t.s9C("placeholder",t.lcZ(7,7,"contact.email")),t.xp6(3),t.s9C("placeholder",t.lcZ(10,9,"contact.message")),t.xp6(4),t.Oqu(t.lcZ(14,11,"contact.send")))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,l.X$],styles:['.contact-form-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.contact-form[_ngcontent-%COMP%]{font-family:"DM Serif Display",sans-serif;font-size:20px;color:#010b13;width:75%}.form-input[_ngcontent-%COMP%]{margin-bottom:25px;width:100%;padding:10px;font-size:18px;border:2px solid #010B13;border-radius:0;outline:none;color:#010b13;background:transparent!important}.contact-button[_ngcontent-%COMP%]{border:2px solid #010B13;padding:2px 20px 3px;font-size:22px;color:#010b13;display:inline-block;position:relative;transition:.3s ease-in-out all;cursor:pointer;z-index:2}.contact-button[_ngcontent-%COMP%]:before{content:"";background-color:#010b13;position:absolute;width:0%;top:0;left:0;height:100%;transition:.3s ease-out all;z-index:-1}.contact-button[_ngcontent-%COMP%]:hover:before{width:100%}.contact-button[_ngcontent-%COMP%]:hover{color:#f1f0ef;font-weight:900}']})}return o})(),x=(()=>{class o{constructor(e){this.translate=e}changeLanguage(e){this.translate.use(e)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(l.sK))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-language-flags"]],decls:11,vars:0,consts:[[1,"flags","flex","space-x-2"],[1,"lang-icon","lang-icon-en",3,"click"],[1,"lang-icon","lang-icon-en","lang-icon-shadow"],[1,"lang-icon","lang-icon-it",3,"click"],[1,"lang-icon","lang-icon-it","lang-icon-shadow"],[1,"lang-icon","lang-icon-mo",3,"click"],[1,"lang-icon","lang-icon-mo","lang-icon-shadow"],[1,"lang-icon","lang-icon-es-es",3,"click"],[1,"lang-icon","lang-icon-es","lang-icon-shadow"],[1,"lang-icon","lang-icon-gl",3,"click"],[1,"lang-icon","lang-icon-gl","lang-icon-shadow"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.changeLanguage("en")}),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",3),t.NdJ("click",function(){return i.changeLanguage("it")}),t._UZ(4,"div",4),t.qZA(),t.TgZ(5,"div",5),t.NdJ("click",function(){return i.changeLanguage("ro")}),t._UZ(6,"div",6),t.qZA(),t.TgZ(7,"div",7),t.NdJ("click",function(){return i.changeLanguage("es")}),t._UZ(8,"div",8),t.qZA(),t.TgZ(9,"div",9),t.NdJ("click",function(){return i.changeLanguage("gl")}),t._UZ(10,"div",10),t.qZA()())},styles:[".flags[_ngcontent-%COMP%]{display:flex}.flag[_ngcontent-%COMP%]{width:30px;height:20px;cursor:pointer;margin:0 5px}.lang-icon[_ngcontent-%COMP%]{border-radius:2px;cursor:pointer;position:relative;border-right:1px solid rgba(0,0,0,.6666666667);border-bottom:1px solid rgba(0,0,0,.6666666667)}.lang-icon[_ngcontent-%COMP%]:hover{top:1px}.lang-icon[_ngcontent-%COMP%]:hover   .lang-icon-shadow[_ngcontent-%COMP%]{top:2px;left:1px}.lang-icon[_ngcontent-%COMP%]   .lang-icon-shadow[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:3px;left:1px;border-radius:2px;opacity:.5;background-color:#000;z-index:-1}"]})}return o})(),Z=(()=>{class o{scroll(e){let n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer"]],decls:18,vars:3,consts:[[1,"flex","footer-end","flex-nowrap"],[1,"flex-none","leading-2"],[2,"font-size","12px"],["href","https://www.linkedin.com/in/miguel-bautista-perez/","target","_blank"],[1,"flex-auto","pl-20","flex","justify-center"],[1,"flex-auto","flex","justify-end","mr-10"],[1,"flex","footer","flex-nowrap"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"p",2),t._uU(6,"Website by "),t.TgZ(7,"a",3),t._uU(8,"Miguel Bautista"),t.qZA()()(),t._UZ(9,"div",4)(10,"div",5)(11,"div"),t.qZA(),t.TgZ(12,"div",6),t._UZ(13,"div",1)(14,"div",4)(15,"div",5),t.TgZ(16,"div"),t._UZ(17,"app-language-flags"),t.qZA()()),2&n&&(t.xp6(3),t.hij("\xa9 2023 Irina Luta. ",t.lcZ(4,1,"copyright"),""))},dependencies:[x,l.X$],styles:['.footer[_ngcontent-%COMP%]{z-index:1000;height:50px;align-items:center;padding:35px;top:0;right:0;position:absolute;color:#fffdfa;font-family:"DM Serif Display",sans-serif;font-size:20px}.footer-end[_ngcontent-%COMP%]{z-index:1001;height:50px;align-items:center;padding:35px;bottom:-65px;left:0;color:#010b13;font-size:20px;position:relative;font-family:lemon;font-weight:300}.contact-button[_ngcontent-%COMP%]{border:2px solid #FFFDFA;padding:2px 20px 3px;font-size:22px;color:#fffdfa;display:inline-block;position:relative;transition:.3s ease-in-out all;cursor:pointer}.contact-button[_ngcontent-%COMP%]:before{content:"";background:#FFFDFA;position:absolute;width:0%;top:0;left:0;height:100%;transition:.3s ease-out all;z-index:-1}.contact-button[_ngcontent-%COMP%]:hover:before{width:100%}.contact-button[_ngcontent-%COMP%]:hover{color:#010b13;font-weight:900}']})}return o})(),_=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-main-v1"]],decls:60,vars:40,consts:[[1,"grid","justify-center","align-center","main"],[1,"element","grid","grid-cols-3"],["resource","cappellino",3,"zoom"],[1,"col-span-2","text"],[1,"title"],["resource","cargo pants",1,"pants",3,"zoom","y","height","width"],["resource","giacca",1,"giacca",3,"zoom","rotation"],[1,"element","grid","grid-cols-4",2,"margin","4rem"],[1,"col-span-2","grid","grid-cols-3"],[1,"logo","px-2"],["src","assets/brand-logos/sunnei.png"],[1,"logo","pl-12"],[2,"font-weight","bold","font-size","25px"],[1,"element","grid","m-10"],[1,"text",2,"text-align","center","font-size","22px"],[1,"element"],[1,"text","flex","justify-center","m-6"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-display3d-v1",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._uU(7),t.ALo(8,"translate"),t.qZA()(),t._UZ(9,"hr"),t.TgZ(10,"div",1)(11,"div",3)(12,"div",4),t._uU(13),t.ALo(14,"translate"),t.qZA(),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._UZ(17,"app-display3d-v1",5),t.qZA(),t._UZ(18,"hr"),t.TgZ(19,"div",1),t._UZ(20,"app-display3d-v1",6),t.TgZ(21,"div",3)(22,"div",4),t._uU(23),t.ALo(24,"translate"),t.qZA(),t._uU(25),t.ALo(26,"translate"),t.qZA()(),t._UZ(27,"hr"),t.TgZ(28,"div",7)(29,"div",3)(30,"div",4),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._uU(33),t.ALo(34,"translate"),t.qZA(),t.TgZ(35,"div",8)(36,"div",9),t._UZ(37,"img",10),t.qZA(),t.TgZ(38,"div",11)(39,"h2",12),t._uU(40,"BRAND"),t.qZA()(),t.TgZ(41,"div",11)(42,"h2",12),t._uU(43,"BRAND"),t.qZA()()()(),t._UZ(44,"hr"),t.TgZ(45,"div",13)(46,"div",14),t._uU(47),t.ALo(48,"translate"),t._UZ(49,"br")(50,"br"),t._uU(51),t.ALo(52,"translate"),t.qZA()(),t.TgZ(53,"div",15)(54,"div",16)(55,"div",4),t._uU(56),t.ALo(57,"translate"),t.qZA()(),t._UZ(58,"app-form"),t.qZA()(),t._UZ(59,"app-footer")),2&n&&(t.xp6(2),t.Q6J("zoom",37),t.xp6(3),t.Oqu(t.lcZ(6,18,"title")),t.xp6(2),t.hij(" ",t.lcZ(8,20,"welcomeMessage")," "),t.xp6(6),t.Oqu(t.lcZ(14,22,"dedicationAndApproachability.heading")),t.xp6(2),t.hij(" ",t.lcZ(16,24,"dedicationAndApproachability.content")," "),t.xp6(2),t.Q6J("zoom",100)("y",.5)("height",475)("width",420),t.xp6(3),t.Q6J("zoom",50)("rotation",-.9),t.xp6(3),t.Oqu(t.lcZ(24,26,"detailAndPerfection.heading")),t.xp6(2),t.hij(" ",t.lcZ(26,28,"detailAndPerfection.content")," "),t.xp6(6),t.Oqu(t.lcZ(32,30,"professionalism.heading")),t.xp6(2),t.hij(" ",t.lcZ(34,32,"professionalism.content")," "),t.xp6(14),t.hij(" ",t.lcZ(48,34,"joinJourney")," "),t.xp6(4),t.hij("",t.lcZ(52,36,"learnMoreButton")," "),t.xp6(5),t.Oqu(t.lcZ(57,38,"footer-button")))},dependencies:[f,v,Z,l.X$],styles:['.main[_ngcontent-%COMP%]{padding:5vh 10vw 10vh 10vw;background-color:#faf9f9;font-family:lemon}.element[_ngcontent-%COMP%]{padding:20px 30px;justify-items:center;align-items:center}.text[_ngcontent-%COMP%]{font-family:lemon;font-weight:300;color:#010b13;padding:0 20px;text-align:justify;text-justify:distribute;white-space:pre-line}.title[_ngcontent-%COMP%]{font:900 40px lemon;color:#010b13}.logo[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;margin:0;transition:.3s ease-in-out all;cursor:pointer;align-items:center;display:flex}.contact-button[_ngcontent-%COMP%]{border:2px solid #010B13;padding:5px 20px 6px;font-size:22px;color:#010b13;display:inline-block;position:relative;transition:.3s ease-in-out all;cursor:pointer}.contact-button[_ngcontent-%COMP%]:before{content:"";background:#010B13;position:absolute;width:0%;top:0;left:0;height:100%;transition:.3s ease-out all;z-index:-1}.contact-button[_ngcontent-%COMP%]:hover:before{width:100%}.contact-button[_ngcontent-%COMP%]:hover{color:#f1f0ef;font-weight:900}hr[_ngcontent-%COMP%]{border:0;height:3px;margin:0;padding:0;width:100%;opacity:.5;transition:.3s ease-in-out all;cursor:pointer}.pants[_ngcontent-%COMP%]{position:relative;top:-130px}.giacca[_ngcontent-%COMP%]{position:relative}']})}return o})();var b=s(57),g=s(9862),y=s(5327),C=s(2900);const A=[{path:"",component:_}];let w=(()=>{class o{constructor(e){this.translate=e,e.setDefaultLang("en")}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(l.sK))};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({providers:[y.D],imports:[d.ez,b.Bz.forChild(A),l.aw.forRoot({loader:{provide:l.Zw,useFactory:C.g,deps:[g.eN]}}),a.u5,a.UX,g.JF]})}return o})()}}]);