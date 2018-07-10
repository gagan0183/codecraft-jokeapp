import { Component, OnInit, Input } from '@angular/core';
import Joke from '../joke-list/joke.model';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke') data: Joke;
}
