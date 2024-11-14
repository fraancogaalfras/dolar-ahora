export class HandleDate {
  date: Date;
  constructor(date: Date = new Date()) {
    this.date = date;
  }

  addDays(days: number): Date {
    this.date.setDate(this.date.getDate() + days);
    return this.date;
  }

  subtractDays(days: number): Date {
    this.date.setDate(this.date.getDate() - days);
    return this.date;
  }

  getFirstDayOfMonth(): Date {
    return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  }

  getLastDayOfMonth(): Date {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  }

  getYear(): number {
    return this.date.getFullYear();
  }

  getMonth(): number {
    return this.date.getMonth() + 1;
  }

  getDay(): number {
    return this.date.getDate();
  }

  setDate(date: Date): void {
    this.date = new Date(date);
  }

  getFormattedDateDash(): string {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const day = String(this.date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getFormattedDateBar(): string {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const day = String(this.date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  getFormattedDateDot(): string {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const day = String(this.date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }
}
