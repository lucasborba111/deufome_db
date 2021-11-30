"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_veganas_veganas_module_ts"],{

/***/ 8267:
/*!*********************************************************!*\
  !*** ./src/app/pages/veganas/veganas-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeganasPageRoutingModule": () => (/* binding */ VeganasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _veganas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veganas.page */ 4249);




const routes = [
    {
        path: '',
        component: _veganas_page__WEBPACK_IMPORTED_MODULE_0__.VeganasPage
    }
];
let VeganasPageRoutingModule = class VeganasPageRoutingModule {
};
VeganasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VeganasPageRoutingModule);



/***/ }),

/***/ 4800:
/*!*************************************************!*\
  !*** ./src/app/pages/veganas/veganas.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeganasPageModule": () => (/* binding */ VeganasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _veganas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veganas-routing.module */ 8267);
/* harmony import */ var _veganas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veganas.page */ 4249);







let VeganasPageModule = class VeganasPageModule {
};
VeganasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _veganas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VeganasPageRoutingModule
        ],
        declarations: [_veganas_page__WEBPACK_IMPORTED_MODULE_1__.VeganasPage]
    })
], VeganasPageModule);



/***/ }),

/***/ 4249:
/*!***********************************************!*\
  !*** ./src/app/pages/veganas/veganas.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeganasPage": () => (/* binding */ VeganasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_veganas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./veganas.page.html */ 2145);
/* harmony import */ var _veganas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veganas.page.scss */ 4633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 4357);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ 7199);







let VeganasPage = class VeganasPage {
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
                if (post.tipo == 'veganas') {
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
VeganasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
VeganasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-veganas',
        template: _C_Users_Administrator_Desktop_deufome_db_node_modules_ngtools_webpack_src_loaders_direct_resource_js_veganas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_veganas_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VeganasPage);



/***/ }),

