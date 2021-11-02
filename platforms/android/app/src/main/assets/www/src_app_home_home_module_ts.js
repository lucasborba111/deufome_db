(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() {
        this.option = {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 2,
            autoplay: true,
        };
        this.option2 = {
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            spaceBetween: 2,
        };
        this.option3 = {
            slidesPerView: 0.9,
            centeredSlides: true,
            loop: true,
            autoplay: true,
            spaceBetween: 15,
            pager: true,
            // autoplay:true,
        };
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#logo {\n  height: 100px;\n  width: 130px;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n#card {\n  width: 200px;\n}\n\n#cards {\n  justify-content: center;\n}\n\nion-grid {\n  display: flex;\n  flex-direction: row;\n}\n\n.img {\n  border-radius: 5px;\n}\n\n.title {\n  top: 0px;\n  transform: translate(0, 0%);\n  margin-left: 1px;\n}\n\n.menubackground {\n  height: 45px;\n}\n\n.background-menu {\n  border-radius: 2px;\n  height: 33px;\n  width: 300px;\n  background-color: #ad0002;\n}\n\nion-card {\n  box-shadow: black;\n  border-radius: 12px;\n  background-color: white;\n}\n\nion-card img {\n  width: 100%;\n  transition: 600ms all ease-in-out;\n}\n\n.ion-margin-top {\n  box-shadow: white;\n  width: 100%;\n  padding: 5px;\n}\n\nimg {\n  object-fit: cover;\n  width: 100%;\n  transform: scale(1.1, 1.1);\n  transition: 600ms all ease-in-out;\n}\n\n.swiper-slide-active {\n  transform: scale(1, 1);\n}\n\n.swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n\n#textoslide {\n  color: #222222;\n  font-weight: 700;\n  font-family: Helvetica;\n}\n\n#linhabaixo {\n  float: top;\n  background-color: none;\n  height: 1.5px;\n  width: 100%;\n  margin-top: 0px;\n  margin-left: 0;\n}\n\n#linhacima {\n  float: top;\n  background-color: none;\n  height: 1px;\n  width: 100%;\n  margin-bottom: 0px;\n  margin-left: 0;\n}\n\n#tituloslide {\n  font-family: BebasNeue-Regular;\n  position: relative;\n  float: right;\n  right: 50%;\n  transform: translate(50%, 0);\n  font-size: 23px;\n  color: #313131;\n}\n\n#banner1 {\n  background-size: cover;\n  background-position: center center;\n  margin: 0;\n}\n\nion-slides {\n  --bullet-background: black;\n  --bullet-background-active: red;\n}\n\n.teste {\n  font-family: Helvetica;\n  font-weight: 900;\n  font-size: 11px;\n  color: #f8f8f8;\n  position: absolute;\n  right: 50%;\n  top: 50%;\n  transform: translate(50%, -50%);\n}\n\n.titulocategoria {\n  font-size: 23px;\n  color: #313131;\n  font-family: BebasNeue-Regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNBLGtCQUFBO0FBS0E7O0FBRkE7RUFDRSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFBRTtFQUNFLFdBQUE7RUFDQSxpQ0FBQTtBQUVKOztBQUdBO0VBSUUsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0FBSEY7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUpGOztBQVFBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFVQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFQRjs7QUFXQTtFQUNFLHNCQUFBO0VBQ0Esa0NBQUE7RUFFQSxTQUFBO0FBVEY7O0FBWUE7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FBVEY7O0FBWUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFURiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dvIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcbiNjYXJke1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4jY2FyZHN7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5pbWd7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuLnRpdGxlIHtcclxuICB0b3A6IDBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxufVxyXG5cclxuLy9iYWNrZ3JvdW5kIHNsaWRlIG1lbnVcclxuLm1lbnViYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi8vYmFja2dyb3VuZCBkbyBtZW51IGRlIHJlY2VpdGFzXHJcbi5iYWNrZ3JvdW5kLW1lbnUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDAwMDI7XHJcbn1cclxuXHJcblxyXG4vL0NPTkZJRyBETyBTTElERVxyXG5pb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiA2MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4vL2JhY2tncm91bmQgZG8gc2xpZGVcclxuLmlvbi1tYXJnaW4tdG9wIHtcclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9jb3ppbmhhLmpwZycpO1xyXG4gIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gIHRyYW5zaXRpb246IDYwMG1zIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLy90aXR1bG8gZG9zIHNsaWRlcyBkYSBzZW1hbmFcclxuI3RleHRvc2xpZGUge1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxufVxyXG5cclxuLy9saW5oYSBwYXJhIGluZmVpdGVcclxuI2xpbmhhYmFpeG8ge1xyXG4gIGZsb2F0OiB0b3A7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICBoZWlnaHQ6IDEuNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLy9saW5oYSBwYXJhIGluZmVpdGVcclxuI2xpbmhhY2ltYSB7XHJcbiAgZmxvYXQ6IHRvcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLy90aXR1bG8gZG8gc2xpZGUgbWVudVxyXG4jdGl0dWxvc2xpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwKTtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgY29sb3I6ICMzMTMxMzE7XHJcbn1cclxuXHJcblxyXG4jYmFubmVyMSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZWQ7XHJcbn1cclxuXHJcbi50ZXN0ZSB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi50aXR1bG9jYXRlZ29yaWF7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGNvbG9yOiAjMzEzMTMxO1xyXG4gIGZvbnQtZmFtaWx5OiBCZWJhc05ldWUtUmVndWxhcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"book-outline\" slot=\"end\" style=\"margin-right: 30px; font-size: 23px;\" routerLink=\"../topreceitas\"></ion-icon>\r\n    <ion-img src=\"../assets/logo.png\" id=\"logo\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid  style=\"justify-content: center; margin-top: 10px;\">\r\n    <ion-text class=\"titulocategoria\">SEJA BEM VINDO!</ion-text>\r\n  </ion-grid>\r\n  <ion-grid id=\"cards\">\r\n  <ion-card id=\"card\">\r\n    <ion-card-header> <img src=\"../../assets/comida.png\" class=\"img\" >\r\n\t\t\t<ion-card-title class=\"tituloreceitas\">1° Passo</ion-card-title>\r\n\t\t\t<ion-card-subtitle >Verifique sua prateleira</ion-card-subtitle>\r\n\t\t\t</ion-card-header>\r\n  </ion-card>\r\n  <ion-card id=\"card\">\r\n    <ion-card-header> <img src=\"../../assets/comida.png\" class=\"img\" >\r\n\t\t\t<ion-card-title class=\"tituloreceitas\">2° Passo</ion-card-title>\r\n\t\t\t<ion-card-subtitle >Escolha três ingredientes, uma categoria do menu e boas práticas!</ion-card-subtitle>\r\n\t\t\t </ion-card-header>\r\n  </ion-card>\r\n</ion-grid>\r\n<ion-grid style=\"justify-content: center;\">\r\n    <ion-text class=\"titulocategoria\">Categorias</ion-text>\r\n  </ion-grid>\r\n  <ion-slides   class=\"menubackground\"  [options]=\"option2\">\r\n    <ion-slide>\r\n      <button class=\"background-menu\" routerLink='../lanches'>\r\n      <span class=\"teste\">LANCHES</span>\r\n      </button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <button class=\"background-menu\" routerLink='../saladas'>\r\n      <span  class=\"teste\">SALADAS</span>\r\n      </button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <button routerLink='../veganas' class=\"background-menu\">\r\n      <span  class=\"teste\">VEGANAS </span>\r\n      </button>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <button class=\"background-menu\" routerLink='../massas'>\r\n      <span class=\"teste\">MASSAS</span>\r\n      </button>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n    <ion-text id=\"tituloslide\">Melhores da Semana</ion-text>\r\n  <ion-slides [options]=\"option\" class=\"ion-margin-top\">\r\n    <ion-slide>\r\n      <ion-card id=\"cardslide1\">\r\n        <img src=\"assets/receita1.jpg\">\r\n        <p id=\"textoslide\">Pudim de Chocolate 2 Ingredientes</p>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card id=\"cardslide1\">\r\n        <img src=\"assets/receita2.jpg\">\r\n        <p id=\"textoslide\">Almôndegas Gratinadas</p>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card id=\"cardslide1\">\r\n        <img src=\"assets/receita3.jpg\">\r\n        <p id=\"textoslide\">Pão de Queijo 3 Ingredientes</p>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map