import { Component,  OnInit,  EventEmitter,  Input,  Output,  ChangeDetectorRef,
         ChangeDetectionStrategy,  IterableDiffers,  IterableDiffer,  ViewChild, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../image-local-storage.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UploadImageComponent } from '../upload-image/upload-image.component';
import { DisplayImageComponent } from '../display-image/display-image.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, DoCheck {
  @ViewChild('imgInput')
  imgUrl: any;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private formImg: FormsModule,
    private ls: LocalStorageService,
    private ref: ChangeDetectorRef,
    differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  imgObject: any;
  galleryObject: any = this.ls.getImageGallery();
  numberOfImages: number = (this.galleryObject) ? this.galleryObject.length : 0;
  differ: IterableDiffer < any > ;
  url: any = '';
  currentPage = 1; // the page being displayed by the pagination PIPE
  maxSize = 8; // the number of cars/items display on 1 page
  showModal = false;

  ngOnInit() {
    this.galleryObject = this.ls.getImageGallery();
    this.numberOfImages = (this.galleryObject) ? this.galleryObject.length : 0;
  }


  openAdd() {
      const modalRef = this.modalService.open(UploadImageComponent);
  }

  public openImg(id) {
    const modalRef = this.modalService.open(DisplayImageComponent);
    const imgObj = this.ls.displayImage(id);
    // console.log("imgObj= ", JSON.stringify(imgObj));
    // modalRef.componentInstance.imgId = imgObj.id;
    // modalRef.componentInstance.imgUrl = imgObj.url;
    // modalRef.componentInstance.imgCdate = imgObj.dateCreated;
    modalRef.componentInstance.imgO = imgObj;
  }

  ngDoCheck() {
    this.galleryObject = this.ls.getImageGallery();
    this.numberOfImages = (this.galleryObject) ? this.galleryObject.length : 0;
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

  deleteAllImages() {
    if (confirm('Are you sure to delete all the images')) {
      this.ls.deleteAllImages();
    }
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
