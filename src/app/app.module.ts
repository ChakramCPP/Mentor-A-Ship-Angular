import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from "../environments/environment";
//import { ApiService } from "./services/api.service";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AssociateComponent } from './associate/associate.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SampleComponent } from './components/sample/sample.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsprofileComponent } from './components/asprofile/asprofile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MprofileComponent } from './components/mprofile/mprofile.component';
import { AdprofileComponent } from './components/adprofile/adprofile.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AsmentorComponent } from './components/asmentor/asmentor.component';
import { PlanComponent } from './components/plan/plan.component';
import { MyassociatesComponent } from './components/myassociates/myassociates.component';
import { MapComponent } from './components/map/map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MtasksComponent } from './components/mtasks/mtasks.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AssociateComponent,
    MentorComponent,
    AdminComponent,
    RegistrationComponent,
    SampleComponent,
    AboutComponent,
    ErrorComponent,
    NavbarComponent,
    AsprofileComponent,
    LogoutComponent,
    MprofileComponent,
    AdprofileComponent,
    TasksComponent,
    AsmentorComponent,
    PlanComponent,
    MyassociatesComponent,
    MapComponent,
    DashboardComponent,
    MtasksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
