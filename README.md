# Tutorial

## step 1

Add node dependencies 

```bash
npm install bootstrap-sass --save
npm install jquery --save
```

## step 2

Edit global sass **styles.scss** to import bootstrap

```scss
/* You can add global styles to this file, and also import other style files */
$icon-font-path: '~bootstrap-sass/assets/fonts/bootstrap/';
$font-size-base: 16px; // Override BS
@import '~bootstrap-sass/assets/stylesheets/bootstrap';
```

## step 3

Edit **.angular-cli.json** since bootstrap is a third party lib and also add jquery since some of bootstrap components depend on jquery 

Locate the script array and add in, bootstrap JS and jquery JS

```json
{
 
  ...
 
  "scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js"
  ]
      
  ...
  
}
```

## step 4

Edit **app.component.html** to user navbar component and edit **my-home.component.html** to use a container

**app.component.html**

```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" routerLink="/">Tutorial</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<router-outlet></router-outlet>
```

**my-home.component.html**

```html
<div class="container">
  <p>
    my-home works!
  </p>
</div>

```