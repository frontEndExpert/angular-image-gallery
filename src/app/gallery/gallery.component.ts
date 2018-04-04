import {  Component, OnInit, EventEmitter, Input, Output,
          ChangeDetectorRef,ChangeDetectionStrategy, 
          IterableDiffers, IterableDiffer } from '@angular/core';
import {LocalStorageService} from '../image-local-storage.service';
import { ModalsService, ModalStateParam, ModalType } from '../modals.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  galleryObject: any = this.ls.getImageGallery();
  numberOfImages: number = (this.galleryObject)?this.galleryObject.length:0;
  differ: IterableDiffer<any>;

  constructor(
    private _modalsService: ModalsService,
    private ls: LocalStorageService, 
    private ref: ChangeDetectorRef,
    differs:IterableDiffers) { 
      this.differ = differs.find([]).create(null);
    }

  url: any = "";

  imgIndex: number= 0;
  currentPage = 1; // the page being displayed by the pagination PIPE
  maxSize: number = 10; // the number of cars/items display on 1 page

  ngOnInit() {
    this.galleryObject = this.ls.getImageGallery();
    this.numberOfImages = (this.galleryObject)?this.galleryObject.length:0;
    
    //this.ref.markForCheck();
    console.log("numberOfImages:", JSON.stringify(this.numberOfImages))
  }
  
 
  public showAddWin() {
    console.log("modals:");
    this._modalsService.setModalState(new ModalStateParam(ModalType.addImg, true));
  }

  removeImg(index: number) {
    this.galleryObject.splice(index, 1);
  }

  openDisplayImage(id){
    //make the display image visible popup
    //this.displaywin.emit(true);
   // this.displaywin.emit(id);
  }
  ngDoCheck() {
    this.galleryObject=this.ls.getImageGallery();
    const changes = this.differ.diff(this.galleryObject);
	  if (changes) {
	    console.log('new change');// for splitting up changes
      changes.forEachAddedItem(r => console.log('added ', r));
      changes.forEachRemovedItem(r => console.log('removed ', r))
      changes.forEachMovedItem(r => console.log('moved ', r))
    }
  }
  

  
  addImageToGallery(){
    this.ls.addObjectToImageGallery(this.url);
    //this.ref.markForCheck();private ref: ChangeDetectorRef
    //this.hide();
  }

  deleteAllImages(){
    this.ls.deleteAllImages();
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
