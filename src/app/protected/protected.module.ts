import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedComponent } from './protected.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';


export const routes: Routes = [
		{ path: '', redirectTo: 'protected', pathMatch: 'full' },
		{ path: 'profile', component: ProfileComponent },
		{ path: 'contact', component: ContactComponent },
		{ path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AboutComponent,
    ProtectedComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpModule
  ],
  exports: [ AboutComponent, ProtectedComponent ],
})

export class ProtectedModule {
	
}