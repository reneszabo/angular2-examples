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