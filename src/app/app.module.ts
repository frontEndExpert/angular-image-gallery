import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {ModalModule, BsModalService} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { GalleryComponent } from './gallery/gallery.component';

import {LocalStorageService} from './image-local-storage.service';
import { DisplayImageComponent } from './display-image/display-image.component';
import {ModalsService} from './modals.service';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    GalleryComponent,
    DisplayImageComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ],
  providers: [LocalStorageService,,
    BsModalService,
    ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
