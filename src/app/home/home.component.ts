import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  // DON'T KNOW ABOUT IT. Study
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
