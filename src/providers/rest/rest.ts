import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Api} from "..";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

    api: Api;

    constructor(public http: HttpClient) {
        this.api = new Api(http);
        console.log('Hello RestServiceProvider Provider');
    }

    getGoods() {
        return new Promise(resolve => {
            this.http.get(this.api.url +'/getGood').subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
