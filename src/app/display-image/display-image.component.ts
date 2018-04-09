import {Component, OnInit, ViewChild, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from '../image-local-storage.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css']
})
export class DisplayImageComponent {
  //extends ModalComponent
 // @ViewChild('displayImgTemplate') template: BsModalRef;
 // modalType = ModalType.displayImg;

  constructor( private ls: LocalStorageService,
    public activeModal: NgbActiveModal,  public modalService: NgbModal) {
}

url: any = "";

  ngOnInit() {
  }


  close(){
    this.activeModal.close();
  }
  deleteImage(id: number) {
    if (confirm("Are you sure to delete this image")) {
      this.ls.deleteImage(id);
    }
  }

}
