import { Component, OnInit, ViewChild } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';

import {Client} from '../../modules/Client';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  } ;

  disabaleBalnaceOnAdd: boolean = true;
  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private clientService: ClientService
    ) { }

  ngOnInit(): void {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}): void{
    if (this.disabaleBalnaceOnAdd) {
      value.balance = 0;
    }

    if (!valid){
      this.flashMessage.show('Plese Fill form Correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }else{

      this.clientService.newClient(value);

      this.flashMessage.show('Client is Added ', {
        cssClass: 'alert-success', timeout: 4000
      });

      this.router.navigate(['/']);
    }
  }

}
