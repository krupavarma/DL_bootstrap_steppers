import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Convertion }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'app-convertion'
    ,templateUrl: './convertion.component.html'
})

export class ConvertionComponent implements OnInit {
    title = 'Where do you live?';
    convertion: Convertion;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.convertion = this.formDataService.getConvertion();
        console.log('Address feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setConvertion(this.convertion);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/counselling']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/convertion']);
        }
    }
}