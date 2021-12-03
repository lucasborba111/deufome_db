"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postar_postar_module_ts"],{

/***/ 5637:
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 7602);



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPageRoutingModule": () => (/* binding */ PostarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPageModule": () => (/* binding */ PostarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostarPage": () => (/* binding */ PostarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./postar.page.html */ 5264);
/* harmony import */ var _postar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postar.page.scss */ 1781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4483);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 7199);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 4357);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase */ 6633);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ 8659);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ 6776);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1435);















firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.initializeApp(_firebase_firebase__WEBPACK_IMPORTED_MODULE_5__.default);
let PostarPage = class PostarPage {
    constructor(storage, afStorage, camera, navCtrl, loading, auth, file, platform, loadingCtrl) {
        this.storage = storage;
        this.afStorage = afStorage;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.auth = auth;
        this.file = file;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.post = {
            tipo: '',
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
            usuario: '',
            estrela1: 0,
            estrela2: 0,
            estrela3: 0,
            estrela4: 0,
            estrela5: 0,
            nota: 0,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Carregando imagem...',
                spinner: 'bubbles',
                cssClass: 'teste',
                showBackdrop: true,
                duration: 6000,
            });
            loading.present();
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
        task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running');
            this.auth.user$.subscribe(user => {
                this.post.usuario = JSON.stringify(user.userName);
                if (this.post.photo == '') {
                    this.loading.presentToast('Por favor adicione uma imagem');
                }
                else {
                    if (this.post.titulo == '') {
                        this.loading.presentToast('Por favor adicione um titulo');
                    }
                    else {
                        if (this.post.ingredientes == '') {
                            this.loading.presentToast('Por favor adicione os ingredientes');
                        }
                        else {
                            if (this.post.modopreparo == '') {
                                this.loading.presentToast('Por favor adicione o modo de preparo');
                            }
                            else {
                                if (this.post.tipo == '') {
                                    this.loading.presentToast('Por favor selecione a categoria');
                                }
                                else {
                                    // inserindo no firebase
                                    firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('posts').push(this.post).then(res => {
                                        console.log('pushed', res);
                                        this.navCtrl.navigateRoot('home');
                                    });
                                }
                            }
                        }
                    }
                }
            });
            const loading = yield this.loadingCtrl.create({
                message: 'Processando...',
                spinner: 'bubbles',
                cssClass: 'teste',
                showBackdrop: true,
                duration: 2000,
            });
            loading.present();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
PostarPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorage },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController }
];
PostarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-postar',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postar_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostarPage);



/***/ }),

/***/ 5264:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/postar/postar.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"texto\">\r\n    <span>Poste sua Receita</span>\r\n  </div>\r\n  <div class=\"form\">\r\n    <ion-select interface=\"popover\" placeholder=\"Categoria\" clearInput [(ngModel)]=\"post.tipo\" cancelText=\"Cancelar\" okText=\"Ok\">\r\n      <ion-select-option value=\"lanches\">Lanches</ion-select-option>\r\n      <ion-select-option value=\"saladas\">Saladas</ion-select-option>\r\n      <ion-select-option value=\"massas\">Massas</ion-select-option>\r\n      <ion-select-option value=\"veganas\">Vegana</ion-select-option>\r\n    </ion-select>\r\n    <ion-input placeholder=\"Titulo\" clearInput [(ngModel)]=\"post.titulo\"></ion-input>\r\n    <ion-textarea placeholder=\"Ingredientes\" clearInput [(ngModel)]=\"post.ingredientes\"></ion-textarea>\r\n    <ion-textarea placeholder=\"Modo de Preparo\" clearInput [(ngModel)]=\"post.modopreparo\"></ion-textarea>\r\n  </div>\r\n  <span class=\"aviso\"><i class=\"icon ion-md-alert\"></i>Use a virgula para separar os ingredientes e o modo de preparo!</span>\r\n  <div class=\"wrapper\">\r\n      <div class=\"imgDiv\" (click)=\"openGalery()\" *ngIf=\"post.photo == '' \">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </div>\r\n      {{downloadUrl | async}}\r\n    <div *ngIf=\"post.photo != '' \">\r\n      <img class=\"img\" src=\"{{ post.photo }}\" />\r\n    </div>\r\n  </div>\r\n  <ion-button class=\"botaopostar\" color=\"body\" (click)=\"submitPost()\" expand=\"full\">Publicar</ion-button>\r\n</ion-content> ");

/***/ }),

/***/ 1781:
/*!*****************************************!*\
  !*** ./src/app/postar/postar.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.photoDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.img {\n  width: 60%;\n  border-radius: 7px;\n  display: flex;\n  height: 90px;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  border: 3px solid #e4e4e4;\n}\n\n.imgDiv {\n  width: 35%;\n  border-radius: 7px;\n  background: #e4e4e4;\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\n.ios .imgDiv {\n  width: 35%;\n  border-radius: 7px;\n  background: #e4e4e4;\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\n.imgDiv ion-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.formBody {\n  margin: 10% auto;\n}\n\nion-item {\n  margin-bottom: 5%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.ios #logo {\n  height: 70px;\n  width: 120px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\nion-content {\n  display: flex;\n  align-self: center;\n  --background: #ad0002;\n}\n\nion-input {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-textarea {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-select {\n  background-color: #f8f8f8;\n  margin-top: 30px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\n.ios ion-input {\n  background-color: #f8f8f8;\n  margin-bottom: 7px;\n  text-indent: 10px;\n}\n\n.ios ion-textarea {\n  background-color: #f8f8f8;\n  margin-bottom: 7px;\n  text-indent: 10px;\n}\n\nion-select {\n  background-color: #f8f8f8;\n  margin-top: 30px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\ndiv {\n  width: 80%;\n  margin-left: 35px;\n}\n\nion-button {\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: BebasNeue-Regular;\n  font-size: 16px;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.ios ion-button {\n  width: 50%;\n  height: 35px;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: BebasNeue-Regular;\n  font-size: 18px;\n  margin-top: 20px;\n}\n\n.botaopostar {\n  background-color: white;\n  color: #ad0002;\n}\n\nspan {\n  font-family: BebasNeue-Regular;\n  color: white;\n  font-size: 25px;\n}\n\n.texto {\n  text-align: center;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ios .texto {\n  text-align: center;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.aviso {\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 12px;\n  margin-top: 10px;\n}\n\ni {\n  padding-right: 5px;\n}\n\n.form {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDQSxnQkFBQTtBQUNBOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJwb3N0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcblxyXG4ucGhvdG9EaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNlNGU0ZTQ7XHJcbn1cclxuXHJcbi5pbWdEaXZ7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmlvcyAuaW1nRGl2e1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWdEaXYgaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZvcm1Cb2R5e1xyXG5tYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmlvcyAjbG9nbyB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIC0tYmFja2dyb3VuZDogI2FkMDAwMjtcclxuXHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW9zIGlvbi1pbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIHRleHQtaW5kZW50OiAxMHB4O1xyXG59XHJcbi5pb3MgaW9uLXRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuZGl2e1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBmb250LWZhbWlseTogQmViYXNOZXVlLVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW9zIGlvbi1idXR0b257XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IEJlYmFzTmV1ZS1SZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5cclxuIFxyXG4uYm90YW9wb3N0YXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICNhZDAwMDI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgZm9udC1mYW1pbHk6IEJlYmFzTmV1ZS1SZWd1bGFyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmlvcyAudGV4dG97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiAgXHJcbi5hdmlzb3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pe1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_postar_postar_module_ts.js.map