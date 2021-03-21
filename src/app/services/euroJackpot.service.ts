import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, shareReplay } from 'rxjs/operators';
import { EuroJackpot } from '../models/euroJackpot';
import { EuroJackpotDraw } from '../models/EuroJackpotDraw';

@Injectable({
  providedIn: 'root',
})
export class EuroJackpotService {
  private url = `${environment.serverUrl}/api/drawings/euroJackpot`;

  constructor(private http: HttpClient) {}

  getLastDraw(): Observable<EuroJackpot> {
    return this.http.get<EuroJackpotDraw>(this.url).pipe(
      map((result) => result.last),
      shareReplay()
    );
  }
}
