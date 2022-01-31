import { Injectable } from "@angular/core";
import { UserDetails } from "./UserDetails";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class CustomerService {
private apiUrl = 'http://localhost:9090/api/customer';
constructor(private http: HttpClient) {
}
createCustomer(user: UserDetails): Observable<any> {
    return this.http.post(this.apiUrl, user);
}
getCustomer(): Observable<any> {
    return this.http.get(this.apiUrl);
}
}
