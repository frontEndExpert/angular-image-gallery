import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {LocalStorageService} from './image-local-storage.service';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { GalleryComponent } from './gallery/gallery.component';



@Component({
  selector: 'app-root',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allLocalStorageImages: any;
  //parentAddwin: number;
  //@Input() addwin: number = 0;

  //updateAddWin($event){
  //    this.parentAddwin = $event;
  //}

  constructor( private ls: LocalStorageService) { 
  }
 
}
