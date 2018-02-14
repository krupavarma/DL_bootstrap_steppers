import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Walkin }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'app-walkin'
    ,templateUrl: './walkin.component.html'
})

export class WalkinComponent implements OnInit {
    title = 'Please tell us about yourself.';
    walkin: Walkin;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.walkin = this.formDataService.getWalkin();
        console.log('Personal feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setWalkin(this.walkin);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/counselling']);
        }
    }
}