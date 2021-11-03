(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lanches_lanches_module_ts"],{

/***/ 7397:
/*!*********************************************************!*\
  !*** ./src/app/pages/lanches/lanches-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPageRoutingModule": () => (/* binding */ LanchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPageModule": () => (/* binding */ LanchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanchesPage": () => (/* binding */ LanchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lanches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lanches.page.html */ 1717);
/* harmony import */ var _lanches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lanches.page.scss */ 8181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 1628);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 2329);







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
                    photo: element.photo,
                    title: element.title,
                    description: element.description,
                };
                this.posts.push(post);
            }
            console.log('this.posts = ', this.posts);
        });
        //this.posts = [];
        //this.storage.get('postsArray').then(res =>{
        //console.log('postsArray', res);
        //this.posts = res;
        //})
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
        template: _raw_loader_lanches_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lanches_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LanchesPage);



/***/ }),

/***/ 8181:
/*!*************************************************!*\
  !*** ./src/app/pages/lanches/lanches.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  width: 90%;\n  margin: 10% auto;\n}\n\n.item {\n  width: 100%;\n  border-radius: 10px;\n  background: linear-gradient(to top right, #d3d3d3, #fff);\n  margin-bottom: 5%;\n}\n\n.topDiv {\n  width: 100%;\n  border-radius: 10px;\n  height: 200px;\n}\n\n.topDiv img {\n  width: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n  height: 200px;\n}\n\n.bottomDiv {\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n  font-weight: bold;\n  color: aqua;\n}\n\nion-icon {\n  font-size: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0E7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJsYW5jaGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxufVxyXG5cclxuLml0ZW17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjZDNkM2QzLCAjZmZmKTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnRvcERpdntcclxud2lkdGg6IDEwMCU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi50b3BEaXYgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmJvdHRvbURpdntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYXF1YTtcclxuICBcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 1717:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lanches/lanches.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t  </ion-buttons>\r\n\t  <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n<div class=\"wrapper\">\r\n<div class=\"item\" (click)=\"postDetails(post)\" *ngFor=\"let post of posts\" >\r\n\t<div class=\"topDiv\">\r\n\t\t<img src=\"{{post.photo}}\"/>\r\n\t</div>\r\n\t<div>\r\n\t\t<ion-icon name=\"trash\" (click)=\"deletePost(post)\"></ion-icon>\r\n\t</div>\r\n\t<div class=\"bottomDiv\">{{post.title}}</div>\r\n</div>\r\n</div>\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t<div id=\"todos\">\r\n\t\t<ion-card id=\"cards\" (click)=\"toggleHidden()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/lanche1.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">Sanduíche natural de Frango</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 200g de frango cozido desfiado</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 caixa de creme de leite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 colheres de sopa de maionese</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 lata de milho verde</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 10 azeitonas cortadas em pedacinhos</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pacote de pão integral quadrado</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Misture todos os ingredientes (menos o pão) no liquidificador e bata por uns 5 minutos. Depois é só colocar o patê nos pães e enrolar em papel filme e guardar na geladeira.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden2()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/lanche2.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">Misto quente de forno</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: Flávia</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden2\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 400 g de presunto magro</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 400 g de queijo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Extrato de tomate</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 caixinha de creme de leite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 pacote de pão de sanduíche</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Orégano</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p>\r\n\t\t  <i class=\"icon ion-md-restaurant\">\r\n\t\t\tEm uma forma colocar uma camada de pão de forma, cuidar para que toda a forma fique coberta, passar sobre esta camada o extrato de tomate. Feito isso coloque uma camada de presunto e uma de queijo, cubra com outra camada de pão.\r\n\t\t\tPasse o creme de leite uniformemente, e logo após coloque a 2ª camada de presunto, deixe o queijo por último. Por cima do queijo despeje o orégano, que dá um gostinho todo especial. Leve ao forno até derreter o queijo.\r\n\t\t  </i>\r\n\t\t</p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden3()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/lanche3.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">Bauru de forno</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden3\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 pacotes de pão de forma</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 4 colheres de maionese</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 lata de molho de tomate pronto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 400 g de presunto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 450 g de mussarela</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Rodelas de tomate</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Orégano</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p>\r\n\t\t  <i class=\"icon ion-md-restaurant\">\r\n\t\t\tJunte a forma com a maionese. Coloque uma camada do pão de forma. Em cima do pão coloque um pouco de molho de tomate (cubra todo o pão, mais cuidado para não colocar molho demais e não ficar enjoativo e mole). Faça uma camada de\r\n\t\t\tpresunto e outra de mussarela e coloque rodelas de tomate e o orégano por cima. Coloque mais uma camada de pão de forma com o molho de tomate. E mais uma camada de presunto, mussarela, tomate e orégano. Coloque mais uma camada de\r\n\t\t\tmussarela e orégano. Leve ao formo por uns 15 minutos para que a mussarela derreta, cuidado pra não queimar o fundo.\r\n\t\t  </i>\r\n\t\t</p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden4()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"assets/lanche4.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">Bolinho de mandioca recheado de carne moida</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden4\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 kg de mandioca</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 ramo de cebolinha verde</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de sopa de sal</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 4 copos de farinha de trigo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 copos de leite</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 copos de água</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 500 g de carne moída ou o recheio de sua preferência</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cozinhe a mandioca na pressão com 1 colher de sopa de sal por 45 minutos.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Escorra bem e amasse com um garfo até virar um purê, jogue a cebolinha picadinha e misture a massa, reserve.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Refogue a carne moída como de costume, deixe ela bem sequinha, sem água.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em uma panela ferva o leite a água, tempere a gosto, deixe ferver e jogue a farinha toda de uma vez.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Amasse até ficar homogênea.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Jogue essa massa em uma bancada e deixe esfriar um pouco, sove bem.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Misture a massa da mandioca reservada, passe óleo na mão e monte os bolinhos recheando.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Fritar em óleo bem quente.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n</div>\r\n  </ion-content>\r\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lanches_lanches_module_ts.js.map