import { Component,  OnInit,  EventEmitter,  Input,  Output,  ChangeDetectorRef,
         ChangeDetectionStrategy,  IterableDiffers,  IterableDiffer,  ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../image-local-storage.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UploadImageComponent } from '../upload-image/upload-image.component';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'modal-addimg',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Hello</h4>
    </div>
    <div class="modal-body">
      <p>Yes</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ngbModalAddImg {
  @Input() name;
  @Input() data: any;
  dataValue: string;

  constructor(public activeModal: NgbActiveModal) {}
  
  ngDoCheck() {
   // this.dataValue = this._lazyService.stringify(this.data);
  }
}

@Component({
  selector: 'modal-displayimg',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 class="modal-title">Hello Display</h4>
    </div>
    <div class="modal-body">
      <p>Yes</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class ngbModalDisplayImg {
  @Input() name;
  @Input() data: any;
  dataValue: string;

  constructor(public activeModal: NgbActiveModal) {}
  
  ngDoCheck() {
   // this.dataValue = this._lazyService.stringify(this.data);
  }
}

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
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
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


  open(id) {
    if(id==1){
      const modalRef = this.modalService.open(UploadImageComponent);
      modalRef.componentInstance.name = 'World';
      modalRef.componentInstance.data = {
        foo: 'bar',
        name: 'World'
      }
    }
    else if (id==2){
      const modalRef = this.modalService.open(DisplayImageComponent);
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
