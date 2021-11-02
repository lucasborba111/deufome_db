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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#logo {\n  height: 120px;\n  width: 140px;\n  position: absolute;\n  right: 50%;\n  top: 58%;\n  transform: translate(50%, -50%);\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 60%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\nion-select {\n  width: 100%;\n}\n\nion-content {\n  display: flex;\n  align-self: center;\n  --background: #ad0002;\n}\n\nion-input {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-textarea {\n  background-color: #f8f8f8;\n  border-radius: 5px;\n}\n\nion-select {\n  background-color: #f8f8f8;\n  margin-top: 30px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n}\n\nion-button {\n  display: flex;\n  width: 100%;\n  font-family: BebasNeue-Regular;\n  font-size: 16px;\n  margin-top: 20px;\n  border-radius: 5px;\n}\n\n.botaopostar {\n  background-color: white;\n  color: #ad0002;\n}\n\nspan {\n  font-family: BebasNeue-Regular;\n  color: white;\n  font-size: 25px;\n}\n\n.texto {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.img {\n  border-radius: 5px;\n  color: white;\n  background: black;\n  padding: 10px;\n  border: none;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFERTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFGRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFGRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZFO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLSiIsImZpbGUiOiJwb3N0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0b3A6IDU4JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcclxuICB9XHJcbiAgI2Zvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9XHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tY29udGVudHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogI2FkMDAwMjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBpb24tdGV4dGFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3Rhb3Bvc3RhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICNhZDAwMDI7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogQmViYXNOZXVlLVJlZ3VsYXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0b3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgICBcclxuICAiXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n<div>\r\n<div>\r\n  <div  (click)=\"choosePhotos()\" *ngIf=\"post.photo =='' \">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"post.photo != '' \">\r\n<img src=\"{{ post.photo}}\"/>\r\n</div>\r\n</div>\r\n\r\n<div>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Title</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"post.title\">\r\n    </ion-input>\r\n  </ion-item>\r\n</div>\r\n<ion-item>\r\n  <ion-label position=\"floating\">description</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"post.description\">\r\n  </ion-input>\r\n</ion-item>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_postar_postar_module_ts.js.map