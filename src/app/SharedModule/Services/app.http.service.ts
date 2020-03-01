import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Category } from 'src/app/Models/App.Category.Model';

@Injectable()

export class HttpService{
    private url: string;

    // Inject http client and this will be resolved by HttpClientModule
    // HttpClientModule is already loaded in SharedModule using imports
    constructor(
        private http: HttpClient
    ){
        this.url = "https://localhost:44317/";
    }

    getData() : Observable<Category[]>{
        let resp : Observable<Category[]> = null;
        resp = this.http.get<Category[]>(`${this.url}/api/CategoryAPI`);
        return resp;
    }

    postData(cat : Category) : Observable<Category>{
        let resp : Observable<Category> = null;
        const options = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
        resp = this.http.post<Category>(`${this.url}/api/CategoryAPI`, cat, options);
        return resp;
    }

    putData(cat : Category) : Observable<Category>{
        let resp : Observable<Category> = null;
        const options = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
        resp = this.http.put<Category>(`${this.url}/api/CategoryAPI/${cat.CategoryRowId}`, cat, options);
        return resp;
    }

    deleteData (id:number) : Observable<boolean>{
        let resp : Observable<boolean> = null;
        resp = this.http.delete<boolean>(`${this.url}/api/CategoryAPI/${id}`);
        return resp;
    }
}