import {Component, OnInit, ViewChild, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../image-local-storage.service';
import { Image } from '../shared/models/Image';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent {
 // @ViewChild('addImgTemplate') template: BsModalRef;

  form: FormGroup;
  loading = false;
  url: any = '';


  constructor( private ls: LocalStorageService, public activeModal: NgbActiveModal) {
}


  addImageToGallery() {
    this.ls.addObjectToImageGallery(this.url);
    // this.ref.markForCheck();private ref: ChangeDetectorRef
    this.activeModal.close();
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

  ngOnInit() {
    // hhh
  }

  close() {
    this.activeModal.close();
  }

}
