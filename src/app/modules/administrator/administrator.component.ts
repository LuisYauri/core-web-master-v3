import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.scss']
})
export class AdministratorComponent implements OnInit {

  itemModules = [
    {title: 'Empleados', icon: 'group', route: 'empleados'},
    {title: 'Herramientas', icon: 'adb', route: 'herramientas'},
    {title: 'Entretenimientos', icon: 'all_inclusive', route: 'entretenimientos'},
    {title: 'Eventos', icon: 'aspect_ratio', route: 'eventos'},
    {title: 'Laboral', icon: 'assignment_ind', route: 'laboral'},
    {title: 'Horarios', icon: 'av_timer', route: 'horarios'},
    {title: 'Sugerencias', icon: 'assistant_photo', route: 'sugerencias'},
    {title: 'Reportes', icon: 'border_color', route: 'reportes'},
];

  constructor() {
  }

  ngOnInit() {
  }

}
