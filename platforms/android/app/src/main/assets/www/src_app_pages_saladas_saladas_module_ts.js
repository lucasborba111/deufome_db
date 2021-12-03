"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_saladas_saladas_module_ts"],{

/***/ 4529:
/*!*********************************************************!*\
  !*** ./src/app/pages/saladas/saladas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPageRoutingModule": () => (/* binding */ SaladasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPageModule": () => (/* binding */ SaladasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaladasPage": () => (/* binding */ SaladasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saladas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./saladas.page.html */ 6335);
/* harmony import */ var _saladas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saladas.page.scss */ 5893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 4357);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 7199);







let SaladasPage = class SaladasPage {
    constructor(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.posts = [];
    }
    ionViewWillEnter() {
        this.fetchPosts();
    }
    fetchPosts() {
        this.posts = [];
        firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('posts').on('value', snapshot => {
            let result = snapshot.val();
            console.log('result = ', result);
            for (let i in result) {
                var element = result[i];
                let post = {
                    id: i,
                    tipo: element.tipo,
                    photo: element.photo,
                    titulo: element.titulo,
                    ingredientes: element.ingredientes,
                    modopreparo: element.modopreparo,
                    usuario: element.usuario,
                    estrela1: element.estrela1,
                    estrela2: element.estrela2,
                    estrela3: element.estrela3,
                    estrela4: element.estrela4,
                    estrela5: element.estrela5,
                    nota: element.nota,
                };
                if (post.tipo == 'saladas') {
                    this.posts.push(post);
                }
            }
            console.log('this.posts = ', this.posts);
        });
    }
    postDetails(post) {
        this.navCtrl.navigateForward(['postdetails', { data: JSON.stringify(post) }]);
    }
    addArticle() {
        this.navCtrl.navigateForward('add');
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
};
SaladasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
SaladasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-saladas',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_saladas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_saladas_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SaladasPage);



/***/ }),

/***/ 6335:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/saladas/saladas.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t  </ion-buttons>\r\n\t  <ion-title>Saladas</ion-title>\r\n\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\t<div id=\"todos\">\r\n\t<div class=\"teste\" *ngFor=\"let post of posts\">\r\n\t\t<ion-card class=\"cards\" *ngIf=\"(post.tipo == 'saladas')\" (click)=\"postDetails(post)\">\r\n\t\t  <ion-card-header>\r\n\t\t\t  <img src=\"{{post.photo}}\"  class=\"img\"/>\r\n\t\t\t<ion-card-title class=\"tituloreceitas\">{{post.titulo}}</ion-card-title>\r\n\t\t\t<ion-card-subtitle>Por: {{post.usuario}}</ion-card-subtitle>\r\n\t\t\t<ion-row><ion-icon name=\"star\"></ion-icon><ion-card-subtitle class=\"fontenota\">{{post.nota}}</ion-card-subtitle></ion-row>\r\n\t\t</ion-card-header>\r\n\t\t</ion-card>\r\n\t</div>\r\n\t</div>\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ 5893:
/*!*************************************************!*\
  !*** ./src/app/pages/saladas/saladas.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.ios #todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ios .cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.teste {\n  width: 330px;\n  margin: auto;\n}\n\n.ios .teste {\n  width: 330px;\n  margin: auto;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.ios .tituloreceitas {\n  color: black;\n  font-family: Calibri;\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.ios .fonteusuario {\n  font-family: Roboto, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  text-transform: none;\n  margin-top: 7px;\n}\n\n.titulo {\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n\nion-title {\n  text-align: center;\n  margin-left: -50px;\n}\n\nion-icon {\n  color: #ebdb00;\n}\n\n.fontenota {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFkYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVDO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBRUEsZUFBQTtBQURGOztBQU9FO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU9FO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpGOztBQVNFO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0U7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFTRTtFQUNBLGVBQUE7QUFORjs7QUFRRTtFQUNFLG1CQUFBO0FBTEo7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBUUU7RUFDRSxjQUFBO0FBTEo7O0FBT0U7RUFDRSxnQkFBQTtBQUpKIiwiZmlsZSI6InNhbGFkYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG9ze1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlvcyAjdG9kb3N7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG5pb24tY29udGVudHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiNsb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gIH1cclxuICAvL0NPTkZJR1VSQcOHw4NPIERPIENBUkRcclxuICAuY2FyZHN7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5pb3MgLmNhcmRze1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC50ZXN0ZXtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIC5pb3MgLnRlc3Rle1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL0ZPTlRFU1xyXG4gIC50aXR1bG9yZWNlaXRhc3tcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICB9XHJcblxyXG4gLmlvcyAudGl0dWxvcmVjZWl0YXN7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZm9udGVpbmdyZWRpZW50ZXN7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmlvcyAuZm9udGV1c3Vhcmlve1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG97XHJcbiBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFxyXG4gIC8vSU1BR0VOU1xyXG4gIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAuaW9zIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgXHJcbiAgXHJcbiAgLmljb25laW5ncmVkaWVudGVze1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogODVweDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25lcHJlcGFyb3tcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbWQtcmVzdGF1cmFudHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC0taW9uLWNhcmQtY29udGVudHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIGNvbG9yOnJnYigyMzUsIDIxOSwgMCk7XHJcbiAgfVxyXG4gIC5mb250ZW5vdGF7XHJcbiAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_saladas_saladas_module_ts.js.map