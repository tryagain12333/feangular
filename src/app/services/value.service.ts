import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../models/value.model';

//  sủa cái này theo link và ngoài ra ko cần sửa gì
const baseUrl = 'http://localhost:8080/api/values';

@Injectable({
    providedIn: 'root',
})
export class ValueService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Value[]> {
        return this.http.get<Value[]>(baseUrl);
    }

    get(id: any): Observable<Value> {
        return this.http.get<Value>(`${baseUrl}/${id}`);
    }

    create(data: any): Observable<any> {
        return this.http.post(baseUrl, data);
    }

    update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
    }

    findByTitle(sreachValue: any): Observable<Value[]> {
        // Sửa cái tenbomon theo giá trị cần tìm kiếm
        return this.http.get<Value[]>(`${baseUrl}?value1=${sreachValue}`);
    }
}
