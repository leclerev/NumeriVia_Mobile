import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule);


// ---------
// Call the Get all Goods function

// fetch("http://localhost:8000/api/getGood").then((data) => {
//     allGoodString = "{}";
//
//     data.body.getReader().read().then((test) => {
//        console.log(test);
//     });
//
//     var allGoods: JSON = JSON.parse(allGoodString);
//
//     console.log(allGoods);
// }).catch((error) => {
//     console.error(error);
// });