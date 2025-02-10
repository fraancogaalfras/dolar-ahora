import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TRange } from '@/types/TRange';
import { HandleDate } from './date';

export class HistoricDollar {
  data: IHistoricDollar[];
  labels: string[];
  variation: number;

  constructor(data: IHistoricDollar[]) {
    this.data = data;
    this.labels = [];
    this.variation = 0;
  }

  public getData() {
    return this.data;
  }

  public getVariation() {
    return this.variation;
  }

  public getLabels() {
    return this.labels;
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
    this.labels = this.labels.toReversed();
    this.labels = this.data.map((day) => new HandleDate(new Date(day.fecha)).getFormattedDateDayMonth());

    this.variation = this._getVariation(this.data[this.data.length - 1].venta, this.data[0].venta);
  }

  private _filterFiveDays() {
    this.data = this.data.slice(0, 5);
  }

  private _filterOneMonth() {
    const daysInSixMonths = 31;
    const interval = 5;

    this.data = this.data.slice(0, daysInSixMonths + 1);
    const tempArray = [];

    for (let i = 0; i < this.data.length; i += interval) {
      tempArray.push(this.data[i]);
    }

    this.data = tempArray;
  }

  private _filterSixMonth() {
    const daysInSixMonths = 6 * 31;
    const interval = 28;

    this.data = this.data.slice(0, daysInSixMonths + 1);
    const tempArray = [];

    for (let i = 0; i < this.data.length; i += interval) {
      tempArray.push(this.data[i]);
    }

    this.data = tempArray;
  }

  private _filterOneYear() {
    const daysInOneYear = 365;
    const interval = 60;

    this.data = this.data.slice(0, daysInOneYear + 1);
    const tempArray = [];

    for (let i = 0; i < this.data.length; i += interval) {
      tempArray.push(this.data[i]);
    }

    this.data = tempArray;
  }

  private _filterFiveYears() {
    const daysInFiveYears = 365 * 5;
    const interval = 300;

    this.data = this.data.slice(0, daysInFiveYears + 1);
    const tempArray = [];

    for (let i = 0; i < this.data.length; i += interval) {
      tempArray.push(this.data[i]);
    }

    this.data = tempArray;
  }

  private _getVariation(firstPrice: number, secondPrice: number): number {
    return (firstPrice / secondPrice - 1) * 100;
  }
}
