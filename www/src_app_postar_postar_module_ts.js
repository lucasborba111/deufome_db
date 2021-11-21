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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postar.page.html */ 3575);
/* harmony import */ var _postar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postar.page.scss */ 9981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 4575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/firebase */ 6633);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading.service */ 5637);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ 7556);












firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.initializeApp(_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__.default);
let PostarPage = class PostarPage {
    constructor(storage, webview, camera, alertCtrl, navCtrl, loading, auth) {
        this.storage = storage;
        this.webview = webview;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.auth = auth;
        this.cameraOptions = {
            quality: 100,
            allowEdit: false,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.galleryOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
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
    choosePhotos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let alertBox = yield this.alertCtrl.create({
                header: 'Choose from',
                buttons: [
                    {
                        text: 'Camera',
                        handler: () => {
                            this.camera.getPicture(this.cameraOptions).then(res => {
                                console.log('response = ', res);
                                let finalImg = this.webview.convertFileSrc(res);
                                console.log('finalImg = ', finalImg);
                                this.post.photo = finalImg;
                                this.uploadImage(finalImg);
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            this.camera.getPicture(this.galleryOptions).then(res => {
                                console.log('response =', res);
                                let finalImg = this.webview.convertFileSrc(res);
                                this.post.photo = finalImg;
                                this.uploadImage(finalImg);
                                console.log('finalImg = ', finalImg);
                            });
                        }
                    },
                ],
            });
            yield alertBox.present();
        });
    }
    uploadImage(image) {
        console.log('image = ', image);
        let randomname = this.randomnumberGenerator();
        return new Promise((resolve, reject) => {
            let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.storage().ref();
            let imageRef = storageRef.child('posts/' + randomname);
            this.toDataURL(image, (dataUrl) => {
                console.log(dataUrl);
                imageRef.putString(dataUrl, 'data_url')
                    .then(snapshot => {
                    //console.log(resolve(snapshot.downloadURL));
                    imageRef.getDownloadURL().then(url => {
                        console.log(url);
                        this.post.photo = url;
                    });
                }, err => {
                    reject(err);
                });
            });
        });
    }
    toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
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
            // if(this.post.photo == ''){
            //this.loading.presentToast('Por favor adicione uma imagem');
            // }
            //else{
            // if(this.post.titulo == ''){
            //  this.loading.presentToast('Por favor adicione um titulo')
            // }else{
            //  if(this.post.ingredientes == ''){
            //   this.loading.presentToast('Por favor adicione os ingredientes');
            // }else{
            //  if(this.post.modopreparo == ''){
            //    this.loading.presentToast('Por favor adicione o modo de preparo');
            //  }else{
            //  if(this.post.tipo == ''){
            //    this.loading.presentToast('Por favor selecione a categoria');
            // }else{
            //inserindo no firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.database().ref('posts').push(this.post).then(res => {
                console.log('pushed', res);
                this.navCtrl.navigateRoot('home');
            });
        });
    }
    //}
    // }
    //  }
    //  }
    //}
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
PostarPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__.WebView },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService }
];
PostarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.photoDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.imgDiv {\n  width: 35%;\n  border-radius: 7px;\n  background: #e4e4e4;\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 70px;\n}\n\n.imgDiv ion-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.formBody {\n  margin: 10% auto;\n}\n\nion-item {\n  margin-bottom: 5%;\n}\n\n#logo {\n  height: 120px;\n  width: 140px;\n  position: absolute;\n  right: 50%;\n  top: 58%;\n  transform: translate(50%, -50%);\n}\n\nion-content {\n  display: flex;\n  align-self: center;\n  --background: #ad0002;\n}\n\nion-input {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-textarea {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-select {\n  background-color: #f8f8f8;\n  margin-top: 30px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\ndiv {\n  width: 80%;\n  margin-left: 35px;\n}\n\nion-button {\n  width: 50%;\n  display: flex;\n  margin-left: 90px;\n  font-family: BebasNeue-Regular;\n  font-size: 16px;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.botaopostar {\n  background-color: white;\n  color: #ad0002;\n}\n\nspan {\n  font-family: BebasNeue-Regular;\n  color: white;\n  font-size: 25px;\n}\n\n.texto {\n  text-align: center;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDQSxnQkFBQTtBQUNBOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQ0E7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6InBvc3Rhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbn1cclxuXHJcbi5waG90b0RpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5pbWdEaXZ7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZDogI2U0ZTRlNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcblxyXG4uaW1nRGl2IGlvbi1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mb3JtQm9keXtcclxubWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG5pb24taXRlbXtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTAlO1xyXG4gIHRvcDogNTglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYWQwMDAyO1xyXG5cclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaW9uLXRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuZGl2e1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5ib3Rhb3Bvc3RhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogI2FkMDAwMjtcclxufVxyXG5cclxuc3BhbntcclxuICBmb250LWZhbWlseTogQmViYXNOZXVlLVJlZ3VsYXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnRleHRve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiAgXHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"texto\">\r\n    <span>Poste sua Receita</span>\r\n  </div>\r\n  <div>\r\n    <ion-select placeholder=\"Categoria\" clearInput [(ngModel)]=\"post.tipo\"   cancelText=\"Cancelar\" okText=\"Ok\">\r\n      <ion-select-option value=\"lanches\">Lanches</ion-select-option>\r\n      <ion-select-option value=\"saladas\">Saladas</ion-select-option>\r\n      <ion-select-option value=\"massas\">Massas</ion-select-option>\r\n      <ion-select-option value=\"veganas\">Vegana</ion-select-option>\r\n    </ion-select>\r\n    <ion-input placeholder=\"Titulo\" clearInput [(ngModel)]=\"post.titulo\"></ion-input>\r\n    <ion-textarea placeholder=\"Ingredientes\" clearInput [(ngModel)]=\"post.ingredientes\"></ion-textarea>\r\n    <ion-textarea placeholder=\"Modo de Preparo\" clearInput [(ngModel)]=\"post.modopreparo\"></ion-textarea>\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <div class=\"photoDiv\">\r\n      <div class=\"imgDiv\" (click)=\"choosePhotos()\" *ngIf=\"post.photo == '' \">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"post.photo != '' \">\r\n      <img src=\"{{ post.photo }}\" />\r\n    </div>\r\n  </div>\r\n  <ion-button class=\"botaopostar\" color=\"body\" (click)=\"submitPost()\" expand=\"full\">Publicar</ion-button>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_postar_postar_module_ts.js.map