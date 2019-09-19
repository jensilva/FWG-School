import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Color } from './color-cube.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorCubeService {
  private colorAPI: string;

  constructor(private http: HttpClient) {
    this.colorAPI = `${environment.service}/colors`;
  }

  public createColor(name: string, color: string): Observable<void> {
    return this.http.post<void>(this.colorAPI, { name, color });
  }

  public getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.colorAPI);
  }
}
