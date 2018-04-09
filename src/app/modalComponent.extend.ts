import { OnInit, ReflectiveInjector } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ModalComponentImpl } from './modalComponent.impl';
import { ModalsService } from './modals.service';
import { ModalStateParam, ModalType } from './modals.service';

export abstract class ModalComponent implements OnInit {
    abstract template: BsModalRef;
    abstract modalType: ModalType;
    private _modalRef: BsModalRef;

    constructor (private _bsModalService: BsModalService,
                private _modalsService: ModalsService,
                private options?: any) {
        const defaultOptions = { class: 'model-lg' };

        options = options || defaultOptions;
    }

    ngOnInit () {
        window.setTimeout(() => { // This is a workaround I found for a bug ngx-modal have, this should be removed once I resolve it with them
            this._modalRef = this._bsModalService.show(this.template, this.options);
        });
    }

    hide () {
        this._modalRef.hide();
        this._modalsService.setModalState(new ModalStateParam(this.modalType, false));
    }
}