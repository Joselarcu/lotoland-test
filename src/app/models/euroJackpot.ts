export interface EuroJackpot {
  nr: number;
  currency: string;
  date: DrawDate;
  closingDate: string;
  lateClosingDate: string;
  drawingDate: string;
  jackpot: string;
  marketingJackpot: string;
  specialMarketingJackpot: string;
  climbedSince: number;
  numbers?: number[];
  euroNumbers?: number[];
  winners: number;
  odds?: Odds;
}

export interface DrawDate {
  full: string;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  dayOfWeek: string;
}

export interface Rank {
  winners: number;
  specialPrize: number;
  prize: number;
}

export interface Odds {
  rank0: Rank;
  rank1: Rank;
  rank2: Rank;
  rank3: Rank;
  rank4: Rank;
  rank5: Rank;
  rank6: Rank;
  rank7: Rank;
  rank8: Rank;
  rank9: Rank;
  rank10: Rank;
  rank11: Rank;
  rank12: Rank;
}
