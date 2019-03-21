import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { ProtectedComponent } from './protected/protected.component';
import { routes as childRoutes, ProtectedModule } from './protected/protected.module';
import { DevProfileComponent } from './dev-profile/dev-profile.component';
import { routes as devRoutes, DevProfileModule } from './dev-profile/dev-profile.module';
import { MessagesComponent } from './messages/messages.component';



const routes: Routes = [
		// basic routes
		{ path: '', redirectTo: 'home', pathMatch: 'full' },
		{ path: 'home', component: HomeComponent },
		{
		path: 'protected',
			component: ProtectedComponent,
      children: childRoutes,
      canActivate: [ LoggedInGuard ]
    },
    {
    path: 'dev-profile',
      component: DevProfileComponent,
      children: devRoutes,
      canActivate: [ LoggedInGuard ]
		},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    ProtectedModule,
    DevProfileModule
  ],
  providers: [ AUTH_PROVIDERS, LoggedInGuard ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
