import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:44363/';
  private MyApiUrl = 'api/tarjeta/'

  constructor(private http: HttpClient) { }

  getListTarjetas(): Observable<any>{
   return this.http.get(this.myAppUrl + this.MyApiUrl);
  }

  deleteTarjeta(id : number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.MyApiUrl + id)

  }

  saveTarjeta (tarjeta:any): Observable<any>{
    return this.http.post(this.myAppUrl + this.MyApiUrl, tarjeta/*body*/)
  }

  updateTarjeta(id: number, tarjeta: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.MyApiUrl + id, tarjeta);

  }
}
