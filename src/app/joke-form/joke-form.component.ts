import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Joke from '../joke-list/joke.model';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {

  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  createJoke(setup: String, punchline: String) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
