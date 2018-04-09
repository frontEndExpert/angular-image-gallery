import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import {Routes, RouterModule} from "@angular/router";
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DisplayImageComponent } from './display-image/display-image.component';

import {LocalStorageService} from './image-local-storage.service';

import {NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// loadChildren:
//const appRoutes: Routes = [
var paths: any = [ 
  {path: '', component: GalleryComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: '**',  redirectTo: 'gallery' }
];
//const routing = RouterModule.forRoot(paths, {useHash: true});
const routes: Routes = paths;
@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    GalleryComponent,
    DisplayImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  entryComponents: [
    GalleryComponent,
    UploadImageComponent,
    DisplayImageComponent 
],
  providers: [LocalStorageService,
    NgbModal,
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
