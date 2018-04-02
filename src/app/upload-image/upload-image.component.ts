import {Component, OnInit, ViewChild, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from '../modalComponent.extend';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from '../image-local-storage.service';
import { ModalsService } from '../modals.service';
import { ModalStateParam, ModalType } from '../modals.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})

export class UploadImageComponent extends ModalComponent{
  @ViewChild('addImgTemplate') template: BsModalRef;
  modalType = ModalType.addImg;

  form: FormGroup;
  loading: boolean = false;
  url: any = "";
 

  constructor( private ls: LocalStorageService, private _zone: NgZone,
    _modalsService: ModalsService,_bsModalService: BsModalService) {
          super(_bsModalService, _modalsService);
}


  addImageToGallery(){
    this.ls.addObjectToImageGallery(this.url);
    //this.ref.markForCheck();private ref: ChangeDetectorRef
    this.hide();
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

  ngOnInit() {
    super.ngOnInit();
  }
  
}