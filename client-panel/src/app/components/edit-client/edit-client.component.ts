import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import {ClientService} from '../../services/client.service';
import {Client} from '../../modules/Client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  } ;
  id: string;

  disableBalanceOnEdit = true;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client; 
      console.log(client);
    })
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}){
    if(!valid){
      this.flashMessage.show('Please Fill Correclty', {
        cssClass: 'alert-danger', timeout: 4000
      }); 
    }else{
      value.id = this.id
      this.clientService.updateClient(value);
      this.flashMessage.show('Successfully Update',{
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate([`/client/${this.id}`]);
    }
  }

}
