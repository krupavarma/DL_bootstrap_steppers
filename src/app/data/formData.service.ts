import { Injectable }                        from '@angular/core';

import { FormData, Walkin, Convertion }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isWalkinFormValid: boolean = false;
    private isCounsellingFormValid: boolean = false;
    private isConvertionFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getWalkin(): Walkin {
        // Return the Personal data
        var walkin: Walkin = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return walkin;
    }

    setWalkin(data: Walkin) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isWalkinFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.walkin);
    }

    getCounselling() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setCounselling(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isCounsellingFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.counselling);
    }

    getConvertion() : Convertion {
        // Return the Address data
        var convertion: Convertion = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return convertion;
    }

    setConvertion(data: Convertion) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isConvertionFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.convertion);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isWalkinFormValid = this.isCounsellingFormValid = this.isConvertionFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isWalkinFormValid &&
                this.isCounsellingFormValid && 
                this.isConvertionFormValid;
    }
}
