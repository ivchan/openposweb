import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IProductType} from "../model/producttype.model";
/**
 * Created by ivanchan on 16/1/2017.
 */

@Injectable()
export class ProductTypeService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http) {
    this.apiPath = 'producttype';
    this.apiUrl = '';
  }

  public getProductType(productType: string): Observable<IProductType> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl + '/' + productType, options)
      .map((res: Response) => {
        return <IProductType>res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
