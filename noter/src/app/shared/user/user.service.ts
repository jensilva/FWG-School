import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user.model";
import { throwError, Observable } from "rxjs";
import { Config } from "../config";
import { catchError, map, tap } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {

    }
    register({email, password}: User): Observable<void>{
       if(!email || !password){
           return throwError('Please provide both an email address and password.')
       }
       return this.http.post<void>(`${Config.apiUrl}/user/${Config.appKey}`,
       JSON.stringify({
           username: email,
           email,
           password
       }),
         {
           headers: this.getCommonHeaders()
       }
       ).pipe(
           catchError(this.handleErrors)
       );
    }
    public login({email, password}: User): Observable<void>{
        return this.http.post<void>(`${Config.apiUrl}/user/${Config.appKey}/login`,
        JSON.stringify({
            username: email,
            password
        }),
        {
            headers: this.getCommonHeaders()
        }
        ).pipe(
             map(response => response),
             tap((data : any) => {
               Config.token = data._kmd.authtoken;
           }),
            catchError(this.handleErrors)
        )
    }

    private getCommonHeaders(){
        return new HttpHeaders({
            "Content-Type": 'application/json',
            "Authorization": Config.authHeader
        })
    }

    private handleErrors(error: Response): Observable<never> {
        console.error(error);
        return throwError(error);
    }
}
