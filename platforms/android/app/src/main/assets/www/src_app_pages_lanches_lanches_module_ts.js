"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lanches_lanches_module_ts"],{

/***/ 7397:
/*!*********************************************************!*\
  !*** ./src/app/pages/lanches/lanches-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPageRoutingModule": () => (/* binding */ LanchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _lanches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lanches.page */ 7734);




const routes = [
    {
        path: '',
        component: _lanches_page__WEBPACK_IMPORTED_MODULE_0__.LanchesPage
    }
];
let LanchesPageRoutingModule = class LanchesPageRoutingModule {
};
LanchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LanchesPageRoutingModule);



/***/ }),

/***/ 2171:
/*!*************************************************!*\
  !*** ./src/app/pages/lanches/lanches.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPageModule": () => (/* binding */ LanchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _lanches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lanches-routing.module */ 7397);
/* harmony import */ var _lanches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lanches.page */ 7734);







let LanchesPageModule = class LanchesPageModule {
};
LanchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lanches_routing_module__WEBPACK_IMPORTED_MODULE_0__.LanchesPageRoutingModule
        ],
        declarations: [_lanches_page__WEBPACK_IMPORTED_MODULE_1__.LanchesPage]
    })
], LanchesPageModule);



/***/ }),

/***/ 7734:
/*!***********************************************!*\
  !*** ./src/app/pages/lanches/lanches.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPage": () => (/* binding */ LanchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lanches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./lanches.page.html */ 9895);
/* harmony import */ var _lanches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lanches.page.scss */ 3173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 4357);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 7199);







let LanchesPage = class LanchesPage {
    constructor(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.posts = [];
        this.hidden = false;
        this.hidden2 = false;
        this.hidden3 = false;
        this.hidden4 = false;
    }
    deletePost(post) {
        console.log('post = ', post);
        firebase_app__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('posts/' + post.id).remove().then(res => {
            console.log('removed =', res);
        });
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
                };
                if (post.tipo == 'lanches') {
                    this.posts.push(post);
                }
            }
            console.log('this.posts = ', this.posts);
        });
    }
    postDetails(post) {
        this.navCtrl.navigateForward(['postdetails', { data: JSON.stringify(post) }]);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
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
LanchesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
LanchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-lanches',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_lanches_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lanches_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LanchesPage);



/***/ }),

