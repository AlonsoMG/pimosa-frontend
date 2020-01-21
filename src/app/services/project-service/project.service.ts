import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Industry } from 'src/app/models/industry';
import { catchError } from 'rxjs/operators';
import { GET_INDUSTRY_LIST_URL, CREATE_PROJECT_URL, GET_PROJECT_URL, GET_PROJECT_LIST_URL, UPDATE_PROJECT_URL } from './../../api/endpoints';
import { CreateProjectResponse } from 'src/app/models/responses';
import { Project } from 'src/app/models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  createProject(
    name: string,
    code: string,
    purchaseOrder: string,
    description: string,
    industry: string,
    startDate: string,
    plannedEndDate: string,
  ): Observable<CreateProjectResponse> {
    const data = {
      'name': name,
      'code': code,
      'purchaseOrder': purchaseOrder,
      'description': description,
      'industry': industry,
      'startDate': startDate,
      'plannedEndDate': plannedEndDate
    }
    return this.http.post<CreateProjectResponse>(CREATE_PROJECT_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<CreateProjectResponse>('createProject', null))
      );
  }

  getIndustryList(): Observable<Industry[]> {
    const data = {}
    return this.http.post<Industry[]>(GET_INDUSTRY_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Industry[]>('getIndustryList', []))
      );
  }

  getProject(projectPk: string): Observable<Project> {
    const data = {
      'projectPk': projectPk
    }
    return this.http.post<Project>(GET_PROJECT_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Project>('getProject', null))
      );
  }

  getProjectList(): Observable<Project[]> {
    const data = {}
    return this.http.post<Project[]>(GET_PROJECT_LIST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<Project[]>('getProjectList', []))
      );
  }

  updateProject(
    projectPk: string,
    name: string,
    code: string,
    purchaseOrder: string,
    description: string,
    industry: string,
    startDate: string,
    plannedEndDate: string,
  ): Observable<CreateProjectResponse> {
    const data = {
      'projectPk': projectPk,
      'name': name,
      'code': code,
      'purchaseOrder': purchaseOrder,
      'description': description,
      'industry': industry,
      'startDate': startDate,
      'plannedEndDate': plannedEndDate
    }
    console.log(data);
    return this.http.post<CreateProjectResponse>(UPDATE_PROJECT_URL, data, this.httpOptions)
      .pipe(
        catchError(this.handleError<CreateProjectResponse>('updateProject', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} => ${error.message}`)
      return of(result as T);
    }
  }
}
