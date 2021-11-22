(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postar_postar_module_ts"],{

/***/ 5637:
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);



let LoadingService = class LoadingService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.toast = true;
            return yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'bottom'
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.toast) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 3603:
/*!*************************************************!*\
  !*** ./src/app/postar/postar-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPageRoutingModule": () => (/* binding */ PostarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _postar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postar.page */ 1893);




const routes = [
    {
        path: '',
        component: _postar_page__WEBPACK_IMPORTED_MODULE_0__.PostarPage
    }
];
let PostarPageRoutingModule = class PostarPageRoutingModule {
};
PostarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostarPageRoutingModule);



/***/ }),

/***/ 5173:
/*!*****************************************!*\
  !*** ./src/app/postar/postar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPageModule": () => (/* binding */ PostarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _postar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postar-routing.module */ 3603);
/* harmony import */ var _postar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postar.page */ 1893);







let PostarPageModule = class PostarPageModule {
};
PostarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postar_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostarPageRoutingModule
        ],
        declarations: [_postar_page__WEBPACK_IMPORTED_MODULE_1__.PostarPage]
    })
], PostarPageModule);



/***/ }),

/***/ 1893:
/*!***************************************!*\
  !*** ./src/app/postar/postar.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPage": () => (/* binding */ PostarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postar.page.html */ 3575);
/* harmony import */ var _postar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postar.page.scss */ 9981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 4575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/firebase */ 6633);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8939);
















firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.initializeApp(_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__.default);
let PostarPage = class PostarPage {
    constructor(storage, afStorage, webview, camera, alertCtrl, navCtrl, loading, auth, file, platform) {
        this.storage = storage;
        this.afStorage = afStorage;
        this.webview = webview;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.auth = auth;
        this.file = file;
        this.platform = platform;
        this.post = {
            tipo: '',
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
            usuario: '',
        };
        this.posts = [];
    }
    // cameraOptions: CameraOptions = {
    //quality: 100,
    //  allowEdit: false,
    // correctOrientation: true,
    //destinationType: this.camera.DestinationType.FILE_URI,
    // encodingType: this.camera.EncodingType.JPEG,
    // mediaType: this.camera.MediaType.PICTURE
    // }
    openGalery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.FILE_URI,
                quality: 100,
                allowEdit: true,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true
            };
            try {
                const fileUri = yield this.camera.getPicture(options);
                let file;
                if (this.platform.is('ios')) {
                    file = fileUri.split('/').pop();
                }
                else {
                    file = fileUri.substring(fileUri.lastIndexOf('/') + 1, fileUri.indexOf('?'));
                }
                const path = fileUri.substring(0, fileUri.lastIndexOf('/'));
                const buffer = yield this.file.readAsArrayBuffer(path, file);
                const blob = new Blob([buffer], { type: 'image/jpeg' });
                this.uploadPicture(blob);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    //async choosePhotos(){
    //  let alertBox = await this.alertCtrl.create({
    //    header: 'Choose from',
    //    buttons: [
    //    {
    //     text: 'Camera',
    //    handler: () => {
    //      this.camera.getPicture(this.cameraOptions).then(res=>{
    //       console.log('response = ', res);
    //      let finalImg = this.webview.convertFileSrc(res);
    //    console.log('finalImg = ', finalImg);
    //    this.post.photo = finalImg;
    //   this.uploadImage(finalImg);
    // })
    //}
    //},
    //{
    //text: 'Gallery',
    // handler: () => {
    // this.camera.getPicture(this.galleryOptions).then(res=>{
    //  console.log('response =', res);
    /// let finalImg = this.webview.convertFileSrc(res);
    //this.post.photo = finalImg;
    // this.uploadImage(finalImg);
    //console.log('finalImg = ', finalImg);
    //})
    //  }
    //},
    // ],
    // })
    //  await alertBox.present();
    //}
    uploadPicture(blob) {
        let randomname = this.randomnumberGenerator();
        const ref = this.afStorage.ref('posts/' + randomname);
        const task = ref.put(blob);
        task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
            ref.getDownloadURL().subscribe(data => {
                console.log(`URL: ${data}`);
                this.post.photo = data;
            });
        })).subscribe();
        console.log(this.downloadUrl);
        //console.log('image = ', image);
        //let randomname = this.randomnumberGenerator();
        //return new Promise<any>((resolve, reject) =>{
        //  let storageRef = firebase.storage().ref();
        // let imageRef = storageRef.child('posts/' + randomname);
        // console.log(randomname);
        // this.toDataURL(image, (dataUrl) =>{
        //  console.log(dataUrl);
        //  imageRef.putString(dataUrl, 'data_url')
        // .then(snapshot => {
        //imageRef.getDownloadURL().then(url=>{
        //    console.log(url);
        //    this.post.photo = url;
        //  });
        //}, err =>{
        //  reject(err);
        //})
    } //)
    //})
    //}
    //toDataURL(url, callback) {
    // var xhr = new XMLHttpRequest();
    // xhr.onload = function() {
    //   var reader = new FileReader();
    //   reader.onloadend = function() {
    //    callback(reader.result);
    //  }
    /// reader.readAsDataURL(xhr.response);
    // };
    // xhr.open('GET', url);
    // xhr.responseType = 'blob';
    // xhr.send();
    // }
    randomnumberGenerator() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgjijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    submitPost() {
        console.log('running');
        this.auth.user$.subscribe(user => {
            this.post.usuario = JSON.stringify(user.userName);
            //  if(this.post.photo == ''){
            // this.loading.presentToast('Por favor adicione uma imagem');
            //  }
            //else{
            //if(this.post.titulo == ''){
            //   this.loading.presentToast('Por favor adicione um titulo')
            // }else{
            //  if(this.post.ingredientes == ''){
            //  this.loading.presentToast('Por favor adicione os ingredientes');
            // }else{
            // if(this.post.modopreparo == ''){
            //  this.loading.presentToast('Por favor adicione o modo de preparo');
            //  }else{
            //   if(this.post.tipo == ''){
            //     this.loading.presentToast('Por favor selecione a categoria');
            //   }else{
            //inserindo no firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.database().ref('posts').push(this.post).then(res => {
                console.log('pushed', res);
                this.navCtrl.navigateRoot('home');
            });
            //}
            //    }
            //  }
            // }
            //}
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
PostarPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__.AngularFireStorage },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__.WebView },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform }
];
PostarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-postar',
        template: _raw_loader_postar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostarPage);



