import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'app-counselling'
    ,templateUrl: './counselling.component.html'
})

export class CounsellingComponent implements OnInit {
    title = 'What do you do?';
    counsellingType: string;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.counsellingType = this.formDataService.getCounselling();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setCounselling(this.counsellingType);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/walkin']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/convertion']);
        }
    }
}
