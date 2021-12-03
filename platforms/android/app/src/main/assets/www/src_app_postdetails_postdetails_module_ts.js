"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_postdetails_postdetails_module_ts"],{

/***/ 4355:
/*!***********************************************************!*\
  !*** ./src/app/postdetails/postdetails-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageRoutingModule": () => (/* binding */ PostdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPageModule": () => (/* binding */ PostdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostdetailsPage": () => (/* binding */ PostdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./postdetails.page.html */ 9094);
/* harmony import */ var _postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postdetails.page.scss */ 3349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 7199);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);








let PostdetailsPage = class PostdetailsPage {
    constructor(activatedRoute, auth, toastr) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastr = toastr;
        this.post = {
            id: '',
            tipo: '',
            usuario: '',
            photo: '',
            titulo: '',
            ingredientes: '',
            modopreparo: '',
            nota: 0,
            estrela1: 0,
            estrela2: 0,
            estrela3: 0,
            estrela4: 0,
            estrela5: 0,
        };
        this.numStars = 5;
        this.value = 1;
        this.teste = 0;
        this.ionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.stars = [];
        let data = this.activatedRoute.snapshot.params['data'];
        console.log('reached = ', JSON.parse(data));
        data = JSON.parse(data);
        this.post.id = data.id;
        this.post.tipo = data.tipo,
            this.post.usuario = data.usuario;
        this.post.photo = data.photo;
        this.post.titulo = data.titulo;
        this.post.ingredientes = data.ingredientes;
        this.post.modopreparo = data.modopreparo;
        this.post.estrela1 = data.estrela1;
        this.post.estrela2 = data.estrela2;
        this.post.estrela3 = data.estrela3;
        this.post.estrela4 = data.estrela4;
        this.post.estrela5 = data.estrela5;
        this.post.nota = data.nota;
    }
    deletePost() {
        this.toast('Solicitação de remoção enviada!, Excluiremos em breve', 'warning');
    }
    toast(message, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                color: status,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.calc();
    }
    calc() {
        this.stars = [];
        let tmp = this.value;
        for (let i = 0; i < this.numStars; i++, tmp--) {
            if (tmp >= 1) {
                this.stars.push("star");
            }
            else if (tmp > 0 && tmp < 1) {
                this.stars.push("star-half");
            }
            else {
                this.stars.push("star-outline");
            }
        }
        let estrela = this.value;
        let postRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.database().ref('posts/' + this.post.id);
        if (estrela == 1) {
            postRef.child('estrela1').set(this.post.estrela1++);
            this.value = 0;
        }
        if (estrela == 2) {
            postRef.child('estrela2').set(this.post.estrela2++);
            this.value = 0;
        }
        if (estrela == 3) {
            postRef.child('estrela3').set(this.post.estrela3++);
            this.value = 0;
        }
        if (estrela == 4) {
            postRef.child('estrela4').set(this.post.estrela4++);
            this.value = 0;
        }
        if (estrela == 5) {
            postRef.child('estrela5').set(this.post.estrela5++);
            this.value = 0;
        }
        console.log(this.value);
        let porcentagem = (5 * this.post.estrela5 + 4 * this.post.estrela4
            + 3 * this.post.estrela3 + 2 * this.post.estrela2 + this.post.estrela1 * 1) / (this.post.estrela5 + this.post.estrela4 + this.post.estrela3 + this.post.estrela2 + this.post.estrela1);
        this.teste = parseFloat(porcentagem.toFixed(2));
        postRef.child('nota').set(porcentagem.toFixed(2));
    }
    starClicked(index) {
        this.value = index + 1;
        this.ionClick.emit(this.value);
        this.calc();
        //setar o valor de estrelas e usuari
    }
    log(value) {
        console.log(value);
    }
};
PostdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
PostdetailsPage.propDecorators = {
    numStars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    teste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    ionClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
PostdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-postdetails',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_postdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_postdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostdetailsPage);



/***/ }),

