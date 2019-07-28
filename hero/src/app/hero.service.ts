import { Injectable } from '@angular/core';
import { HEROES } from './mock.hero';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched Heroes');
    return of(HEROES);
  }
}
