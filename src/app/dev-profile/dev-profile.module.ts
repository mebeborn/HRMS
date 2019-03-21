import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevProfileComponent } from './dev-profile.component';
import { MessagesComponent } from '../messages/messages.component';

import { CheckUserGuard } from '../checkUser.guard';



export const routes: Routes = [
    { path: '', redirectTo: 'dev-profile', pathMatch: 'full'},
    { path: 'messages', component: MessagesComponent , canActivate: [ CheckUserGuard ]},
];

@NgModule({
declarations: [
    DevProfileComponent
],
imports: [
CommonModule,
RouterModule,
BrowserModule,
HttpModule
],
exports: [ DevProfileComponent ],
})

export class DevProfileModule {

}