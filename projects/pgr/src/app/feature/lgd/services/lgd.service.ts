import { Injectable } from '@angular/core';
import { environment } from 'projects/pgr/src/environments/environment';
import { HttpService } from 'projects/ui-tools/src/public-api';
import { Observable, map } from 'rxjs';
import { IApiConfig } from '../interfaces/api-config-interface';
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class LgdService {
  constructor(private _http: HttpService) {}

  getStates(
    apiConfig: IApiConfig,
    offset: number = 0,
    limit: number = 10
  ): Observable<any> {
    return this.getStateDetails(apiConfig, offset, limit).pipe(
      map((data) => data.records)
    );
  }

  getStateDetails(
    apiConfig: IApiConfig,
    offset: number = 0,
    limit: number = 10
  ): Observable<any> {
    let url = `https://api.data.gov.in/resource/${apiConfig.api}?api-key=${atob(
      environment.apiKey
    )}&format=json&offset=${offset}&limit=${limit}`;
    if (apiConfig.type === 'district' || apiConfig.type === 'subdistrict')
      url += `&filters[state_census2011_code]=${apiConfig.state}`;
    if (apiConfig.type === 'subdistrict')
      url += `&filters[district_census2011_code]=${apiConfig.district}`;
    if (apiConfig.type === 'village') {
      url += `&filters[statecode]=${apiConfig.state}&filters[districtcode]=${apiConfig.district}&filters[subdistrictcode]=${apiConfig.subdistrict}`;
    }
    return this._http.get(url);
  }

  getColDef(apiConfig: IApiConfig): ColDef[] {
    const { type } = apiConfig;
    const lgdName = type.charAt(0).toUpperCase() + type.substr(1).toLowerCase();
    const colDef: ColDef[] = [
      {
        field: `${type}_census2011_code`,
        sort: 'asc',
        headerName: `${lgdName} Code`,
      },
      { field: `${type}_name_english`, headerName: `${lgdName} Name` },
      ...apiConfig.colDef,
    ];
    return colDef;
  }
}
