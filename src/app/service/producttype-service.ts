import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {IProductType} from "../model/producttype-model";
import {SharedService} from "./sharedservice-service";
/**
 * Created by ivanchan on 16/1/2017.
 */

@Injectable()
export class ProductTypeService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, private _sharedService: SharedService) {
    this.apiPath = 'producttype';
    this.apiUrl = _sharedService.setting.apiHost + this.apiPath;
  }

  getProductType(productType: string): Observable<IProductType> {
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

  listProductTypes(): Observable<Array<IProductType>> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  addProductType(productType: IProductType): Observable<IProductType> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(productType);
    let options = new RequestOptions({headers: headers});
    return this._http.post(this.apiUrl, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  updateProductType(productType: IProductType): Observable<IProductType> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(productType);
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.apiUrl + '/' + productType.productTypeKey, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  deleteProductType(productTypeKey: string): Observable<void> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.apiUrl + '/' + productTypeKey, options)
      .map((res: Response) => {
        return;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
