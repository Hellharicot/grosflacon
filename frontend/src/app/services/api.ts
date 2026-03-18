import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormStep } from '@app/pages/new-tasting-note/new-tasting-note.component';

export interface ApiResponse {
  success: string;
  data: FormStep[];
}

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  private http = inject(HttpClient);
  getTest() {
    return this.http.get<ApiResponse>('/api/refs/criteria');
  }
}
