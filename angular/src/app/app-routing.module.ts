import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: 'addemp', component: AddempComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'fileupload', component: FileUploadComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
