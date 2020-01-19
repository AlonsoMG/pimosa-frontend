import { CreateMachineryResponse } from './../../models/responses';
import { Work } from './../../models/work';
import { PowerSource } from './../../models/power-source';
import { Operation } from './../../models/operation';
import { Displacement } from './../../models/displacement';
import { GET_MACHINERY_TYPE_LIST_URL, GET_DISPLACEMENT_LIST_URL, GET_OPERATION_LIST_URL, GET_POWER_SOURCE_LIST_URL, GET_WORK_LIST_URL, CREATE_MACHINERY_URL } from './../../api/endpoints';
import { MachineryType } from './../../models/machinery-type';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineryService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  createMachinery(
    code: string,
    name: string,
    brand: string,
    price: number,
    maintenanceCost: number,
    acquisitionDate: string,
    type: string,
    powerSource: string,
    displacement: string,
    operation: string,
    work: string
  ): Observable<CreateMachineryResponse> {
    const data = {
      'code': code,
      'name': name,
      'brand': brand,
      'price': price,
      'maintenanceCost': maintenanceCost,
      'acquisitionDate': acquisitionDate,
      'type': type,
      'powerSource': powerSource,
      'displacement': displacement,
      'operation': operation,
      'work': work
    }
    return this.http.post<CreateMachineryResponse>(CREATE_MACHINERY_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<CreateMachineryResponse>('createMachinery', null))
      );
  }

  getDisplacementList(): Observable<Displacement[]> {
    const data = {}
    return this.http.post<Displacement[]>(GET_DISPLACEMENT_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Displacement[]>('getDisplacementList', []))
      );
  }

  getMachineryTypeList(): Observable<MachineryType[]> {
    const data = {}
    return this.http.post<MachineryType[]>(GET_MACHINERY_TYPE_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<MachineryType[]>('getMachineryTypeList', []))
      );
  }

  getOperationList(): Observable<Operation[]> {
    const data = {}
    return this.http.post<Operation[]>(GET_OPERATION_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Operation[]>('getOperationList', []))
      );
  }

  getPowerSourceList(): Observable<PowerSource[]> {
    const data = {}
    return this.http.post<PowerSource[]>(GET_POWER_SOURCE_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<PowerSource[]>('getPowerSourceList', []))
      );
  }

  getWorkList(): Observable<Work[]> {
    const data = {}
    return this.http.post<Work[]>(GET_WORK_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Work[]>('getWorkList', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} => ${error.message}`)
      return of(result as T);
    }
  }
}
