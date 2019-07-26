import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  itemsHeader = {title: 'Horarios', sub_title: 'core'};
  constructor() { }

  ngOnInit() {
  }

}
