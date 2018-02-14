
import { ConvertionComponent } from './convertion/convertion.component';
import { CounsellingComponent } from './counselling/counselling.component';
import { WalkinComponent } from './walkin/walkin.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
export const router: Routes = [
    {path:'',redirectTo:'walkin',pathMatch:'prefix'},
   {path:'walkin',component:WalkinComponent},
   {path:'counselling',component:CounsellingComponent},
   {path:'convertion',component:ConvertionComponent}

];

export const routes:ModuleWithProviders = RouterModule.forRoot(router)