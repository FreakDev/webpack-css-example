quick repository to keep (and share with anyone who wants it) this webpack starter kit

integrate babel transpilation of *.js files  
integrate sass transpilation of *.sass files

by default configured to add suffix (hash) to the generated CSS class (to help with unique name when using BEM CSS convention)  
-> edit this in webpack/css.loader.js file

you may pass an env property on the command line, example :

```sh
$> webpack --env [prod|dev]
```

in prod environnment files are minified with uglifyJS, in dev environnment files are transpiled and concateneted (a sourcemap is also generated for each js file)

all outputs go to build folder

fork from : https://github.com/bensmithett/webpack-css-example