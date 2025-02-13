import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TRange } from '@/types/TRange';

export class HistoricDollar {
  data: IHistoricDollar[];
  variation: number;

  constructor(data: IHistoricDollar[]) {
    this.data = data;
    this.variation = 0;
  }

  public getData() {
    return this.data;
  }

  public getVariation() {
    return this.variation;
  }


  public filterByRange(range: TRange) {
    this.data = this.data.toReversed();

    switch (range) {
      case '5d':
        this._filterFiveDays();
        break;
      case '1mo':
        this._filterOneMonth();
        break;
      case '6mo':
        this._filterSixMonth();
        break;
      case '1y':
        this._filterOneYear();
        break;
      case '5y':
        this._filterFiveYears();
        break;
      default:
        break;
    }

    this.data = this.data.toReversed();
    this._setVariation();
  }


  private _setVariation() {
    this.variation = this._getVariation(this.data[this.data.length - 1].venta, this.data[0].venta);
  }

  private _filterData(days: number, interval: number) {
    this.data = this.data.slice(0, days + 1);
    const tempArray = [];

    for (let i = 0; i < this.data.length; i += interval) {
      tempArray.push(this.data[i]);
    }

    this.data = tempArray;
  }

  private _filterFiveDays() {
    this.data = this.data.slice(0, 5);
  }

  private _filterOneMonth() {
    const daysInOneMonth = 31;
    const interval = 1;

    this._filterData(daysInOneMonth, interval);
  }

  private _filterSixMonth() {
    const daysInSixMonths = 6 * 31;
    const interval = 30;

    this._filterData(daysInSixMonths, interval);
  }

  private _filterOneYear() {
    const daysInOneYear = 365;
    const interval = 10;

    this._filterData(daysInOneYear, interval);
  }

  private _filterFiveYears() {
    const daysInFiveYears = 365 * 5;
    const interval = 100;

    this._filterData(daysInFiveYears, interval);
  }

  private _getVariation(firstPrice: number, secondPrice: number): number {
    return (firstPrice / secondPrice - 1) * 100;
  }
}
