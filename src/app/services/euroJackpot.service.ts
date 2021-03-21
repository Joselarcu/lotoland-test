import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { EuroJackpot } from '../models/euroJackpot';
import { EuroJackpotDraw } from '../models/EuroJackpotDraw';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class EuroJackpotService {
  private url = `${environment.serverUrl}/api/drawings/euroJackpot`;

  constructor(private http: HttpClient, private alertService: AlertService) {}

  getLastDraw(): Observable<EuroJackpot> {
    return this.http.get<EuroJackpotDraw>(this.url).pipe(
      map((result) => result.last),
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.alertService.showErrors(error.message);
        return throwError(error.message);
      })
    );
  }
}