/***/ }),

/***/ 9981:
/*!*****************************************!*\
  !*** ./src/app/postar/postar.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.photoDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.imgDiv {\n  width: 35%;\n  border-radius: 7px;\n  background: #e4e4e4;\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 70px;\n}\n\n.imgDiv ion-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.formBody {\n  margin: 10% auto;\n}\n\nion-item {\n  margin-bottom: 5%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\nion-content {\n  display: flex;\n  align-self: center;\n  --background: #ad0002;\n}\n\nion-input {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-textarea {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-select {\n  background-color: #f8f8f8;\n  margin-top: 30px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\ndiv {\n  width: 80%;\n  margin-left: 35px;\n}\n\nion-button {\n  width: 50%;\n  display: flex;\n  margin-left: 90px;\n  font-family: BebasNeue-Regular;\n  font-size: 16px;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.botaopostar {\n  background-color: white;\n  color: #ad0002;\n}\n\nspan {\n  font-family: BebasNeue-Regular;\n  color: white;\n  font-size: 25px;\n}\n\n.texto {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.aviso {\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 12px;\n  margin-top: 10px;\n}\n\ni {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDQSxnQkFBQTtBQUNBOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQ0E7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRiIsImZpbGUiOiJwb3N0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcblxyXG4ucGhvdG9EaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaW1nRGl2e1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG5cclxuLmltZ0RpdiBpb24taWNvbntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZm9ybUJvZHl7XHJcbm1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQ6ICNhZDAwMDI7XHJcblxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5pb24tdGV4dGFyZWF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5kaXZ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICB3aWR0aDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEJlYmFzTmV1ZS1SZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4gXHJcbi5ib3Rhb3Bvc3RhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogI2FkMDAwMjtcclxufVxyXG5cclxuc3BhbntcclxuICBmb250LWZhbWlseTogQmViYXNOZXVlLVJlZ3VsYXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiAgXHJcbi5hdmlzb3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pe1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 3575:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postar/postar.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"texto\">\r\n    <span>Poste sua Receita</span>\r\n  </div>\r\n  <div>\r\n    <ion-select interface=\"popover\" placeholder=\"Categoria\" clearInput [(ngModel)]=\"post.tipo\" cancelText=\"Cancelar\" okText=\"Ok\">\r\n      <ion-select-option value=\"lanches\">Lanches</ion-select-option>\r\n      <ion-select-option value=\"saladas\">Saladas</ion-select-option>\r\n      <ion-select-option value=\"massas\">Massas</ion-select-option>\r\n      <ion-select-option value=\"veganas\">Vegana</ion-select-option>\r\n    </ion-select>\r\n    <ion-input placeholder=\"Titulo\" clearInput [(ngModel)]=\"post.titulo\"></ion-input>\r\n    <ion-textarea placeholder=\"Ingredientes\" clearInput [(ngModel)]=\"post.ingredientes\"></ion-textarea>\r\n    <ion-textarea placeholder=\"Modo de Preparo\" clearInput [(ngModel)]=\"post.modopreparo\"></ion-textarea>\r\n  </div>\r\n  <span class=\"aviso\"><i class=\"icon ion-md-alert\"></i>Use a virgula para separar os ingredientes e o modo de preparo!</span>\r\n  <div class=\"wrapper\">\r\n    <div class=\"photoDiv\">\r\n      <div class=\"imgDiv\" (click)=\"openGalery()\" *ngIf=\"post.photo == '' \">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </div>\r\n      {{downloadUrl | async}}\r\n    </div>\r\n    <div *ngIf=\"post.photo != '' \">\r\n      <img src=\"{{ post.photo }}\" />\r\n    </div>\r\n  </div>\r\n  <ion-button class=\"botaopostar\" color=\"body\" (click)=\"submitPost()\" expand=\"full\">Publicar</ion-button>\r\n</ion-content> ");

/***/ })

}]);
//# sourceMappingURL=src_app_postar_postar_module_ts.js.map