import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          left: 0,
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          left: 50,
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
      transition('open => closed', [
        animate('3.1s'),
        style({ transform: 'translateX(100%)' }),
      ]),
      transition('closed => open', [animate('5.5s')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('aaaa', 'aaaaa');

    this.isOpen = true;
  }
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
