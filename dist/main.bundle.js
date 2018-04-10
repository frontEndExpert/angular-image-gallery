webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".mypopup{\r\n    position: absolute !important;\r\n    display: block;\r\n    left: 20px;\r\n    top: 20px;\r\n    width: 600px;\r\n    height: 500px;\r\n    margin: 10%;\r\n    padding: 20px;\r\n    background-color: aqua;\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gallery></app-gallery>\r\n<!--router-outlet></router-outlet-->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    // allLocalStorageImages: any;
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__display_image_display_image_component__ = __webpack_require__("./src/app/display-image/display-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_image_upload_image_component__ = __webpack_require__("./src/app/upload-image/upload-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_local_storage_service__ = __webpack_require__("./src/app/image-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// loadChildren:
// const appRoutes: Routes = [
var paths = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: '**', redirectTo: 'gallery' }
];
// const routing = RouterModule.forRoot(paths, {useHash: true});
var routes = paths;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__upload_image_upload_image_component__["a" /* UploadImageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__display_image_display_image_component__["a" /* DisplayImageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                // RouterModule.forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__upload_image_upload_image_component__["a" /* UploadImageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__display_image_display_image_component__["a" /* DisplayImageComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__image_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-image/display-image.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 90%;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-line-pack: justify;\r\n        align-content: space-between;\r\n    z-index: 100;\r\n}\r\n\r\n.big-img{\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    max-width: 100%;\r\n    height: auto;\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    font-size: 14px!important;\r\n}\r\n\r\n.mybut{\r\n    -webkit-box-ordinal-group: 3!important;\r\n        -ms-flex-order: 2!important;\r\n            order: 2!important;\r\n    width: 30px!important;\r\n    font-size: 48px!important;\r\n    cursor: pointer;\r\n}\r\n\r\n.addbut{\r\n    margin: 10px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/display-image/display-image.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title text-center\"> Date Created: {{this.imgO[0].dateCreated}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">\r\n            <img src=\"assets/images/close.png\" width=\"40px\" height=\"40px\" alt=\"Close Window\" />\r\n          </span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body align-center\">\r\n        <img id=\"bigImg\" class=\"big-img\" src='{{this.imgO[0].url}}'  />\r\n        <div class=\"align-center\">\r\n          <button type=\"button\" class=\"btn btn-default addbut\" data-dismiss=\"modal\" (click)=\"deleteImage(this.imgO[0].id);\">\r\n            Delete Image <img src=\"assets/images/del.png\" width=\"30px\" height=\"30px\" alt=\"Delete This Image!\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/display-image/display-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_local_storage_service__ = __webpack_require__("./src/app/image-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_Image__ = __webpack_require__("./src/app/shared/models/Image.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayImageComponent = /** @class */ (function () {
    //extends ModalComponent
    // @ViewChild('displayImgTemplate') template: BsModalRef;
    // modalType = ModalType.displayImg;
    function DisplayImageComponent(ls, activeModal, modalService) {
        this.ls = ls;
        this.activeModal = activeModal;
        this.modalService = modalService;
    }
    DisplayImageComponent.prototype.ngOnInit = function () {
        //console.log("this.imgO[0].id", JSON.stringify(this.imgO[0].id));
    };
    DisplayImageComponent.prototype.close = function () {
        this.activeModal.close();
    };
    DisplayImageComponent.prototype.deleteImage = function (id) {
        if (confirm("Are you sure to delete this image")) {
            this.ls.deleteImage(id);
            this.activeModal.close();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_Image__["a" /* Image */])
    ], DisplayImageComponent.prototype, "imgO", void 0);
    DisplayImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-display-image',
            template: __webpack_require__("./src/app/display-image/display-image.component.html"),
            styles: [__webpack_require__("./src/app/display-image/display-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__image_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], DisplayImageComponent);
    return DisplayImageComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    position: absolute;\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100% !important;\r\n    padding: 5%!important;\r\n    z-index: 1;\r\n    \r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 920px){\r\n.cards {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (minmax(200px, 1fr))[4];\r\n        grid-template-columns: repeat(4, minmax(200px, 1fr));\r\n    grid-gap: 30px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 919px){\r\n    .cards {\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: (minmax(100px, 1fr))[2];\r\n            grid-template-columns: repeat(2, minmax(100px, 1fr));\r\n        grid-gap: 30px;\r\n      }\r\n}\r\n\r\n\r\n\r\n.header{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-line-pack: justify;\r\n        align-content: space-between\r\n}\r\n\r\n\r\n\r\n.title{\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    width: auto;\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    font-size: 14px!important;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.btnadd{\r\n    -webkit-box-ordinal-group: 3!important;\r\n        -ms-flex-order: 2!important;\r\n            order: 2!important;\r\n    width: 60px!important;\r\n    font-size: 48px!important;\r\n    \r\n}\r\n\r\n\r\n\r\n.mybut{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.align-center{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.flex-box{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.card-box{\r\n    width: 18%;\r\n    padding: 3px;\r\n    margin: 3px;\r\n    background-color: beige;\r\n    min-height: 200px;\r\n}\r\n\r\n\r\n\r\n.addbut{\r\n    margin: 10px;\r\n    border-radius: 20px;\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n\r\n.img-box{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n.myimg{\r\n    width: 100%!important;\r\n    text-align: center!important;\r\n    margin-bottom: 10px;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n\r\n#img1.displayImage{\r\n    min-height: 100px!important;\r\n    width: auto;\r\n    max-width: 100%!important;\r\n    max-height: 600px!important;\r\n    text-align: center!important;\r\n}\r\n\r\n\r\n\r\n.pagination-box{\r\n    margin: 20px!important;\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n.footer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 100%!important;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-line-pack: justify;\r\n        align-content: space-between\r\n}\r\n\r\n\r\n\r\n.ftitle{\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    width: auto;\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n\r\n.fbut{\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n    width: 250px;\r\n    font-size: 18px;\r\n    \r\n}\r\n\r\n\r\n\r\n.abut{\r\n    border-radius: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"header\">\r\n        <div class=\"title\">\r\n           <span>Image Gallery</span> \r\n        </div>\r\n        <div class=\"btnadd\">\r\n            <button class=\"btn btn-link mybut\" type=\"button\"  (click)=\"openAdd()\">\r\n            <img src=\"assets/images/add.png\" width=\"40px\" height=\"40px\" alt=\"Add Image to Galery\" />\r\n            </button> \r\n        </div>\r\n    </div>\r\n\r\n  <div class=\"cards\">\r\n    <!-- gallery images here  -->\r\n    <div *ngFor=\"let imgObject of galleryObject | paginate: \r\n      { id:'gallery', itemsPerPage: maxSize, currentPage: currentPage }; let i = index;\">\r\n      <a (click)=\"openImg(imgObject.id)\" >\r\n        <img class=\"img-box\" src='{{imgObject.url}}' />\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n    <div id=\"pagination\" class=\"pagination-box align-center\">\r\n        <pagination-controls id=\"gallery\" (pageChange)=\"currentPage = $event\" [maxSize]=\"5\" directionLinks=\"true\" autoHide=\"true\"\r\n            [previousLabel]=\"'<'\" [nextLabel]=\"'>'\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n        </pagination-controls>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n        <div class=\"ftitle\">Total Number of Images in Gallery: {{numberOfImages}}</div>\r\n        <div class=\"fbut\">\r\n           <button class=\"btn btn-default abut\" (click)=\"this.deleteAllImages();\">\r\n            <img src=\"assets/images/delall.png\" width=\"30px\" height=\"30px\" alt=\"Delete All Galery Images\" />\r\n            Delete All Gallery Images!!! \r\n            </button> \r\n        </div>\r\n    </div>\r\n  </div>\r\n "

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_local_storage_service__ = __webpack_require__("./src/app/image-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_image_upload_image_component__ = __webpack_require__("./src/app/upload-image/upload-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__display_image_display_image_component__ = __webpack_require__("./src/app/display-image/display-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(modalService, activeModal, formImg, ls, ref, differs) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.formImg = formImg;
        this.ls = ls;
        this.ref = ref;
        this.galleryObject = this.ls.getImageGallery();
        this.numberOfImages = (this.galleryObject) ? this.galleryObject.length : 0;
        this.url = '';
        this.currentPage = 1; // the page being displayed by the pagination PIPE
        this.maxSize = 8; // the number of cars/items display on 1 page
        this.showModal = false;
        this.differ = differs.find([]).create(null);
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.galleryObject = this.ls.getImageGallery();
        this.numberOfImages = (this.galleryObject) ? this.galleryObject.length : 0;
    };
    GalleryComponent.prototype.openAdd = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__upload_image_upload_image_component__["a" /* UploadImageComponent */]);
    };
    GalleryComponent.prototype.openImg = function (id) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__display_image_display_image_component__["a" /* DisplayImageComponent */]);
        var imgObj = this.ls.displayImage(id);
        // console.log("imgObj= ", JSON.stringify(imgObj));
        // modalRef.componentInstance.imgId = imgObj.id;
        // modalRef.componentInstance.imgUrl = imgObj.url;
        // modalRef.componentInstance.imgCdate = imgObj.dateCreated;
        modalRef.componentInstance.imgO = imgObj;
    };
    GalleryComponent.prototype.ngDoCheck = function () {
        this.galleryObject = this.ls.getImageGallery();
        var changes = this.differ.diff(this.galleryObject);
        /*
              if (changes) {
                console.log('new change');// for splitting up changes
              changes.forEachAddedItem(r => console.log('added ', r));
              changes.forEachRemovedItem(r => console.log('removed ', r))
              changes.forEachMovedItem(r => console.log('moved ', r))
            }
             */
    };
    GalleryComponent.prototype.addImageToGallery = function () {
        this.ls.addObjectToImageGallery(this.url);
    };
    GalleryComponent.prototype.displayImg = function (id) {
        this.imgObject = this.galleryObject.filter(function (imgObj) { return imgObj.id === id; })[0];
    };
    GalleryComponent.prototype.deleteAllImages = function () {
        if (confirm('Are you sure to delete all the images')) {
            this.ls.deleteAllImages();
        }
    };
    GalleryComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('imgInput'),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "imgUrl", void 0);
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__image_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* IterableDiffers */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/image-local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getImageGallery = function () {
        return JSON.parse(localStorage.getItem('ImageGallery'));
    };
    LocalStorageService.prototype.getImgData = function () {
        var img1 = document.getElementById("img1");
        var created;
        //console.log("img1",img1);
        EXIF.getData(img1, function () {
            created = EXIF.getTag(this, "DateTimeOriginal");
        });
        return created;
    };
    LocalStorageService.prototype.addObjectToImageGallery = function (url) {
        //console.log("object", object)
        var GalleryObject = this.getImageGallery();
        //console.log('getImgData',JSON.stringify(this.getImgData(url)));
        var imgObject = { id: 0, url: "", dateCreated: "" };
        if (GalleryObject === null) {
            imgObject.id = 1;
            GalleryObject = [];
            console.log('GO is Null');
        }
        else {
            imgObject.id = GalleryObject[GalleryObject.length - 1].id + 1;
        }
        imgObject.url = url;
        imgObject.dateCreated = (this.getImgData()) ? this.getImgData() : "1/1/1111";
        //console.log("this.getImgData=",JSON.stringify(this.getImgData()));
        GalleryObject.push(imgObject);
        localStorage.setItem('ImageGallery', JSON.stringify(GalleryObject));
    };
    LocalStorageService.prototype.deleteImage = function (id) {
        var listOfImages = this.getImageGallery().filter(function (imgObj) { return imgObj.id != id; });
        localStorage.setItem('ImageGallery', JSON.stringify(listOfImages));
    };
    LocalStorageService.prototype.displayImage = function (id) {
        return this.getImageGallery().filter(function (imgObj) { return imgObj.id === id; });
    };
    LocalStorageService.prototype.deleteAllImages = function () {
        localStorage.removeItem("ImageGallery");
    };
    LocalStorageService.prototype.getBase64Image = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    LocalStorageService.prototype.base64toFile = function (dataURI) {
        // convert the data URL to a byte string
        var byteString = atob(dataURI.split(',')[1]);
        // pull out the mime type from the data URL
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // Convert to byte array
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // Create a blob that looks like a file.
        var blob = new Blob([ab], { 'type': mimeString });
        blob['lastModifiedDate'] = (new Date()).toISOString();
        blob['name'] = 'file';
        // Figure out what extension the file should have
        switch (blob.type) {
            case 'image/jpeg':
                blob['name'] += '.jpg';
                break;
            case 'image/png':
                blob['name'] += '.png';
                break;
        }
        // cast to a File
        return blob;
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/models/Image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/upload-image/upload-image.component.css":
/***/ (function(module, exports) {

module.exports = ".mypopup{\r\n    /* position: absolute !important;\r\n    display: block;\r\n    left: 20px;\r\n    top: 20px; */\r\n    width: 90%;\r\n    max-width: 900px;\r\n    max-height: 800px;\r\n    min-height: 75vh;\r\n    \r\n    margin: 5%;\r\n    padding: 20px;\r\n}\r\n\r\ndiv.upload-header{\r\n    font-size: 18px!important;\r\n    margin-bottom: 10px!important;\r\n    display: -webkit-box!important;\r\n    display: -ms-flexbox!important;\r\n    display: flex!important;\r\n    width: 100%;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-line-pack: justify;\r\n        align-content: space-between;\r\n}\r\n\r\ndiv.upload-header > .imginput {\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n    width: 200px;\r\n    -webkit-box-flex: 5;\r\n        -ms-flex-positive: 5;\r\n            flex-grow: 5;\r\n    -ms-flex-line-pack: stretch;\r\n        align-content: stretch;\r\n    font-size: 18px!important;\r\n}\r\n\r\ndiv.upload-header > .close{\r\n    -webkit-box-ordinal-group: 3!important;\r\n        -ms-flex-order: 2!important;\r\n            order: 2!important;\r\n    width: 30px!important;\r\n    text-align: right!important;\r\n}\r\n\r\n#img1.displayImage{\r\n    max-width: 900px!important;\r\n    max-height: 900px!important;\r\n}\r\n\r\n.addbut{\r\n    margin: 10px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.myimg{\r\n    font-size: 18px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.visible{\r\n    visibility: hidden;\r\n}"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <span class=\"imginput\">\r\n      <input #imgInput type='file' (change)=\"readUrl($event)\">\r\n    </span>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" \r\n      (click)=\"close()\">\r\n      <span aria-hidden=\"true\">\r\n        <img src=\"assets/images/close.png\" width=\"40px\" height=\"40px\" \r\n        alt=\"Close Window\" />\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"this.url && this.url.length > 5\" class=\"modal-body\">\r\n    <div class=\"myimg\">\r\n      <img id=\"img1\" [src]=\"this.url\" alt=\"your image\" class=\"displayImage\"  />\r\n    </div>\r\n    <div class=\"align-center\">\r\n      <button type=\"button\" class=\"btn btn-default addbut\" (click)=\"addImageToGallery(); this.url=''; \"\r\n        data-dismiss=\"modal\">\r\n        Add <img src=\"assets/images/add.png\" width=\"30px\" height=\"30px\" alt=\"Add This Image to Galery\" />\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_local_storage_service__ = __webpack_require__("./src/app/image-local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(ls, activeModal) {
        this.ls = ls;
        this.activeModal = activeModal;
        this.loading = false;
        this.url = '';
    }
    UploadImageComponent.prototype.addImageToGallery = function () {
        this.ls.addObjectToImageGallery(this.url);
        // this.ref.markForCheck();private ref: ChangeDetectorRef
        this.activeModal.close();
    };
    UploadImageComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UploadImageComponent.prototype.close = function () {
        this.activeModal.close();
    };
    UploadImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-upload-image',
            template: __webpack_require__("./src/app/upload-image/upload-image.component.html"),
            styles: [__webpack_require__("./src/app/upload-image/upload-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__image_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map