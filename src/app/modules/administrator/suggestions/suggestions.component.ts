import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  itemsHeader = {title: 'Sugerencias', sub_title: 'core'};
  constructor() { }

  ngOnInit() {
  }

}
