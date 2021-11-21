(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sobre_sobre_module_ts"],{

/***/ 877:
/*!*****************************************************!*\
  !*** ./src/app/pages/sobre/sobre-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePageRoutingModule": () => (/* binding */ SobrePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre.page */ 6801);




const routes = [
    {
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_0__.SobrePage
    }
];
let SobrePageRoutingModule = class SobrePageRoutingModule {
};
SobrePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SobrePageRoutingModule);



/***/ }),

/***/ 4701:
/*!*********************************************!*\
  !*** ./src/app/pages/sobre/sobre.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePageModule": () => (/* binding */ SobrePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sobre_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre-routing.module */ 877);
/* harmony import */ var _sobre_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre.page */ 6801);







let SobrePageModule = class SobrePageModule {
};
SobrePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sobre_routing_module__WEBPACK_IMPORTED_MODULE_0__.SobrePageRoutingModule
        ],
        declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_1__.SobrePage]
    })
], SobrePageModule);



/***/ }),

/***/ 6801:
/*!*******************************************!*\
  !*** ./src/app/pages/sobre/sobre.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePage": () => (/* binding */ SobrePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sobre.page.html */ 1724);
/* harmony import */ var _sobre_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre.page.scss */ 2165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SobrePage = class SobrePage {
    constructor() { }
    ngOnInit() {
    }
};
SobrePage.ctorParameters = () => [];
SobrePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sobre',
        template: _raw_loader_sobre_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sobre_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SobrePage);



/***/ }),

/***/ 2165:
/*!*********************************************!*\
  !*** ./src/app/pages/sobre/sobre.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\nh2 {\n  font-family: BebasNeue-Regular;\n  text-align: center;\n}\n\n.insta {\n  width: 140px;\n  transform: translateX(-50%);\n  margin-left: 50%;\n}\n\n.titulo2 {\n  color: #222;\n  margin-top: 30px;\n  font-family: BebasNeue-Regular;\n}\n\nspan {\n  color: #222;\n  font-family: monospace;\n}\n\n.obj {\n  text-align: center;\n  font-size: large;\n  width: 90%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0oiLCJmaWxlIjoic29icmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEJlYmFzTmV1ZS1SZWd1bGFyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5zdGF7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udGl0dWxvMntcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLm9iantcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 1724:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sobre/sobre.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <div>\r\n  <h2 class=\"titulo2\">Nossa Equipe</h2>\r\n  <div style=\"display: flex;flex-direction: row; justify-content: center;\"> <a href=\"https://www.instagram.com/romaoandre_/\"><img class=\"insta\" src=\"assets/instadede.png\"></a>\r\n    <a href=\"https://www.instagram.com/lucas_borba11/\"><img class=\"insta\" src=\"assets/instaluca.png\"></a></div>\r\n \r\n</div>\r\n\r\n<div>\r\n  <h2 class=\"titulo2\">Nosso Objetivo</h2>\r\n  <br>\r\n  <div class=\"obj\">\r\n  <span>Nosso objetivo é trazer praticidade na hora de fazer suas deliciosas receitas,\r\n    todas as receitas são enviadas e testadas pelos próprios usuários\r\n Com fotos, modo de preparo e lista de ingredientes,\r\n    o DeuFome tem diversas reeceitas para os mais diversos gostos culinarios</span>\r\n</div>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sobre_sobre_module_ts.js.map