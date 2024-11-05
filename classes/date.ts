export class HandleDate {
  date: Date;
  constructor(date: Date = new Date()) {
    this.date = date;
  }

  addDays(days: number) {
    this.date.setDate(this.date.getDate() + days);
    return this.date;
  }

  subtractDays(days: number) {
    this.date.setDate(this.date.getDate() - days);
    return this.date;
  }

  getFirstDayOfMonth() {
    return new Date(this.date.getFullYear(), this.date.getMonth(), 1);
  }

  getLastDayOfMonth() {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
  }

  getYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getDay() {
    return this.date.getDate();
  }

  setDate(date: Date) {
    this.date = new Date(date);
  }
  
  getFormattedDateDash() {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const day = String(this.date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  getFormattedDateBar() {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const day = String(this.date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }

  getFormattedDateDot() {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const day = String(this.date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }
}
