import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from '../modals.service';
import {  ModalStateParam, ModalType } from '../modals.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  showAddModal = false;
  showDisplayModal = true;

  constructor(private _modalsService: ModalsService) {
    this._modalsService.onModalStateChanged.subscribe((state: ModalStateParam) => {
      switch(state.modalType) {
        case ModalType.addImg:
          this.showAddModal = state.isShown;
          console.log("should see");
        break;
        case ModalType.displayImg:
          this.showDisplayModal = true; // state.isShown;
          console.log("display image window")
        break;
      }
    });
  }

  ngOnInit() {
  }

}