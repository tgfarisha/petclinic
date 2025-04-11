import { Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { HomeComponent } from './home/home.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'owners', component: OwnerComponent }, //owners page
    { path: 'owner-detail/:id', component: OwnerDetailComponent}, //owner detail page
    { path: 'owner-add', component: OwnerAddComponent}, //add new owner form page
    { path: 'owner-list', component: OwnerListComponent}, //owner list page
    { path: 'owner-edit/:id', component: OwnerEditComponent}, //owner details page
    { path: 'owner-detail/:id/pet-add', component: PetAddComponent }, //add new pet form page
    { path: 'owner-detail/:ownerId/pet-edit/:petId', component: PetEditComponent}
];
