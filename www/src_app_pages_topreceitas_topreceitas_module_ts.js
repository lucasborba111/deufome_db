(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_topreceitas_topreceitas_module_ts"],{

/***/ 5023:
/*!*****************************************************************!*\
  !*** ./src/app/pages/topreceitas/topreceitas-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopreceitasPageRoutingModule": () => (/* binding */ TopreceitasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _topreceitas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topreceitas.page */ 3481);




const routes = [
    {
        path: '',
        component: _topreceitas_page__WEBPACK_IMPORTED_MODULE_0__.TopreceitasPage
    }
];
let TopreceitasPageRoutingModule = class TopreceitasPageRoutingModule {
};
TopreceitasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopreceitasPageRoutingModule);



/***/ }),

/***/ 8048:
/*!*********************************************************!*\
  !*** ./src/app/pages/topreceitas/topreceitas.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopreceitasPageModule": () => (/* binding */ TopreceitasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _topreceitas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topreceitas-routing.module */ 5023);
/* harmony import */ var _topreceitas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topreceitas.page */ 3481);







let TopreceitasPageModule = class TopreceitasPageModule {
};
TopreceitasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _topreceitas_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopreceitasPageRoutingModule
        ],
        declarations: [_topreceitas_page__WEBPACK_IMPORTED_MODULE_1__.TopreceitasPage]
    })
], TopreceitasPageModule);



/***/ }),

/***/ 3481:
/*!*******************************************************!*\
  !*** ./src/app/pages/topreceitas/topreceitas.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopreceitasPage": () => (/* binding */ TopreceitasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_topreceitas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./topreceitas.page.html */ 9275);
/* harmony import */ var _topreceitas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topreceitas.page.scss */ 5344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TopreceitasPage = class TopreceitasPage {
    constructor() { }
    ngOnInit() {
    }
};
TopreceitasPage.ctorParameters = () => [];
TopreceitasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-topreceitas',
        template: _raw_loader_topreceitas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_topreceitas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopreceitasPage);



/***/ }),

/***/ 5344:
/*!*********************************************************!*\
  !*** ./src/app/pages/topreceitas/topreceitas.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".subtitles {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.titles {\n  display: flex;\n  margin-top: 10x;\n  float: left;\n}\n\n.img {\n  height: 70px;\n  border-radius: 10px;\n}\n\n.card-header {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  width: 120%;\n  align-self: center;\n  padding: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHJlY2VpdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0FBRUg7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHSiIsImZpbGUiOiJ0b3ByZWNlaXRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnRpdGxlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmltZ3tcclxuICAgaGVpZ2h0OiA3MHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiA7XHJcbiAgICB3aWR0aDogMTIwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gIH1cclxuICBcclxuICAiXX0= */");

/***/ }),

/***/ 9275:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/topreceitas/topreceitas.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Top receitas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div class=\"card-header\">\r\n          <div>\r\n          <ion-card-title>Nome receita</ion-card-title>\r\n          <ion-card-subtitle>Por: Lucas</ion-card-subtitle>\r\n        <div class=\"subtitles\">\r\n          <ion-card-subtitle>Categoria: Lanches</ion-card-subtitle>\r\n        </div>\r\n      </div>\r\n      <div >\r\n        <ion-img class=\"img\" src=\"assets/lanche1.jpg\" ></ion-img>\r\n      </div>\r\n      <br>\r\n    </div>\r\n</ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_topreceitas_topreceitas_module_ts.js.map