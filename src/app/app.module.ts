import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {ModalModule, BsModalService} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

import {LocalStorageService} from './image-local-storage.service';
import {ModalsService} from './modals.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
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
