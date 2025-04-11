import { Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { HomeComponent } from './home/home.component';
import { OwnerListComponent } from './owner-list/owner-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'owners', component: OwnerComponent }, //owners page
    { path: 'owner-detail/:id', component: OwnerDetailComponent}, //owner detail page
    { path: 'owner-add', component: OwnerAddComponent}, //add new owner form page
    { path: 'owner-list', component: OwnerListComponent}
];
