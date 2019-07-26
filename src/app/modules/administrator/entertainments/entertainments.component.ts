import {Component, OnInit} from '@angular/core';
import {EntertainmentsService} from '../../../services/administrator/entertainments.service';
import {editDataModel, entertainmentsModel, sendDataAddModel} from '../../../models/administrator/entertainments.modal';
import Swal from "sweetalert2";

@Component({
  selector: 'app-entertainments',
  templateUrl: './entertainments.component.html',
  styleUrls: ['./entertainments.component.scss']
})
export class EntertainmentsComponent implements OnInit {

  pageActual:number = 1;

  itemsHeader = {title: 'Entretenimientos', sub_title: 'core'};

  titleTable = 'Lista de Cuentas';
  listNamesTable = ['Titulo', 'Cuenta', 'Contraseña', 'Acciones'];
  listEntertainments: entertainmentsModel[];

  //DataAddModal
  titleAddModal = 'COMENZAR REGISTRO DE CUENTA';
  sendDataAddModal: sendDataAddModel = {name:'',username:'',password:''};

  //DataEditModal
  titleEditModal = 'COMENZAR A EDITAR ESTA CUENTA';
  dataModal: entertainmentsModel = {id:0,name:'',username:'',password:'',created_at:'',updated_at:''}
  dataEditModal: editDataModel = {name:'',username:'',password:''};

  constructor(private entertainmentsService: EntertainmentsService) {
  }

  ngOnInit() {
    this.getListEntertainments();
  }

  async setEditAccount() {
    // @ts-ignore
    jQuery('#editModal').modal('hide');
    try{
      const response = await this.entertainmentsService.editAccount(this.dataModal.id.toString(),this.dataEditModal).toPromise();
      console.log(this.dataEditModal);
      this.sweetAlertConfirm("Actualizado correctamente.");
      this.getListEntertainments();
    }catch (e) {
      console.log(e)
    }
    this.clearVariables();
  }

  async deleteAccount(id: number) {
    try{
      const response = await this.entertainmentsService.deleteAccount(id.toString()).toPromise();
      this.sweetAlertConfirm("Eliminado correctamente.");
      this.getListEntertainments();
    }catch (e) {
      console.log(e);
    }
  }

  async getListEntertainments() {
    try {
      // @ts-ignore
      this.listEntertainments = await this.entertainmentsService.getListEntertainments().toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  async setAddAccount(){
    // @ts-ignore
    jQuery('#addModal').modal('hide');
    try{
      const response = await this.entertainmentsService.setAddAccount(this.sendDataAddModal).toPromise();
      this.sendDataAddModal = {name:'',username:'',password:''};
      this.sweetAlertConfirm("Registrado correctamente.");
      this.getListEntertainments();
    }catch (e) {
      console.log(e);
    }
  }

  sweetAlertQuestion(id: number){
    Swal.fire({
      title: '¿Estas seguro de eliminarlo?',
      text: "Se eliminará la información de la lista.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
        this.deleteAccount(id);
      }
    })
  }

  sweetAlertConfirm(text:string){
    Swal.fire({
      type: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  editAccount(account: entertainmentsModel) {
    this.dataModal  = account;
    this.dataEditModal.name = account.name;
    this.dataEditModal.username = account.username;
    this.dataEditModal.password = account.password;
  }

  clearVariables(){
    this.dataModal= {id:0,name:'',username:'',password:'',created_at:'',updated_at:''}
    this.dataEditModal = {name:'',username:'',password:''};
  }
}
