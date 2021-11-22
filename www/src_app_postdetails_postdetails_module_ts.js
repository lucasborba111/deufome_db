(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postdetails_postdetails_module_ts"],{

/***/ 4355:
/*!***********************************************************!*\
  !*** ./src/app/postdetails/postdetails-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageRoutingModule": () => (/* binding */ PostdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _postdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postdetails.page */ 1239);




const routes = [
    {
        path: '',
        component: _postdetails_page__WEBPACK_IMPORTED_MODULE_0__.PostdetailsPage
    }
];
let PostdetailsPageRoutingModule = class PostdetailsPageRoutingModule {
};
PostdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostdetailsPageRoutingModule);



/***/ }),

/***/ 6414:
/*!***************************************************!*\
  !*** ./src/app/postdetails/postdetails.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageModule": () => (/* binding */ PostdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _postdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postdetails-routing.module */ 4355);
/* harmony import */ var _postdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdetails.page */ 1239);







let PostdetailsPageModule = class PostdetailsPageModule {
};
PostdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _postdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostdetailsPageRoutingModule
        ],
        declarations: [_postdetails_page__WEBPACK_IMPORTED_MODULE_1__.PostdetailsPage]
    })
], PostdetailsPageModule);



/***/ }),

/***/ 1239:
/*!*************************************************!*\
  !*** ./src/app/postdetails/postdetails.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPage": () => (/* binding */ PostdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postdetails.page.html */ 5961);
/* harmony import */ var _postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdetails.page.scss */ 149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 2329);






let PostdetailsPage = class PostdetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.post = {
            id: '',
            usuario: '',
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
        };
        let data = this.activatedRoute.snapshot.params['data'];
        console.log('reached = ', JSON.parse(data));
        data = JSON.parse(data);
        this.post.id = data.id;
        this.post.usuario = data.usuario;
        this.post.photo = data.photo;
        this.post.titulo = data.titulo;
        this.post.ingredientes = data.ingredientes;
        this.post.modopreparo = data.modopreparo;
    }
    deletePost(post) {
        console.log('post = ', post);
        firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('posts/' + post.id).remove().then(res => {
            console.log('removed =', res);
        });
    }
    ngOnInit() {
    }
};
PostdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
PostdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-postdetails',
        template: _raw_loader_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostdetailsPage);



/***/ }),

/***/ 149:
/*!***************************************************!*\
  !*** ./src/app/postdetails/postdetails.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 25px;\n  display: flex;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.conteudo {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.img {\n  width: 95%;\n  border-radius: 5px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n}\n\n.titulo {\n  font-size: 24px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.usuario {\n  font-size: 15px;\n  color: gray;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.imgingredientes {\n  width: 192px;\n  height: 39px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 25px;\n}\n\n.imgpreparo {\n  width: 215px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\np {\n  color: #575757;\n  font-size: 17px;\n  font-family: Louis George Cafe;\n  margin-left: 5px;\n}\n\ni {\n  color: red;\n  padding-right: 10px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJRiIsImZpbGUiOiJwb3N0ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG5cclxufVxyXG4jbG9nbyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxufVxyXG4uY29udGV1ZG97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5pbWd7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgXHJcbn1cclxuLnRpdHVsb3tcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udXN1YXJpb3tcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5pbWdpbmdyZWRpZW50ZXN7XHJcbiAgd2lkdGg6IDE5MnB4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmltZ3ByZXBhcm97XHJcbiAgd2lkdGg6IDIxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxucHtcclxuICBjb2xvcjogcmdiKDg3LCA4NywgODcpO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogTG91aXMgR2VvcmdlIENhZmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuaXtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 5961:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postdetails/postdetails.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"lanches\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-icon name=\"trash-outline\" (click)=\"deletePost(post)\"></ion-icon>\r\n    <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"conteudo\">\r\n    <img src=\"{{ post.photo }}\" class=\"img\">\r\n    <span class=\"titulo\">{{ post.titulo }}</span>\r\n    <span class=\"usuario\">Por: {{post.usuario}}</span>\r\n    <img src=\"../assets/iconeingredientes.png\" class=\"imgingredientes\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.ingredientes }}</p>\r\n    <img src=\"../assets/iconepreparo.png\" class=\"imgpreparo\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.modopreparo }}</p>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_postdetails_postdetails_module_ts.js.map