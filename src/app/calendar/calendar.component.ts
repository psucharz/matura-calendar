import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  days: number[] = [];
  currentDate: Date = new Date();
  dayNames: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const year: number = this.currentDate.getFullYear();
    const month: number = this.currentDate.getMonth();
    const numDays: number = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= numDays; i++) {
      this.days.push(i);
    }
  }
}
