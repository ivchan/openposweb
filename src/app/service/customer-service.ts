import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ICustomer} from "../model/customer-model";
import {SharedService} from "./sharedservice-service";
/**
 * Created by ivanchan on 16/1/2017.
 */

@Injectable()
export class CustomerService {
  private apiPath: string;
  private apiUrl: string;

  constructor(private _http: Http, private _sharedService: SharedService) {
    this.apiPath = 'customer';
    this.apiUrl = _sharedService.setting.apiHost + this.apiPath;
  }

  getCustomer(customer: string): Observable<ICustomer> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.get(this.apiUrl + '/' + customer, options)
      .map((res: Response) => {
        return <ICustomer>res.json();
      })
      .catch(this.handleError);
  }

  listCustomers(): Observable<Array<ICustomer>> {
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

  addCustomer(customer: ICustomer): Observable<ICustomer> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(customer);
    let options = new RequestOptions({headers: headers});
    return this._http.post(this.apiUrl, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let body = JSON.stringify(customer);
    let options = new RequestOptions({headers: headers});
    return this._http.put(this.apiUrl + '/' + customer.customerKey, body, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  deleteCustomer(customerKey: string): Observable<void> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.apiUrl + '/' + customerKey, options)
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
