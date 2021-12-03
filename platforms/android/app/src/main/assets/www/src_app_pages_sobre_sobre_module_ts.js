"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sobre_sobre_module_ts"],{

/***/ 877:
/*!*****************************************************!*\
  !*** ./src/app/pages/sobre/sobre-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePageRoutingModule": () => (/* binding */ SobrePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePageModule": () => (/* binding */ SobrePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrePage": () => (/* binding */ SobrePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sobre_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sobre.page.html */ 712);
/* harmony import */ var _sobre_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre.page.scss */ 9705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let SobrePage = class SobrePage {
    constructor() { }
    ngOnInit() {
    }
};
SobrePage.ctorParameters = () => [];
SobrePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sobre',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sobre_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sobre_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SobrePage);



/***/ }),

/***/ 712:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sobre/sobre.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n\r\n  <div>\r\n  <h2 class=\"titulo2\">Nossa Equipe</h2>\r\n  <div style=\"display: flex;flex-direction: row; justify-content: center;\"> <a href=\"https://www.instagram.com/romaoandre_/\"><img class=\"insta\" src=\"assets/instadede.png\"></a>\r\n    <a href=\"https://www.instagram.com/lucas_borba11/\"><img class=\"insta\" src=\"assets/instaluca.png\"></a></div>\r\n \r\n</div>\r\n\r\n<div>\r\n  <h2 class=\"titulo2\">Nosso Objetivo</h2>\r\n  <br>\r\n  <div class=\"obj\">\r\n  <span>Nosso objetivo é trazer praticidade na hora de fazer suas deliciosas receitas,\r\n    todas as receitas são enviadas e testadas pelos próprios usuários\r\n com fotos, modo de preparo e lista de ingredientes,\r\n    o DeuFome tem diversas receitas para os mais diversos gostos culinarios</span>\r\n</div>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ 9705:
/*!*********************************************!*\
  !*** ./src/app/pages/sobre/sobre.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\nh2 {\n  font-family: BebasNeue-Regular;\n  text-align: center;\n}\n\n.insta {\n  width: 140px;\n  transform: translateX(-50%);\n  margin-left: 50%;\n}\n\n.titulo2 {\n  color: white;\n  margin-top: 30px;\n  font-family: BebasNeue-Regular;\n}\n\nspan {\n  color: white;\n  font-family: monospace;\n}\n\n.obj {\n  text-align: center;\n  font-size: large;\n  width: 90%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\nion-content {\n  --ion-background-color:#ad0002;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6InNvYnJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gIH1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmluc3Rhe1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRpdHVsbzJ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4ub2Jqe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2FkMDAwMjtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sobre_sobre_module_ts.js.map