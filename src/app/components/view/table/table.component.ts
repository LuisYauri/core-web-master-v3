import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() titleTable: string;
  @Input() listNames: [string];
  @Input() listAccounts: [object];
  @Input() listActions: [string];
  listNameTables = [];
  listAccountsTable = [];
  listValue = [];

  constructor() {
  }

  ngOnInit() {
    this.listNameTables.push(...this.listNames);
    if (this.listActions != null) {
      this.listNameTables.push('Acciones');
    }
    for(let acc of this.listAccounts){
      this.listValue = [];
      for (let [key, value] of Object.entries(acc)) {
        this.listValue.push(value)
      }
      this.listAccountsTable.push(this.listValue);
    }
  }

}
