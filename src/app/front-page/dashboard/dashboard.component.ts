import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any = JSON.parse(sessionStorage.getItem('user') || 'null');
  constructor() {}

  ngOnInit(): void {}
}
