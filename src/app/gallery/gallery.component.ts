import {  Component,  OnInit,  EventEmitter,  Input,  Output,  ChangeDetectorRef,
          ChangeDetectionStrategy,  IterableDiffers,  IterableDiffer,  ViewChild } from '@angular/core';
import {  FormsModule} from '@angular/forms';
          import {  LocalStorageService} from '../image-local-storage.service';
import {  ModalsService,  ModalStateParam,  ModalType } from '../modals.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imgObject: any;
  galleryObject: any = this.ls.getImageGallery();
  numberOfImages: number = (this.galleryObject) ? this.galleryObject.length : 0;
  differ: IterableDiffer < any > ;

  @ViewChild('imgInput')
  imgUrl: any;

  constructor(
    private _modalsService: ModalsService,
    private formImg: FormsModule,
    private ls: LocalStorageService,
    private ref: ChangeDetectorRef,
    differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  url: any = "";

  imgId: number = 0;
  currentPage = 1; // the page being displayed by the pagination PIPE
  maxSize: number = 8; // the number of cars/items display on 1 page

  ngOnInit() {
    this.galleryObject = this.ls.getImageGallery();
    this.numberOfImages = (this.galleryObject) ? this.galleryObject.length : 0;
  }

  deleteImage(id: number) {
    if (confirm("Are you sure to delete this image")) {
      this.ls.deleteImage(id);
    }
  }

  ngDoCheck() {
    this.galleryObject = this.ls.getImageGallery();
    const changes = this.differ.diff(this.galleryObject);
    /* 
    	  if (changes) {
    	    console.log('new change');// for splitting up changes
          changes.forEachAddedItem(r => console.log('added ', r));
          changes.forEachRemovedItem(r => console.log('removed ', r))
          changes.forEachMovedItem(r => console.log('moved ', r))
        }
         */
  }

  addImageToGallery() {
    this.ls.addObjectToImageGallery(this.url);
  }

  displayImg(id) {
    this.imgObject = this.galleryObject.filter(
      imgObj => imgObj.id === id
    )[0];
  }
  /* displayImageArr() {
    return this.galleryObject.filter(function (item) {
      return item.Id != this.imgId;
    })[0];

  } */
  deleteAllImages() {
    if (confirm("Are you sure to delete all the images")) {
      this.ls.deleteAllImages();
    }
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
