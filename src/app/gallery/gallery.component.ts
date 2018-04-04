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
  currentPage = 1; // the page being displayed by the pagination PIPE
  maxSize: number = 8; // the number of cars/items display on 1 page
  showModal: boolean= false;
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