/***/ 9094:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/postdetails/postdetails.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"{{post.tipo}}\"></ion-back-button>\r\n      <ion-title>{{post.titulo}}</ion-title>\r\n      </ion-buttons>\r\n      <ion-icon name=\"trash-outline\"(click)=\"deletePost()\"></ion-icon>\r\n  </ion-toolbar>\r\n \r\n  \r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"conteudo\">\r\n    <img src=\"{{ post.photo }}\" class=\"img\">\r\n    <span class=\"titulo\">{{ post.titulo }}</span>\r\n    <span class=\"usuario\">Por: {{post.usuario}}</span>\r\n    <span class=\"nota\"> Avaliação: {{teste}}</span>\r\n    <img src=\"../assets/iconeingredientes.png\" class=\"imgingredientes\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.ingredientes }}</p>\r\n    <img src=\"../assets/iconepreparo.png\" class=\"imgpreparo\">\r\n    <p><i class=\"icon ion-md-restaurant\"></i>{{ post.modopreparo }}</p>\r\n  </div>\r\n  <p class=\"avaliar\" style=\"text-align: center;\">Avaliar receita!</p>\r\n  <p style=\"text-align: center;\">{{post.rating}}</p>\r\n  <p style=\"text-align: center;\">{{post.usernumb}}</p>\r\n  <ion-grid class=\"ion-grid-container\">\r\n      <div class=\"rating-position\" *ngFor=\"let star of stars; let i = index;\" tappable (click)=\"starClicked(i)\">\r\n          <ion-icon [name]=\"star\"></ion-icon>\r\n      </div>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 3349:
/*!***************************************************!*\
  !*** ./src/app/postdetails/postdetails.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  font-size: 25px;\n  display: flex;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.conteudo {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n}\n\n.titulo {\n  font-size: 24px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.usuario {\n  font-size: 15px;\n  color: gray;\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.imgingredientes {\n  width: 192px;\n  height: 39px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  margin-top: 25px;\n}\n\n.imgpreparo {\n  width: 215px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\np {\n  color: #575757;\n  font-size: 17px;\n  font-family: Louis George Cafe;\n  margin-left: 5px;\n}\n\ni {\n  color: red;\n  padding-right: 10px;\n  margin-left: 5px;\n}\n\n.ion-grid-container ion-icon {\n  font-size: \"larger\";\n  color: yellow;\n}\n\n.ion-grid-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  background-color: #ad0002;\n}\n\n.rating-position {\n  display: flex;\n}\n\n.nota {\n  color: #575757;\n  font-family: BebasNeue-Regular;\n  position: relative;\n  margin-left: 10px;\n  margin-top: 8px;\n}\n\n.avaliar {\n  font-family: BebasNeue-Regular;\n  font-size: 17px;\n  color: #575757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQU5BO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVNGIiwiZmlsZSI6InBvc3RkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4jbG9nbyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxufVxyXG4uY29udGV1ZG97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5pbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG59XHJcbi50aXR1bG97XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnVzdWFyaW97XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uaW1naW5ncmVkaWVudGVze1xyXG4gIHdpZHRoOiAxOTJweDtcclxuICBoZWlnaHQ6IDM5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5pbWdwcmVwYXJve1xyXG4gIHdpZHRoOiAyMTVweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnB7XHJcbiAgY29sb3I6IHJnYig4NywgODcsIDg3KTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6IExvdWlzIEdlb3JnZSBDYWZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbml7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmlvbi1ncmlkLWNvbnRhaW5lciBpb24taWNvbntcclxuICBmb250LXNpemU6ICdsYXJnZXInO1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLmlvbi1ncmlkLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkMDAwMjtcclxufVxyXG4ucmF0aW5nLXBvc2l0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ub3Rhe1xyXG4gIGNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7XHJcbiAgZm9udC1mYW1pbHk6IEJlYmFzTmV1ZS1SZWd1bGFyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5hdmFsaWFye1xyXG4gIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6IHJnYig4NywgODcsIDg3KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_postdetails_postdetails_module_ts.js.map