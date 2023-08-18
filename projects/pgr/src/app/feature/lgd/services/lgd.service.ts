import { Injectable } from '@angular/core';
import { HttpService } from 'projects/ui-tools/src/public-api';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LgdService {
  constructor(private _http: HttpService) {}

  getStates(offset: number, limit: number): Observable<any> {
    const api = '579b464db66ec23bdd0000014df0d48b94c242cf44d72456810d8dea';
    const format = 'json';
    const url =
      'https://api.data.gov.in/resource/a71e60f0-a21d-43de-a6c5-fa5d21600cdb?api-key=' +
      api +
      `&format=${format}&offset=${offset}&limit=${limit}`;
    return this._http.get(url).pipe(map((data) => data.records));
  }
}