/***/ 9895:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/lanches/lanches.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t<ion-title>Lanches</ion-title>\r\n\t  </ion-buttons>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n\t<div id=\"todos\">\r\n\t<div class=\"teste\" *ngFor=\"let post of posts\" >\r\n\t  <ion-card class=\"cards\" (click)=\"postDetails(post)\" *ngIf=\"(post.tipo == 'lanches')\">\r\n\t\t<ion-card-header>\r\n\t\t\t<img src=\"{{post.photo}}\"  class=\"img\"/>\r\n\t\t  <ion-card-title class=\"tituloreceitas\">{{post.titulo}}</ion-card-title>\r\n\t\t  <ion-card-subtitle class=\"fonteusuario\">Por: {{post.usuario}}</ion-card-subtitle>\r\n\t\t</ion-card-header>\r\n\t  </ion-card>\r\n\t</div>\r\n\r\n\t  <ion-card class=\"cards\" (click)=\"toggleHidden()\">\r\n\t\t<ion-card-header>\r\n\t\t  <img src=\"assets/lanche1.jpg\" class=\"img\" />\r\n\t\t  <ion-card-title class=\"tituloreceitas\">Sanduíche natural de Frango</ion-card-title>\r\n\t\t  <ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t  <br />\r\n\t\t</ion-card-header>\r\n\t\t<ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden\">\r\n\t\t  <img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 200g de frango cozido desfiado</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 caixa de creme de leite</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 3 colheres de sopa de maionese</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 lata de milho verde</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 10 azeitonas cortadas em pedacinhos</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 pacote de pão integral quadrado</i>\r\n\t\t  </p>\r\n\t\t  <br />\r\n\t\t  <img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Misture todos os ingredientes (menos o pão) no liquidificador e bata por uns 5 minutos. Depois é só colocar o patê nos pães e enrolar em papel filme e guardar na geladeira.</i>\r\n\t\t  </p>\r\n\t\t</ion-card-content>\r\n\t  </ion-card>\r\n\t  <ion-card class=\"cards\" (click)=\"toggleHidden2()\">\r\n\t\t<ion-card-header>\r\n\t\t  <img src=\"assets/lanche2.jpg\" class=\"img\" />\r\n\t\t  <ion-card-title class=\"tituloreceitas\">Misto quente de forno</ion-card-title>\r\n\t\t  <ion-card-subtitle class=\"fonteusuario\">Por: Flávia</ion-card-subtitle>\r\n\t\t  <br />\r\n\t\t</ion-card-header>\r\n\t\t<ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden2\">\r\n\t\t  <img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 400 g de presunto magro</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 400 g de queijo</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Extrato de tomate</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 caixinha de creme de leite</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 pacote de pão de sanduíche</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Orégano</i>\r\n\t\t  </p>\r\n\t\t  <br />\r\n\t\t  <img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Em uma forma colocar uma camada de pão de forma, cuidar para que toda a forma fique coberta, passar sobre esta camada o extrato de tomate. Feito isso coloque uma camada de presunto e uma de queijo, cubra com outra camada de pão. Passe o creme de leite uniformemente, e logo após coloque a 2ª camada de presunto, deixe o queijo por último. Por cima do queijo despeje o orégano, que dá um gostinho todo especial. Leve ao forno até derreter o queijo. </i>\r\n\t\t  </p>\r\n\t\t</ion-card-content>\r\n\t  </ion-card>\r\n\t  <ion-card class=\"cards\" (click)=\"toggleHidden3()\">\r\n\t\t<ion-card-header>\r\n\t\t  <img src=\"assets/lanche3.jpg\" class=\"img\" />\r\n\t\t  <ion-card-title class=\"tituloreceitas\">Bauru de forno</ion-card-title>\r\n\t\t  <ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t  <br />\r\n\t\t</ion-card-header>\r\n\t\t<ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden3\">\r\n\t\t  <img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 2 pacotes de pão de forma</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 4 colheres de maionese</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 lata de molho de tomate pronto</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 400 g de presunto</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 450 g de mussarela</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Rodelas de tomate</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Orégano</i>\r\n\t\t  </p>\r\n\t\t  <br />\r\n\t\t  <img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Junte a forma com a maionese. Coloque uma camada do pão de forma. Em cima do pão coloque um pouco de molho de tomate (cubra todo o pão, mais cuidado para não colocar molho demais e não ficar enjoativo e mole). Faça uma camada de presunto e outra de mussarela e coloque rodelas de tomate e o orégano por cima. Coloque mais uma camada de pão de forma com o molho de tomate. E mais uma camada de presunto, mussarela, tomate e orégano. Coloque mais uma camada de mussarela e orégano. Leve ao formo por uns 15 minutos para que a mussarela derreta, cuidado pra não queimar o fundo. </i>\r\n\t\t  </p>\r\n\t\t</ion-card-content>\r\n\t  </ion-card>\r\n\t  <ion-card class=\"cards\" (click)=\"toggleHidden4()\">\r\n\t\t<ion-card-header>\r\n\t\t  <img src=\"assets/lanche4.jpg\" class=\"img\" />\r\n\t\t  <ion-card-title class=\"tituloreceitas\">Bolinho de mandioca recheado de carne moida</ion-card-title>\r\n\t\t  <ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t  <br />\r\n\t\t</ion-card-header>\r\n\t\t<ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden4\">\r\n\t\t  <img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 kg de mandioca</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 ramo de cebolinha verde</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 1 colher de sopa de sal</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 4 copos de farinha de trigo</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 2 copos de leite</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 2 copos de água</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> 500 g de carne moída ou o recheio de sua preferência</i>\r\n\t\t  </p>\r\n\t\t  <br />\r\n\t\t  <img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t  <br />\r\n\t\t  <br />\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Cozinhe a mandioca na pressão com 1 colher de sopa de sal por 45 minutos.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Escorra bem e amasse com um garfo até virar um purê, jogue a cebolinha picadinha e misture a massa, reserve.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Refogue a carne moída como de costume, deixe ela bem sequinha, sem água.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Em uma panela ferva o leite a água, tempere a gosto, deixe ferver e jogue a farinha toda de uma vez.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Amasse até ficar homogênea.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Jogue essa massa em uma bancada e deixe esfriar um pouco, sove bem.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Misture a massa da mandioca reservada, passe óleo na mão e monte os bolinhos recheando.</i>\r\n\t\t  </p>\r\n\t\t  <p>\r\n\t\t\t<i class=\"icon ion-md-restaurant\"> Fritar em óleo bem quente.</i>\r\n\t\t  </p>\r\n\t\t</ion-card-content>\r\n\t  </ion-card>\r\n\t</div>\r\n  </ion-content>");

/***/ }),

/***/ 3173:
/*!*************************************************!*\
  !*** ./src/app/pages/lanches/lanches.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.ios #todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ios .cards {\n  width: 330px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.teste {\n  width: 330px;\n  margin: auto;\n}\n\n.ios .teste {\n  width: 330px;\n  margin: auto;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.ios .tituloreceitas {\n  color: black;\n  font-family: Calibri;\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.ios .fonteusuario {\n  font-family: Roboto, Helvetica Neue, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  text-transform: none;\n  margin-top: 7px;\n}\n\n.titulo {\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVDO0VBQ0csWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBRUEsZUFBQTtBQURGOztBQU9FO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU9FO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpGOztBQVNFO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0U7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFORjs7QUFTRTtFQUNBLGVBQUE7QUFORjs7QUFRRTtFQUNFLG1CQUFBO0FBTEoiLCJmaWxlIjoibGFuY2hlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9kb3N7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW9zICN0b2Rvc3tcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgd2lkdGg6MTAwJVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuI2xvZ28ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIC8vQ09ORklHVVJBw4fDg08gRE8gQ0FSRFxyXG4gIC5jYXJkc3tcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmlvcyAuY2FyZHN7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLnRlc3Rle1xyXG4gICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmlvcyAudGVzdGV7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vRk9OVEVTXHJcbiAgLnRpdHVsb3JlY2VpdGFze1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIH1cclxuXHJcbiAuaW9zIC50aXR1bG9yZWNlaXRhc3tcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb250ZWluZ3JlZGllbnRlc3tcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcblxyXG5cclxuICAuaW9zIC5mb250ZXVzdWFyaW97XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsb3tcclxuIFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgXHJcbiAgLy9JTUFHRU5TXHJcbiAgLmltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICAgXHJcbiAgfVxyXG4gIC5pb3MgLmltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBcclxuICBcclxuICAuaWNvbmVpbmdyZWRpZW50ZXN7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbmVwcmVwYXJve1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi1tZC1yZXN0YXVyYW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLS1pb24tY2FyZC1jb250ZW50e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lanches_lanches_module_ts.js.map