import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';
import { PermisosService } from './permisos.service';
import { Data } from '../models/data';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url: string;
  constructor (private http:HttpClient,
    private servidor: WebService,
    private permisos:PermisosService ) {
      this.url=servidor.getUrl()
    }
    insert(endPoint: string,dataInsert:object):Array<any>{
      let returndata:Array<any>=[];
      this.http.post<Data>(`${this.url}${endPoint}`,dataInsert,this.servidor.getHeader1())
      .subscribe(data=>{
        if(data.transaccion){
          returndata =data.data;
          this.permisos.decodificarToken(data.token);
        }else{
           alert ('error')
        }
      });
      return returndata;
      }
      delete(endPoint: string, _id: string): Array<any> {
        let returnData: Array<any> = [];
        this.http
          .delete<Data>(`${this.url}${endPoint}/${_id}`, this.servidor.getHeader1())
          .subscribe((data) => {
            if (data.transaccion) {
              returnData = data.data;
              this.permisos.decodificarToken(data.token);
            } else {
              alert(data.msg);
            }
          });
        return returnData;
      }
      put(endPoint: string, _id: string,Data: object): Array<any> {
        let returnData: Array<any> = [];
        this.http.put<Data>(
            `${this.url}${endPoint}/${_id}`,Data,this.servidor.getHeaders()
          )
          .subscribe((data) => {
            if (data.transaccion) {
              returnData = data.data;
              this.permisos.decodificarToken(data.token);
            } else {
            }
          });
        return returnData;
      }
      post(endPoint: string,dataSend: object): Array<any> {
        let returnData: Array<any> = [];
        this.http
          .post<Data>(
            `${this.url}${endPoint}`,
            dataSend,
            this.servidor.getHeaders()
          )
          .subscribe((data) => {
            if (data.transaccion) {
              returnData = data.data;
              this.permisos.decodificarToken(data.token);
            } else {
              alert(data.msg);
            }
          });
        return returnData;
      }
}
