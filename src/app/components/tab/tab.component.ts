import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  navLinks: Array<{}> = [
    { path: '/counter', label: 'Counter'},
    { path: '/filters', label: 'Filters'}
  ];
}
