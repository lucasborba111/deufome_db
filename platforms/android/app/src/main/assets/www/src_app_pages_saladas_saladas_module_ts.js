(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_saladas_saladas_module_ts"],{

/***/ 4529:
/*!*********************************************************!*\
  !*** ./src/app/pages/saladas/saladas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPageRoutingModule": () => (/* binding */ SaladasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _saladas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saladas.page */ 1637);




const routes = [
    {
        path: '',
        component: _saladas_page__WEBPACK_IMPORTED_MODULE_0__.SaladasPage
    }
];
let SaladasPageRoutingModule = class SaladasPageRoutingModule {
};
SaladasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SaladasPageRoutingModule);



/***/ }),

/***/ 4928:
/*!*************************************************!*\
  !*** ./src/app/pages/saladas/saladas.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPageModule": () => (/* binding */ SaladasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _saladas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saladas-routing.module */ 4529);
/* harmony import */ var _saladas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saladas.page */ 1637);







let SaladasPageModule = class SaladasPageModule {
};
SaladasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _saladas_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaladasPageRoutingModule
        ],
        declarations: [_saladas_page__WEBPACK_IMPORTED_MODULE_1__.SaladasPage]
    })
], SaladasPageModule);



/***/ }),

/***/ 1637:
/*!***********************************************!*\
  !*** ./src/app/pages/saladas/saladas.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPage": () => (/* binding */ SaladasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_saladas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./saladas.page.html */ 2980);
/* harmony import */ var _saladas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saladas.page.scss */ 2007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SaladasPage = class SaladasPage {
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
SaladasPage.ctorParameters = () => [];
SaladasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-saladas',
        template: _raw_loader_saladas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_saladas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SaladasPage);



/***/ }),

/***/ 2007:
/*!*************************************************!*\
  !*** ./src/app/pages/saladas/saladas.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n#cards {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 400px;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.titulo {\n  margin-top: -8%;\n  margin-left: -10px;\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFHSjs7QUFBRTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBRUU7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFHRTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHRTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFNRTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQyxnQkFBQTtFQUNDLDJCQUFBO0FBSEo7O0FBS0U7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRkY7O0FBT0U7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPRTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU9FO0VBQ0EsZUFBQTtBQUpGOztBQU1FO0VBQ0UsbUJBQUE7QUFISiIsImZpbGUiOiJzYWxhZGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b2Rvc3tcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgXHJcbn1cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG5pb24tY29udGVudHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiNsb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gIH1cclxuICAvL0NPTkZJR1VSQcOHw4NPIERPIENBUkRcclxuICAjY2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vRk9OVEVTXHJcbiAgLnRpdHVsb3JlY2VpdGFze1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mb250ZWluZ3JlZGllbnRlc3tcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsb3tcclxuICBtYXJnaW4tdG9wOi04JTtcclxuICBtYXJnaW4tbGVmdDogLTEwcHggOyBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFxyXG4gIC8vSU1BR0VOU1xyXG4gIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG4gIC5pb3MgLmltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBcclxuICBcclxuICAuaWNvbmVpbmdyZWRpZW50ZXN7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbmVwcmVwYXJve1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi1tZC1yZXN0YXVyYW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLS1pb24tY2FyZC1jb250ZW50e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ 2980:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/saladas/saladas.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t  </ion-buttons>\r\n\t  <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\t<div id=\"todos\">\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/salada1.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">SALADA DE MACARRÃO COM ATUM</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 250 g de macarrão parafuso</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 cebola bem picadinha</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 tomates sem sementes cortados em cubinhos</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 lata de milho verde</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 latas de atum ralado sem o óleo da conserva</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sopa) de mostarda</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara de maionese</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> sal, pimenta-do-reino e cheiro verde a gosto</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em uma panela ferva a água para cozinhar o macarrão.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cozinhe da forma tradicional deixando o macarrão al dente.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Enquanto isso prepare a mistura para temperar o macarrão.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque em uma vasilha grande as 2 latas de atum, a cebola, os tomates, o milho, a maionese, a mostarda, sal, pimenta do reino e o cheiro verde.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cuidadosamente misture bem.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Depois que o macarrão estiver cozido, colque em um refratário e adicione a mistura mexendo levemente para não quebrar o macarrão.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Quando a mistura estiver bem incorporada ao macarrão leve para a geladeira por no mínimo 1 hora e meia.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Eu prefiro fazer com de um dia para o outro,pois o sabor fica bem mais apurado.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Sirva como prato principal em dias quentes acompanhado de um frango grelhado..</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden2()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/salada2.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">COUVE-FLOR GRATINADA</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden2\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 couve-flor média</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 copo de requeijão</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 ovos</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 50 g de queijo ralado</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200 g de mussarela</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> cheiro-verde</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 tomate picadinho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> margarina para juntar</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cozinhar a couve-flor com sal até ficar bem macia.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Escorra e coloque em forma untada com margarina.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Acrescente o requeijão (colheradas espalhadas)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Bata os ovos e junte 25 g de queijo ralado, cheiro verde e o tomate.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Jogue os ovos batidos por cima da couve-flor.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cubra com a mussarela, polvilhe com o restante do queijo ralado.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Leve ao forno para gratinar.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden3()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/salada3.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">SALPICÃO</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden3\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 kg de frango (peito) refogado e desfiado</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 cenoura média ralada</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 lata de milho escorrido</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 vidro de azeitona pequena</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Palmito picado a gosto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 maçãs cascada e picada</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200 g de uvas passas</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 100 g de presunto picado</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 100 g de mussarela picada</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Tempero a gosto e por último</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 lata de creme de leite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher (sopa) de maionese</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Misture todos os ingredientes.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Jogar por cima batata palha a gosto.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden4()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/salada4.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">SALADA DE BERINJELA NO FORNO</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: *USUARIO*</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden4\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 berinjelas</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pimentão verde</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pimentão vermelho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pimentão amarelo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 cebola grande</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 xícara (chá) de azeite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/4 xícara (chá) de vinagre</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 colheres (sopa) de azeitonas pretas picadas</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 dentes (grandes) de alho picadinho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 folha de louro</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sopa) de orégano</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sopa) de salsa picadinha</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> sal a gosto</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire um pouco da casca da berinjela, corte em fatias finas no sentido do comprimento e depois corte em tirinhas.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque as berinjelas cortadas de molho em água com sal durante meia hora, depois passe na água para retirar o sal e dê uma espremida.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Corte a cebola e o pimentão em tirinhas, coloque em uma assadeira, junte a berinjela, o alho, o louro, a salsa, orégano, azeitona e o sal.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Regue com metade do vinagre e leve ao forno médio preaquecido por 45 minutos.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire do forno e regue com o azeite e o restante do vinagre.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Deixe esfriar e sirva.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t</div>\r\n  </ion-content>\r\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_saladas_saladas_module_ts.js.map