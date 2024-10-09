import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent }, // Home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
