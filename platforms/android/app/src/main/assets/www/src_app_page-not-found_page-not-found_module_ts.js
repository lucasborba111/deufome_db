(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page-not-found_page-not-found_module_ts"],{

/***/ 7236:
/*!*****************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPageRoutingModule": () => (/* binding */ PageNotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.page */ 1006);




const routes = [
    {
        path: '',
        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundPage
    }
];
let PageNotFoundPageRoutingModule = class PageNotFoundPageRoutingModule {
};
PageNotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PageNotFoundPageRoutingModule);



/***/ }),

/***/ 6815:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPageModule": () => (/* binding */ PageNotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found-routing.module */ 7236);
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.page */ 1006);







let PageNotFoundPageModule = class PageNotFoundPageModule {
};
PageNotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundPageRoutingModule
        ],
        declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundPage]
    })
], PageNotFoundPageModule);



/***/ }),

/***/ 1006:
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPage": () => (/* binding */ PageNotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_page_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page-not-found.page.html */ 2841);
/* harmony import */ var _page_not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.page.scss */ 7737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PageNotFoundPage = class PageNotFoundPage {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundPage.ctorParameters = () => [];
PageNotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_not_found_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PageNotFoundPage);



/***/ }),

/***/ 7737:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2841:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>page-not-found</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page-not-found_page-not-found_module_ts.js.map