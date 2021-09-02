import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './front-page/dashboard/dashboard.component'
import { HomeComponent } from './front-page/home/home.component';



// import { DashboardComponent } from './dashboard/dashboard.component'


const routes: Routes = [

  
      {
        path: 'dashboard',
        component: DashboardComponent,
        
     
      },
      {
        path: 'employee',
        component: HomeComponent,
        
     
      },


     

      // {
      //   path: 'settings',
      //   component: SettingComponent,
       
      // },
      
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }


// Routing ke naam pr kujh nikia tune tu kr de thoda sa yrrr