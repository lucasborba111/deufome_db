(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_massas_massas_module_ts"],{

/***/ 1041:
/*!*******************************************************!*\
  !*** ./src/app/pages/massas/massas-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPageRoutingModule": () => (/* binding */ MassasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _massas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./massas.page */ 6642);




const routes = [
    {
        path: '',
        component: _massas_page__WEBPACK_IMPORTED_MODULE_0__.MassasPage
    }
];
let MassasPageRoutingModule = class MassasPageRoutingModule {
};
MassasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MassasPageRoutingModule);



/***/ }),

/***/ 7409:
/*!***********************************************!*\
  !*** ./src/app/pages/massas/massas.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPageModule": () => (/* binding */ MassasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _massas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./massas-routing.module */ 1041);
/* harmony import */ var _massas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./massas.page */ 6642);







let MassasPageModule = class MassasPageModule {
};
MassasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _massas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MassasPageRoutingModule
        ],
        declarations: [_massas_page__WEBPACK_IMPORTED_MODULE_1__.MassasPage]
    })
], MassasPageModule);



/***/ }),

/***/ 6642:
/*!*********************************************!*\
  !*** ./src/app/pages/massas/massas.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPage": () => (/* binding */ MassasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_massas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./massas.page.html */ 3090);
/* harmony import */ var _massas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./massas.page.scss */ 2422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MassasPage = class MassasPage {
    constructor() {
        this.hidden = false;
        this.hidden2 = false;
        this.hidden3 = false;
        this.hidden4 = false;
    }
    ngOnInit() {
    }
    toggleHidden() {
        this.hidden = !this.hidden;
    }
    toggleHidden2() {
        this.hidden2 = !this.hidden2;
    }
    toggleHidden3() {
        this.hidden3 = !this.hidden3;
    }
    toggleHidden4() {
        this.hidden4 = !this.hidden4;
    }
};
MassasPage.ctorParameters = () => [];
MassasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-massas',
        template: _raw_loader_massas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_massas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MassasPage);



/***/ }),