/***/ 2145:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/veganas/veganas.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<link href=\"https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css\" rel=\"stylesheet\" />\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t<ion-title>Veganas</ion-title>\r\n\t  </ion-buttons>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\t<div id=\"todos\">\r\n\t\t<div *ngFor=\"let post of posts\">\r\n\t\t<ion-card class=\"cards\" *ngIf=\"(post.tipo == 'veganas')\" (click)=\"postDetails(post)\">\r\n\t\t  <ion-card-header>\r\n\t\t\t  <img src=\"{{post.photo}}\"  class=\"img\"/>\r\n\t\t\t<ion-card-title class=\"tituloreceitas\">{{post.titulo}}</ion-card-title>\r\n\t\t\t<ion-card-subtitle>Por: {{post.usuario}}</ion-card-subtitle>\r\n\t\t\t<br>\r\n\t\t  </ion-card-header>\r\n\t\t</ion-card>\r\n\t</div>\r\n\r\n\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"/assets/vegana1.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">PÃO DE QUEIJO VEGANO</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de polvilho doce</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara de polvilho azedo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/3 xícara de óleo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de batata salsa amassada (tipo purê)</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara de água quente</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> sal a gosto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> temperos a gosto (salsinha desidratada, ervas finas, alho desidratado, gergelim, linhaça)</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cozinhar em água fervente, a batata salsa já descascada.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Reservar a água utilizada após o fervimento.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Amassar as batatas, até a consistência de um purê.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em uma travessa, adicionar o polvilho azedo, o polvilho doce, o óleo, o sal e a água quente do fervimento das batatas.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Misturar bem, podendo utilizar as próprias mãos, até virar uma massa uniforme.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Acrescentar os temperos que preferir.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Pode separar a massa em pedaços e acrescentar temperos diferentes para cada pedaço.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Fazer bolinhas, de preferência pequenas, e coloque em uma assadeira antiaderente com espaço entre uma bolinha e outra, pois quase duplica de tamanho.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em forno preaquecido a 180°C, colocar seus pães de queijo veganos por aproximadamente 20 minutos, ou quanto achar necessário.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden2()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"/assets/vegana2.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">HAMBÚRGUER DE FEIJÃO-FRADINHO VEGANO</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: Lucas Santos</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden2\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de feijão-fradinho cozido</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/4 xícara de água quente</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher rasa de páprica picante</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> sal a gosto</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres de óleo de soja ou azeite de oliva</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 cebola</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 3 dentes de alho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 6 colheres de farinha de milho</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> farinha de rosca para untar</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Amasse bem o feijão-fradinho cozido, juntando a água para ajudar a amassar.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Caso o feijão esteja recém cozido, use a água conforme necessidade, pois ele já estará úmido.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Tempere com sal a seu gosto e adicione a páprica, misture bem</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Depois coloque o óleo de soja (a massa ficara mais homogênea).</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Corte a cebola e o alho em pedaços bem pequenos e adicione à massa (se preferir pode passar a cebola na frigideira).</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Vá colocando as colheres de farinha de milho, de uma a uma e vá misturando com as mãos mesmo.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> A massa fica um pouco úmida mesmo, então, se não houver necessidade, não utilize todas as 6 colheres de farinha de milho.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Molde-os com as mãos e unte com a farinha de rosca.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Para fritar, deixe de 3 a 4 minutos de cada lado e está pronto.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Tome cuidado com o manuseio na hora de fritar.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Você pode fazer e congelar também.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Depois é só ir direto para a frigideira.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden3()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"/assets/vegana3.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">TORTA VEGANA AGRIDOCE DE LIQUIDIFICADOR</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden3\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara de chá de óleo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 e 1/2 xícara de chá de água</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de sobremesa de sal</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de sopa de orégano</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 cebola</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 xícaras de chá de farinha de trigo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de chá de açúcar</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 colher de sopa cheia de fermento em pó</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Junte com azeite uma assadeira retangular.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque metade da massa.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Coloque o recheio bem acomodado e espalhado por cima.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cubra com a outra metade da massa.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Se quiser, decore com azeitonas pretas.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Asse em forno médio preaquecido por cerca de 40 minutos ou até que doure.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t<ion-card id=\"cards\" (click)=\"toggleHidden4()\">\r\n\t  <ion-card-header>\r\n\t\t<img src=\"/assets/vegana4.jpg\" class=\"img\" />\r\n\t\t<ion-card-title class=\"tituloreceitas\">ABÓBORA RECHEADA VEGANA</ion-card-title>\r\n\t\t<ion-card-subtitle class=\"fonteusuario\">Por: André Romão</ion-card-subtitle>\r\n\t\t<br />\r\n\t  </ion-card-header>\r\n\t  <ion-card-content class=\"fonteingredientes\" *ngIf=\"hidden4\">\r\n\t\t<img class=\"iconeingredientes\" src=\"assets/iconeingredientes.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 abóbora</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 dentes de alho médios picados</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 cebola média picada</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara (chá) de palmitos picados</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1 xícara (chá) de tomates maduros picados</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 xícara (chá) de azeitonas picadas</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 xícara (chá) de água</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 2 colheres (sopa) de aveia em flocos finos</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/3 xícara (chá) de leite de coco</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> 1/2 xícara (chá) de cheiro-verde picado</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> sal</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> óleo</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> azeite a gosto</i></p>\r\n\t\t<br />\r\n\t\t<img class=\"iconepreparo\" src=\"assets/iconepreparo.png\" />\r\n\t\t<br />\r\n\t\t<br />\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire a tampa de sua abóbora e reserve.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire também todas as sementes com o auxílio de uma colher, salpique sal e jogue um fio de azeite e passe por todo o interior da abóbora.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Cubra ela com papel-alumínio, tampe, disponha em uma assadeira e asse em forno médio preaquecido por 40 minutos ou até espetar o garfo e a abóbora estiver macia.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Enquanto a abóbora assa, prepare o recheio.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em uma panela em fogo médio, coloque um fio de óleo e adicione os dentes de alho picados, refogando até dar uma leve douradinha.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Acrescente a cebola e refogue novamente.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Adicione os palmitos picados, os tomates e as azeitonas e refogue até o tomate dar uma leve derretida. Tempere com sal a gosto e refogue mais um pouco.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Em 1/2 xícara de água, acrescente a aveia em flocos finos, misture e junte com os ingredientes da panela.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Adicione também o leite de coco.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Assim que começar a borbulhar, acrescente o cheiro-verde picado e desligue.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Retire a abóbora do forno e o papel-alumínio que está sobre ela.</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Recheie o interior com a mistura da panela, tampe e deixe assar por mais 15 minutos..</i></p>\r\n\t\t<p><i class=\"icon ion-md-restaurant\"> Está pronto, é divino, bom demais.</i></p>\r\n\t  </ion-card-content>\r\n\t</ion-card>\r\n\t</div>\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ 4633:
/*!*************************************************!*\
  !*** ./src/app/pages/veganas/veganas.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "#todos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\nion-card-header {\n  width: 100%;\n}\n\nion-content {\n  width: 100%;\n}\n\n#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 330px;\n}\n\n.tituloreceitas {\n  color: black;\n  font-family: Calibri;\n}\n\n.fonteingredientes {\n  font-family: monospace;\n  margin-left: -10px;\n}\n\n.titulo {\n  font-size: 15px;\n}\n\n.img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.ios .img {\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n}\n\n.iconeingredientes {\n  width: 150px;\n  margin-left: 85px;\n}\n\n.iconepreparo {\n  width: 190px;\n  margin-left: 70px;\n}\n\n.ion-md-restaurant {\n  font-size: 16px;\n}\n\n--ion-card-content {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlZ2FuYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FBSUo7O0FBREU7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUNFO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBRUY7O0FBRUU7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUU7RUFFQSxlQUFBO0FBQUY7O0FBTUU7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUU7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBUUU7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRRTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFFO0VBQ0EsZUFBQTtBQUxGOztBQU9FO0VBQ0UsbUJBQUE7QUFKSiIsImZpbGUiOiJ2ZWdhbmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b2Rvc3tcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVye1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG5pb24tY29udGVudHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbiNsb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gIH1cclxuICAvL0NPTkZJR1VSQcOHw4NPIERPIENBUkRcclxuICAuY2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgIH1cclxuICBcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL0ZPTlRFU1xyXG4gIC50aXR1bG9yZWNlaXRhc3tcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuZm9udGVpbmdyZWRpZW50ZXN7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG97XHJcbiBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFxyXG4gIC8vSU1BR0VOU1xyXG4gIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgIFxyXG4gIH1cclxuICAuaW9zIC5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgXHJcbiAgXHJcbiAgLmljb25laW5ncmVkaWVudGVze1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogODVweDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25lcHJlcGFyb3tcclxuICB3aWR0aDogMTkwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbWQtcmVzdGF1cmFudHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC0taW9uLWNhcmQtY29udGVudHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_veganas_veganas_module_ts.js.map