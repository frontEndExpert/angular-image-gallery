import {Component, OnInit, ViewChild, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from '../modalComponent.extend';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from '../image-local-storage.service';
import { ModalsService } from '../modals.service';
import { ModalStateParam, ModalType } from '../modals.service';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css']
})
export class DisplayImageComponent extends ModalComponent{
  @ViewChild('displayImgTemplate') template: BsModalRef;
  modalType = ModalType.displayImg;

  constructor( private ls: LocalStorageService, private _zone: NgZone,
    _modalsService: ModalsService,_bsModalService: BsModalService) {
          super(_bsModalService, _modalsService);
}

url: any = "";

  ngOnInit() {
  }

  deleteImage(id: number) {
    if (confirm("Are you sure to delete this image")) {
      this.ls.deleteImage(id);
    }
  }

}
