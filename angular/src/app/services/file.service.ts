import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';
import { PermisosService } from './permisos.service';
import { Data } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url: string;
  constructor(
    private http: HttpClient,
    private servidor: WebService,
    private permisos: PermisosService
  ) {
    this.url = servidor.getUrl();
  }

  guardarFile(file: File[]): Observable<Data> {
    const formData = new FormData();
    formData.append('uploadFile', file[0], file[0].name);
    console.log(formData);
    return this.http.post<Data>(
      `${this.url}upload_galeria`,
      formData,
      this.servidor.getHeaderFile()
    );
  }
  deleteFile(directorio: string, fileName: string): boolean {
    let dataReturn = false;
    this.http
      .delete<Data>(
        `${this.url}delete_file_galeria/${directorio}/${fileName}`,
        this.servidor.getHeaderFile()
      )
      .subscribe((data) => {
        if (data.transaccion) {
          dataReturn = true;
          this.permisos.decodificarToken(data.token);
        } else {
          alert('error')
        }
      });
    return dataReturn[0];
  }

  obtenerFile(directorio: string, FileName: string): any {
    return `${this.url}file_galeria/${directorio}/${FileName}`;
  }
}
