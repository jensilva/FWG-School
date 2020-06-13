import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typedOptions = {
      stringElement: '#typed-string',
      strings: [
        'Training Bank Juros amigo',
        'Peça a portabilidade e venha ser Training Bank hoje mesmo',
        'Inovador digital e seguro'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:200,
        smartBackSpace: true,
        fadeOut: true,
        showCursor: false,
        startDelay: 1000,
        loop: true
    }

    new Typed('.typing-element', typedOptions)

  }

}
