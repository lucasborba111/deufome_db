"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postdetails_postdetails_module_ts"],{

/***/ 4355:
/*!***********************************************************!*\
  !*** ./src/app/postdetails/postdetails-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageRoutingModule": () => (/* binding */ PostdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageModule": () => (/* binding */ PostdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPage": () => (/* binding */ PostdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./postdetails.page.html */ 9094);
/* harmony import */ var _postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdetails.page.scss */ 3349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 7199);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let PostdetailsPage = class PostdetailsPage {
    constructor(activatedRoute, auth) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.post = {
            id: '',
            tipo: '',
            usuario: '',
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
            rating: 0,
        };
        this.numStars = 5;
        this.value = 1;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.stars = [];
        let data = this.activatedRoute.snapshot.params['data'];
        console.log('reached = ', JSON.parse(data));
        data = JSON.parse(data);
        this.post.id = data.id;
        this.post.tipo = data.tipo,
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
    ngAfterViewInit() {
        this.calc();
    }
    calc() {
        this.stars = [];
        let tmp = this.value;
        for (let i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1) {
                this.stars.push("star");
            }
            else if (tmp > 0 && tmp < 1) {
                this.stars.push("star-half");
            }
            else {
                this.stars.push("star-outline");
            }
        }
    }
    starClicked(index) {
        this.value = index + 1;
        console.log(this.value);
        this.ionClick.emit(this.value + 1);
        this.calc();
        this.post.rating = this.value;
        firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('posts').push(this.post).then(res => {
            console.log('pushed', res);
        });
    }
    log(valor) {
        console.log(valor);
    }
};
PostdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
PostdetailsPage.propDecorators = {
    numStars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    ionClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
PostdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-postdetails',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostdetailsPage);



/***/ }),

/***/ 9094:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/postdetails/postdetails.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"{{post.tipo}}\"></ion-back-button>\r\n      <ion-title>{{post.titulo}}</ion-title>\r\n      </ion-buttons>\r\n      <ion-icon name=\"trash-outline\"(click)=\"deletePost(post)\"></ion-icon>\r\n  </ion-toolbar>\r\n \r\n  \r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"conteudo\">\r\n    <img src=\"{{ post.photo }}\" class=\"img\">\r\n    <span class=\"titulo\">{{ post.titulo }}</span>\r\n    <span class=\"usuario\">Por: {{post.usuario}}</span>\r\n    <img src=\"../assets/iconeingredientes.png\" class=\"imgingredientes\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.ingredientes }}</p>\r\n    <img src=\"../assets/iconepreparo.png\" class=\"imgpreparo\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.modopreparo }}</p>\r\n  </div>\r\n  <p style=\"text-align: center;\">Avaliar receita!</p>\r\n\r\n  <ion-grid class=\"ion-grid-container\">\r\n      <div class=\"rating-position\" *ngFor=\"let star of stars; let i = index;\" tappable (click)=\"starClicked(i)\">\r\n          <ion-icon [name]=\"star\"></ion-icon>\r\n      </div>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 3349:
/*!***************************************************!*\
  !*** ./src/app/postdetails/postdetails.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  font-size: 25px;\n  display: flex;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.conteudo {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n}\n\n.titulo {\n  font-size: 24px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.usuario {\n  font-size: 15px;\n  color: gray;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.imgingredientes {\n  width: 192px;\n  height: 39px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 25px;\n}\n\n.imgpreparo {\n  width: 215px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\np {\n  color: #575757;\n  font-size: 17px;\n  font-family: Louis George Cafe;\n  margin-left: 5px;\n}\n\ni {\n  color: red;\n  padding-right: 10px;\n  margin-left: 5px;\n}\n\n.ion-grid-container ion-icon {\n  font-size: \"larger\";\n  color: yellow;\n}\n\n.ion-grid-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #e93434;\n}\n\n.rating-position {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBREE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0FBT0YiLCJmaWxlIjoicG9zdGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHJcbn1cclxuI2xvZ28ge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbn1cclxuLmNvbnRldWRve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBcclxufVxyXG4udGl0dWxve1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi51c3Vhcmlve1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmltZ2luZ3JlZGllbnRlc3tcclxuICB3aWR0aDogMTkycHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uaW1ncHJlcGFyb3tcclxuICB3aWR0aDogMjE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5we1xyXG4gIGNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBMb3VpcyBHZW9yZ2UgQ2FmZTtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5pe1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pb24tZ3JpZC1jb250YWluZXIgaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAnbGFyZ2VyJztcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcbi5pb24tZ3JpZC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDUyLCA1Mik7XHJcbn1cclxuLnJhdGluZy1wb3NpdGlvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_postdetails_postdetails_module_ts.js.map