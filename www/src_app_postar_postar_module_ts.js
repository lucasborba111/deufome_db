(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postar_postar_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postar.page.html */ 3575);
/* harmony import */ var _postar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postar.page.scss */ 9981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 4575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ 2329);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 1628);









let PostarPage = class PostarPage {
    constructor(storage, webview, camera, alertCtrl, navCtrl) {
        this.storage = storage;
        this.webview = webview;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
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
            photo: '',
            title: '',
            description: '',
        };
        this.posts = [];
    }
    choosePhotos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
                            });
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            this.camera.getPicture(this.galleryOptions).then(res => {
                                console.log('response =', res);
                                let finalImg = this.webview.convertFileSrc(res);
                                console.log('finalImg = ', finalImg);
                                this.post.photo = finalImg;
                                this.uploadImage(finalImg);
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
        },
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
        if (this.post.photo == '') {
            alert('insira a foto');
        }
        else {
            if (this.post.title == '') {
                alert('insira o titulo');
            }
            else {
                if (this.post.description == '') {
                    alert('insira a descrição');
                }
                else {
                    //inserindo no firebase
                    firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.database().ref('posts').push(this.post).then(res => {
                        console.log('pushed', res);
                        this.navCtrl.navigateRoot('home');
                    });
                    //this.storage.get('postArray').then(res=>{
                    // console.log('res = ',res);
                    //  if(res ==null){
                    //  this.posts = [];
                    // }else{
                    // this.posts = res;
                    // }
                    //.posts.push(this.post);
                    //this.storage.set('postsArray', this.posts);
                    //console.log('array = ', this.posts);
                    // this.navCtrl.navigateRoot('home');
                    //})
                }
            }
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
PostarPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__.WebView },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
PostarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.photoDiv {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.imgDiv {\n  width: 35%;\n  border-radius: 7px;\n  background: #e4e4e4;\n  display: flex;\n  height: 70px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.imgDiv ion-icon {\n  font-size: 30px;\n  color: black;\n}\n\n.formBody {\n  margin: 10% auto;\n}\n\nion-item {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDQSxnQkFBQTtBQUNBOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJwb3N0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcblxyXG4ucGhvdG9EaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaW1nRGl2e1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWdEaXYgaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZvcm1Cb2R5e1xyXG5tYXJnaW46IDEwJSBhdXRvO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n<div class=\"wrapper\">\r\n<div class=\"photoDiv\">\r\n  <div class=\"imgDiv\" (click)=\"choosePhotos()\" *ngIf=\"post.photo == '' \">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"post.photo != '' \">\r\n<img src=\"{{ post.photo}}\"/>\r\n</div>\r\n</div>\r\n\r\n<div class=\"formBody\">\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Title</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"post.title\">\r\n    </ion-input>\r\n  </ion-item>\r\n</div>\r\n<ion-item>\r\n  <ion-label position=\"floating\">description</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"post.description\">\r\n  </ion-input>\r\n</ion-item>\r\n<div>\r\n  <ion-button (click)=\"submitPost()\">Save</ion-button>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_postar_postar_module_ts.js.map