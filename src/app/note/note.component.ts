import { Component, OnInit } from '@angular/core';
import { NoteInfo } from '../noteInfo.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  note: NoteInfo = {
    day: 0,
    startHour: '',
    tags: [],
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    if (savedNotes.length > 0) {
      console.log('Saved notes:', savedNotes);
    }
  }

  onSubmit() {
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    savedNotes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    console.log('Submitted note:', this.note);
  }
}
