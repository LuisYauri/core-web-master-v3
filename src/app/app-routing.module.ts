import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdministratorComponent} from './modules/administrator/administrator.component';
import {EmployeesComponent} from './modules/administrator/employees/employees.component';
import {ToolsComponent} from './modules/administrator/tools/tools.component';
import {EntertainmentsComponent} from './modules/administrator/entertainments/entertainments.component';
import {EventsComponent} from './modules/administrator/events/events.component';
import {LaborComponent} from './modules/administrator/labor/labor.component';
import {SchedulesComponent} from './modules/administrator/schedules/schedules.component';
import {SuggestionsComponent} from './modules/administrator/suggestions/suggestions.component';
import {ReportsComponent} from './modules/administrator/reports/reports.component';
import {LoginComponent} from './modules/login/login.component';


const routes: Routes = [
  {
    path: 'core', component: AdministratorComponent,
    children: [
      {path: 'empleados', component: EmployeesComponent},
      {path: 'herramientas', component: ToolsComponent},
      {path: 'entretenimientos', component: EntertainmentsComponent},
      {path: 'eventos', component: EventsComponent},
      {path: 'laboral', component: LaborComponent},
      {path: 'horarios', component: SchedulesComponent},
      {path: 'sugerencias', component: SuggestionsComponent},
      {path: 'reportes', component: ReportsComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
