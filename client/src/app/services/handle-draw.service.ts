import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDraw } from '../models/draw.model';
import { IResponseApi } from '../models/utils.model';
import { Helpers } from '../core/utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class HandleDrawService {

  private _http = inject(HttpClient);

  public saveDraw(options: { data: IDraw | any }): Observable<IDraw> {
    const formData = Helpers.appendDataToForm(options.data);
    return this._http.post<IResponseApi>(`/server/api/draw`, formData).pipe(map(response => {
      if (response?.success) {
        return response.data;
      } else {
        throw response.message || 'error';
      }
    }));
  }
}
