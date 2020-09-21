import { MtasksComponent } from './components/mtasks/mtasks.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdprofileComponent } from './components/adprofile/adprofile.component';
import { MapComponent } from './components/map/map.component';
import { MyassociatesComponent } from './components/myassociates/myassociates.component';
import { MentorComponent } from './mentor/mentor.component';
import { AsmentorComponent } from './components/asmentor/asmentor.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MprofileComponent } from './components/mprofile/mprofile.component';
import { AsprofileComponent } from './components/asprofile/asprofile.component';
import { RouteGuardService } from './services/route-guard.service';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { AssociateComponent } from './associate/associate.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from './components/plan/plan.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: WelcomeComponent },
  { path: 'about', component: AboutComponent , canActivate:[RouteGuardService] },
  { path: 'login', component: LoginComponent, },
  { path: 'profile', component: LoginComponent,canActivate:[RouteGuardService] },
  { path: 'associate/:email', 
    component: AssociateComponent,
    canActivate:[RouteGuardService],
    children: [
      {
        path: 'profile',
        component: AsprofileComponent,canActivate:[RouteGuardService]
      },
      {
        path: 'mentor',
        component: AsmentorComponent,canActivate:[RouteGuardService]
      },
      { path: 'tasks', component:TasksComponent,canActivate:[RouteGuardService]
      },
    ],
   },
   { path: 'mentor/:email', 
    component: MentorComponent,
    canActivate:[RouteGuardService],
    children: [
      {
        path: 'profile',
        component: MprofileComponent,canActivate:[RouteGuardService]
      },
      {
        path: 'associates',
        component: MyassociatesComponent,canActivate:[RouteGuardService]
      },
      { path: 'plan', component:PlanComponent,canActivate:[RouteGuardService]
      },
      { path: 'tasks', component:MtasksComponent,canActivate:[RouteGuardService]
      }
    ],
   },
   { path: 'admin/:email', 
   component: AdminComponent,
   canActivate:[RouteGuardService],
   children: [
     {
       path: 'profile',
       component: AdprofileComponent,canActivate:[RouteGuardService]
     },
     {
       path: 'dashboard',
       component: DashboardComponent,canActivate:[RouteGuardService]
     },
     { path: 'map', component:MapComponent,canActivate:[RouteGuardService]
     },
   ],
  },
  
  { path: 'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  { path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
