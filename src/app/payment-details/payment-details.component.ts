import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
import { Inject } from '@angular/core';

import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';

@Component({
    selector: 'app-payment-details',
    templateUrl: './payment-details.component.html',
    styles: [
    ]
})
export class PaymentDetailsComponent implements OnInit {

    constructor(public service: PaymentDetailService, @Inject(ToastrService) private toastr: ToastrService) { }

    ngOnInit(): void {
        this.service.refreshList();
    }

    populateForm(selectedRecord: PaymentDetail) {
        this.service.formData = Object.assign({}, selectedRecord);
    }

    onDelete(id: number) {
        if (confirm('Are you sure to delete the record?')) {
            this.service.deletePaymentDetail(id)
                .subscribe(
                    res => {
                        this.service.refreshList();
                        this.toastr.error('Deleted Successfully', 'Payment Detail Register');
                    },
                    err => console.log(err)
                );
        }
    }

}
