"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 3420);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 5556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 6363);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 3789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);








let RegisterPage = class RegisterPage {
    constructor(afs, afauth, router, loadingCtrl, toastr, navCtrl) {
        this.afs = afs;
        this.afauth = afauth;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastr = toastr;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    GoToSignIn() {
        this.navCtrl.navigateForward('login');
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.name && this.email && this.password) {
                const loading = yield this.loadingCtrl.create({
                    message: 'Processando..',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.afauth.createUserWithEmailAndPassword(this.email, this.password)
                    .then((data) => {
                    data.user.sendEmailVerification();
                    this.afs.collection('user').doc(data.user.uid).set({
                        'userId': data.user.uid,
                        'userName': this.name,
                        'userEmail': this.email,
                        'createdAt': Date.now()
                    })
                        .then(() => {
                        loading.dismiss();
                        this.toast('Registro Completo! Por favor verifique seu email', 'success');
                        this.router.navigate(['/login']);
                    })
                        .catch(error => {
                        loading.dismiss();
                        this.toast(error.message, 'danger');
                    });
                });
                if (this.email.search('@') == -1) {
                    loading.dismiss();
                    this.toast('Email Invalido, Insira um Email válido!', 'warning');
                }
                else if (this.password.length < 6) {
                    loading.dismiss();
                    this.toast('Insira uma senha de pelo menos 6 digitos', 'warning');
                }
            }
            else {
                this.toast('Por favor preencha todas as informações', 'warning');
            }
        });
    } // end register
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                color: status,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    } //end toast
};
RegisterPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 3420:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/register/register.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <div class=\"logon\">\r\n      <ion-card>\r\n        <img class=\"logo\" src=\"./assets/logo.png\">\r\n        \r\n      <ion-card-content>\r\n        <ion-input placeholder=\"Nome\" [(ngModel)]=\"name\" type=\"text\" name=\"name\" ></ion-input>   \r\n          <ion-input placeholder=\"Email\" [(ngModel)]=\"email\" type=\"text\" name=\"email\" ></ion-input>   \r\n          <ion-input placeholder=\"Senha\" [(ngModel)]=\"password\" type=\"password\" name=\"password\"></ion-input>    \r\n           <ion-button  color=\"body\" type=\"submit\" (click)=\"register()\" >Registrar</ion-button>\r\n           <span>Já possui conta?</span>\r\n           <ion-button class=\"botaologin\" (click)=\"GoToSignIn()\" color=\"body\" type=\"button\">Entrar</ion-button>\r\n          \r\n        </ion-card-content>\r\n  </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 5556:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".ion-invalid.ion-touched ion-label {\n  color: var(--ion-color-danger);\n}\n\n/** For form invalid field for Angular*/\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\nion-content {\n  --background: #ad0002;\n}\n\nion-card {\n  width: 300px;\n}\n\nion-input {\n  background-color: #e7e7e7;\n  border-radius: 10px;\n  padding-top: 10px;\n  height: 50px;\n  color: black;\n  margin-top: 10px;\n}\n\n.logon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.logo {\n  width: 140px;\n  margin-left: 75px;\n  padding-top: 20px;\n}\n\nion-button {\n  background-color: #ad0002;\n  border-radius: 5px;\n  margin-top: 20px;\n  display: flex;\n  font-family: monospace;\n}\n\n.botaologin {\n  background-color: #000000;\n  border-radius: 5px;\n  display: flex;\n}\n\nspan {\n  position: relative;\n  bottom: -15px;\n  left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUUsdUNBQUE7O0FBQ0E7RUFDRSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFLRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWludmFsaWQuaW9uLXRvdWNoZWQgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqIEZvciBmb3JtIGludmFsaWQgZmllbGQgZm9yIEFuZ3VsYXIqL1xyXG4gIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcblxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYWQwMDAyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmxvZ29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZDAwMDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5ib3Rhb2xvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogLTE1cHg7XHJcbiAgbGVmdDogODBweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map