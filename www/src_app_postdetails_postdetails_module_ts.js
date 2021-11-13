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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./postdetails.page.html */ 5961);
/* harmony import */ var _postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdetails.page.scss */ 149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let PostdetailsPage = class PostdetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.post = {
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
        };
        let data = this.activatedRoute.snapshot.params['data'];
        console.log('reached = ', JSON.parse(data));
        data = JSON.parse(data);
        this.post.photo = data.photo;
        this.post.titulo = data.titulo;
        this.post.ingredientes = data.ingredientes;
        this.post.modopreparo = data.modopreparo;
    }
    ngOnInit() {
    }
};
PostdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
PostdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.topDiv {\n  border-radius: 5px;\n  height: 200px;\n}\n\nion-icon {\n  font-size: 20px;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.titulo {\n  margin-top: -8%;\n  margin-left: -10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUlGOztBQUZBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUtBIiwiZmlsZSI6InBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG4udG9wRGl2e1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiNsb2dvIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcbi50aXR1bG97XHJcbm1hcmdpbi10b3A6LTglO1xyXG5tYXJnaW4tbGVmdDogLTEwcHggOyBcclxuZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>postdetails</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n\r\n<div>\r\n  <ion-card class=\"wrapper\">\r\n  <ion-card-header>\r\n    <div >\r\n      <img src=\"{{ post.photo }} \" class=\"topDiv\">\r\n    </div>     \r\n\r\n    <ion-card-title class=\"tituloreceitas\">Título: {{post.titulo}}\r\n    </ion-card-title>\r\n    <br>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <p>Ingredientes: {{post.ingredientes}}</p>\r\n\r\n   <p>Modo de Preparo: {{post.modopreparo}}</p>\r\n\r\n  </ion-card-content>\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_postdetails_postdetails_module_ts.js.map