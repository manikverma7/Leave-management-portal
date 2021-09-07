import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front-page/header/header.component';
import { DashboardComponent } from './front-page/dashboard/dashboard.component'
import { SidenavComponent } from './front-page/sidenav/sidenav.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule} from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule} from '@angular/material/input'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontPageComponent } from './front-page/front-page.component';
import { environment} from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { HomeComponent } from './front-page/home/home.component';
import { AuthService } from './sevices/auth.service';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { EmployeesComponent } from './employees/employees.component';
import { MaterialComponent } from './material/material.component';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    FrontPageComponent,
    HomeComponent,
    CreateLeaveComponent,
    EmployeesComponent,
    MaterialComponent,
 
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
    


  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

