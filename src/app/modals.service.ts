import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class ModalStateParam {
  constructor(public modalType: ModalType, public isShown: boolean) {
  }
}

export enum ModalType {
  addImg,
  displayImg
};

@Injectable()
export class ModalsService {
  // Evemts
  private onModalStateChanged$ = new Subject<ModalStateParam>();
  onModalStateChanged = this.onModalStateChanged$.asObservable();

  setModalState (modalState: ModalStateParam) {
    this.onModalStateChanged$.next(modalState);
  }

  constructor() { }

}

