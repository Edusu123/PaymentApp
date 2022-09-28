import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';

@Component({
    selector: 'app-payment-details',
    templateUrl: './payment-details.component.html',
    styles: [
    ]
})
export class PaymentDetailsComponent implements OnInit {

    constructor(public service: PaymentDetailService) { }

    ngOnInit(): void {
        this.service.refreshList();
    }

}
