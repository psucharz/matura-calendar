import { Component } from '@angular/core';
import { NoteInfo } from '../noteInfo.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  days: number[] = [];
  hasNote: boolean[] = [];
  currentDate: Date = new Date();
  dayNames: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const year: number = this.currentDate.getFullYear();
    const month: number = this.currentDate.getMonth();
    const numDays: number = new Date(year, month + 1, 0).getDate();
    const notes: NoteInfo[] = JSON.parse(localStorage.getItem('notes') || '[]');

    for (let i = 1; i <= numDays; i++) {
      const day: Date = new Date(year, month, i);
      const hasNote: boolean = notes.some((note) => note.day == day.getDay());
      this.days.push(i);
      this.hasNote.push(hasNote);
    }
  }
}
