const translateMonths: Record<string, string> = {
  Jan: 'ene',
  Feb: 'feb',
  Mar: 'mar',
  Apr: 'abr',
  May: 'may',
  Jun: 'jun',
  Jul: 'jul',
  Aug: 'ago',
  Sep: 'sep',
  Oct: 'oct',
  Nov: 'nov',
  Dec: 'dic',
};

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

  getTime(): string {
    return this.date.toLocaleString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  setDate(date: Date): void {
    this.date = new Date(date);
  }

  getFormattedDateDayMonth(): string {
    const date = this.date.toUTCString();
    const day = date.slice(5, 7);
    const month = date.slice(8, 11);

    return `${day} ${translateMonths[month]}`;
  }

  getFormattedDateMonthYear(): string {
    const date = this.date.toUTCString();

    const month = date.slice(8, 11);
    const year = date.slice(14, 16);

    return `${translateMonths[month]} ${year}`;
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
    return `${day}.${month}.${year}`;
  }

  getFormattedDateBarWithTime(): string {
    return this.date.toLocaleString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
