import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Joke from '../joke-list/joke.model';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke') data: Joke;
  @Input() index: Number;
  @Output() deleted =  new EventEmitter<Number>();

  delete(index) {
    this.deleted.emit(index);
  }
}
