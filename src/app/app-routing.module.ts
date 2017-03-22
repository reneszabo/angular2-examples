import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './pages/home/my-home/my-home.component';
import { MyAboutComponent } from './pages/about/my-about/my-about.component';
import { MyErrorComponent } from './pages/errors/my-error/my-error.component';

const routes: Routes = [
  { path: '', component: MyHomeComponent  },
  { path: 'about', component: MyAboutComponent  },
  { path: '**', component: MyErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
