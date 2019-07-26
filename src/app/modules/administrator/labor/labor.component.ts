import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss']
})
export class LaborComponent implements OnInit {
  itemsHeader = {title: 'Laboral', sub_title: 'core'};
  constructor() { }

  ngOnInit() {
  }

}