/***/ 2422:
/*!***********************************************!*\
  !*** ./src/app/pages/massas/massas.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n#cards {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 400px;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.titulo {\n  margin-top: -8%;\n  margin-left: -10px;\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Nhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUdKOztBQUFFO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFFRTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUdFO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdFO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQU1FO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNDLGdCQUFBO0VBQ0MsMkJBQUE7QUFISjs7QUFLRTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFGRjs7QUFPRTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9FO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0U7RUFDQSxlQUFBO0FBSkY7O0FBTUU7RUFDRSxtQkFBQTtBQUhKIiwiZmlsZSI6Im1hc3Nhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9kb3N7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIFxyXG59XHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICB3aWR0aDoxMDAlXHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4jbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgLy9DT05GSUdVUkHDh8ODTyBETyBDQVJEXHJcbiAgI2NhcmRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL0ZPTlRFU1xyXG4gIC50aXR1bG9yZWNlaXRhc3tcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9udGVpbmdyZWRpZW50ZXN7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG97XHJcbiAgbWFyZ2luLXRvcDotOCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4IDsgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBcclxuICAvL0lNQUdFTlNcclxuICAuaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIH1cclxuICAuaW9zIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgXHJcbiAgXHJcbiAgLmljb25laW5ncmVkaWVudGVze1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogODVweDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25lcHJlcGFyb3tcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbWQtcmVzdGF1cmFudHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC0taW9uLWNhcmQtY29udGVudHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 3090:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/massas/massas.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t  </ion-buttons>\r\n\t  <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\t<div id=\"todos\">\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/massas1.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">PIZZA DE PÃO DE FORMA</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: Denise</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 tomates</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 cebola</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 4 dentes de alho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Orégano a gosto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Sal a gosto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Azeite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pacote de pão de forma</i>></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200 g de presunto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200 g de queijo mussarela</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Refogue o alho juntamente com a cebola no azeite.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> A seguir, coloque o tomate e o sal até formar um molho cremoso. Reserve.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque os pães numa assadeira, jogue todo o molho em cima dos pães e acrescente o presunto por cima deste molho.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cubra com bastante queijo e regue com orégano e azeite.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque a assadeira no forno pré-aquecido.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Assim que o queijo derreter estará pronta a pizza.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden2()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/massas2.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">MACARRONADA DE CARNE MOÍDA</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden2\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pacote de macarrão para macarronada</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 caixa de extrato de tomate (grande)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 kg de carne moída</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cebolinha, pimentaõ, cheiro verde, alho, tomate (para temperar carne) knnor</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 creme de leite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200 g de queijo mussarela</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 100 g de presunto</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cozinhe a carne moída temperada com sal, cebolinha, pimentão, cheiro verde, tomate, knnor (ou ao seu gosto) deixe a carne com pouca água.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Após cozida junte o extrato de tomate até levantar fervura, a consistência deve estar bem grossa, apague o fogo e acrescente o creme de leite (reserve).</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Corte o queijo e o presunto em tirinhas.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden3()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/massas3.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">CALZONE DE CALABRESA COM CATUPIRY</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden3\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 30 g de fermento biológico</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher (sobremesa) de sal</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sobremesa) de açúcar</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sobremesa) de açúcar</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 colheres de sopa de óleo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de chá de água morna</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 xícaras de chá de farinha de trigo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Óleo para fritar</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em uma tigela, coloque o fermento, o sal, o açúcar e misture bem até obter um líquido homogêneo.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Junte o óleo, a água e acrescente a farinha de trigo aos poucos até desgrudar das mãos.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Sove a massa e divida em 10 partes.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Deixe crescer por 15 minutos ou até dobrar de volume.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Abra as massas com um rolo, divida os ingredientes do recheio entre as massas abertas.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Dobre a massa ao meio, formando uma meia-lua.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Aperte bem as bordas para não abrir na hora de fritar.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Frite uma de cada vez em óleo quente por 10 minutos ou até fritar e dourar por igual.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire do fogo, coloque sobre papel-toalha para escorrer o óleo, sirva a seguir.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden4()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/massas4.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">PÃO DE BATATA (MASSA CURINGA)</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden4\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de café de sal</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres de sopa de açúcar</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de batata (4 batatas médias)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 colheres de sopa de manteiga ou margarina</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 gemas</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 50 ml de leite ou água (morno)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 10g de fermento biológico instantâneo seco (fleischmann)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 kg de farinha de trigo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 gema para pincelar</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> opção de recheio</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> salsicha</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> carne moída</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> frango</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> queijo e presunto</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p>\r\n\t\t  <i class=\"icon ion-md-restaurant\">\r\n\t\t\tDescasque as batatas e deixe cozinhar somente na água sem sal. Coloque em uma peneira para escorrer e deixe ficar morno. Quando estiver morno amasse com um garfo ou passe no espremedor (como para purê), reserve.\r\n\t\t  </i>\r\n\t\t</p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Bata no liquidificador o sal, o açúcar, as gemas, manteiga, leite morno (não pode estar muito quente senão a massa não cresce), o fermento misturado com um pouco de trigo.</i></p>\r\n\t\t<p>\r\n\t\t  <i class=\"icon ion-md-restaurant\">\r\n\t\t\tColoque está batida junto a batata amassada em uma vasilha e vá acrescentando a farinha de trigo. Coloque a massa sobre uma bancada de mármore e continue juntando o trigo até a massa desgrudar da mão. Deixe descansar por 15\r\n\t\t\tminutos.\r\n\t\t  </i>\r\n\t\t</p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Corte a massa em pedaços, faça bolinhas e coloque para descansar por 30 minutos coberto por um pano.</i></p>\r\n\t\t<p>\r\n\t\t  <i class=\"icon ion-md-restaurant\">\r\n\t\t\tAbra a massa e recheie como quiser pode fazer bolinhas recheadas, esfirra, enroladinho, pão. Deixe descansar na assadeira untada por mais 50 minutos ou até dobrar de tamanho, misture a gema com um pouquinho de café e pincele os\r\n\t\t\tpães (o café serve para ficar douradinho).\r\n\t\t  </i>\r\n\t\t</p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Asse em forno 200 graus não precisa estar pré-aquecido. Os pães estarão bons quando estiver dourado por cima e por baixo. (+ ou - 40 minutos de forno).</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t</div>\r\n  </ion-content>\r\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_massas_massas_module_ts.js.map