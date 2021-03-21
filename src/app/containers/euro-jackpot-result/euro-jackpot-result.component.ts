import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { formatNumber } from '@angular/common';
import { getCurrencySymbol } from '@angular/common';
import convertDecimalToRoman from 'src/app/utils/romanNumeralConverter';
import { EuroJackpotService } from '../../services/euroJackpot.service';
import { EuroJackpot, Odds } from '../../models/euroJackpot';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-euro-jackpot-result',
  templateUrl: './euro-jackpot-result.component.html',
  styleUrls: ['./euro-jackpot-result.component.scss'],
})
export class EuroJackpotResultComponent implements OnInit {
  lastDraw$: Observable<EuroJackpot>;
  tableRows$: Observable<string[][]>;

  matches: string[] = [];
  currency: string;
  loading = false;

  constructor(
    private jackpotService: EuroJackpotService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.initMatches();

    this.lastDraw$ = this.jackpotService
      .getLastDraw()
      .pipe(tap((result) => (this.currency = result.currency)));

    this.tableRows$ = this.lastDraw$.pipe(
      map((result) => {
        return this.initRows(result.odds);
      })
    );
  }

  initMatches(): void {
    for (let i = 5; i >= 3; i--) {
      for (let j = 2; j >= 0; j--) {
        this.matches.push(
          i +
            ' Number' +
            (i > 1 ? 's ' : '') +
            ' + ' +
            j +
            ' Euronumber' +
            (j != 1 ? 's ' : '')
        );
      }
    }
    this.matches[7] = '2 Numbers + 2 Euronumbers';
    this.matches[8] = '3 Numbers + 1 Euronumbers';
    this.matches[9] = '3 Numbers + 0 Euronumbers';
    this.matches[10] = '1 Numbers + 2 Euronumbers';
    this.matches[11] = '2 Numbers + 1 Euronumbers';
  }

  initRows(odds: Odds): string[][] {
    const rows: string[][] = [];
    let index = 0;
    delete odds.rank0;
    for (let rank in odds) {
      const rankIdx = Number(rank.slice(4, rank.length));
      rows[rankIdx] = [
        convertDecimalToRoman(rankIdx),
        this.matches[index],
        formatNumber(odds[rank].winners, 'en-US', '1.0-3') + 'x',
        getCurrencySymbol(this.currency, 'wide', 'en-IE') +
          formatNumber(odds[rank].prize, 'en-US', '1.0-3'),
      ];

      index++;
    }

    return rows;
  }
}
