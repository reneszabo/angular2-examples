# Tutorial

## step 1

create 3 components

```bash
$ ng g component pages/home/my-home
$ ng g component pages/about/my-about
$ ng g component pages/errors/my-error
```

## step 2

Edit **app-rounting.module.ts**

```js
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
```

## step 3

Add navegation on **app.component.html** a tags user special attr **routerLink="/"**

```html
<ul>
  <li>
    <a routerLink="/">Home</a>
  </li>
  <li>
    <a routerLink="/about">About</a>
  </li>
</ul>
<router-outlet></router-outlet>

```

