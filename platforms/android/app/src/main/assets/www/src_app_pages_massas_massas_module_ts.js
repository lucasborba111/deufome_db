"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_massas_massas_module_ts"],{

/***/ 1041:
/*!*******************************************************!*\
  !*** ./src/app/pages/massas/massas-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPageRoutingModule": () => (/* binding */ MassasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPageModule": () => (/* binding */ MassasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassasPage": () => (/* binding */ MassasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_massas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./massas.page.html */ 1277);
/* harmony import */ var _massas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./massas.page.scss */ 9084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 4357);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 7199);







let MassasPage = class MassasPage {
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
                if (post.tipo == 'massas') {
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
MassasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
MassasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-massas',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_massas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_massas_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MassasPage);



/***/ }),

/***/ 1277:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/massas/massas.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t  </ion-buttons>\r\n\t  <ion-title>Massas</ion-title>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\t<div id=\"todos\">\r\n\t<div class=\"teste\" *ngFor=\"let post of posts\">\r\n\t\t<ion-card class=\"cards\" *ngIf=\"(post.tipo == 'massas')\" (click)=\"postDetails(post)\">\r\n\t\t  <ion-card-header>\r\n\t\t\t  <img src=\"{{post.photo}}\"  class=\"img\"/>\r\n\t\t\t<ion-card-title class=\"tituloreceitas\">{{post.titulo}}</ion-card-title>\r\n\t\t\t<ion-card-subtitle>Por: {{post.usuario}}</ion-card-subtitle>\r\n\t\t\t<ion-row><ion-icon name=\"star\"></ion-icon><ion-card-subtitle class=\"fontenota\">{{post.nota}}</ion-card-subtitle></ion-row>\r\n\r\n\t\t  </ion-card-header>\r\n\t\t</ion-card>\r\n\t</div>\r\n\t</div>\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ 9084:
/*!***********************************************!*\
  !*** ./src/app/pages/massas/massas.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.ios #todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ios .cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.teste {\n  width: 330px;\n  margin: auto;\n}\n\n.ios .teste {\n  width: 330px;\n  margin: auto;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.ios .tituloreceitas {\n  color: black;\n  font-family: Calibri;\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.ios .fonteusuario {\n  font-family: Roboto, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  text-transform: none;\n  margin-top: 7px;\n}\n\n.titulo {\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n\nion-title {\n  text-align: center;\n  margin-left: -50px;\n}\n\nion-icon {\n  color: #ebdb00;\n}\n\n.fontenota {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Nhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUM7RUFDRyxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHRTtFQUNFLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFFQSxlQUFBO0FBREY7O0FBT0U7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0U7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSkY7O0FBU0U7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFTRTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNFO0VBQ0EsZUFBQTtBQU5GOztBQVFFO0VBQ0UsbUJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFPRTtFQUNFLGNBQUE7QUFKSjs7QUFNRTtFQUNFLGdCQUFBO0FBSEoiLCJmaWxlIjoibWFzc2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b2Rvc3tcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pb3MgI3RvZG9ze1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxuICB3aWR0aDoxMDAlXHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4jbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgLy9DT05GSUdVUkHDh8ODTyBETyBDQVJEXHJcbiAgLmNhcmRze1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW9zIC5jYXJkc3tcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudGVzdGV7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaW9zIC50ZXN0ZXtcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy9GT05URVNcclxuICAudGl0dWxvcmVjZWl0YXN7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgfVxyXG5cclxuIC5pb3MgLnRpdHVsb3JlY2VpdGFze1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLmZvbnRlaW5ncmVkaWVudGVze1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5pb3MgLmZvbnRldXN1YXJpb3tcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIH1cclxuICBcclxuICAudGl0dWxve1xyXG4gXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBcclxuICAvL0lNQUdFTlNcclxuICAuaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLmlvcyAuaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFxyXG4gIFxyXG4gIC5pY29uZWluZ3JlZGllbnRlc3tcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uZXByZXBhcm97XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLW1kLXJlc3RhdXJhbnR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAtLWlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIGNvbG9yOnJnYigyMzUsIDIxOSwgMCk7XHJcbiAgfVxyXG4gIC5mb250ZW5vdGF7XHJcbiAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_massas_massas_module_ts.js.map