import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  itemsHeader = {title: 'Herramientas', sub_title: 'core'};
  constructor() { }

  ngOnInit() {
  }

}
