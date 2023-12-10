import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
