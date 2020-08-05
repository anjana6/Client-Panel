import { Component, OnInit } from '@angular/core';
import {SettingService} from '../../services/setting.service';
import {FlashMessagesService} from 'angular2-flash-messages';

import {Setting} from '../../modules/Setting';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  settings: Setting;
  constructor(
    private settingService: SettingService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.settings = this.settingService.getSetting();
  }

  OnSubmit(): void{
    this.settingService.changeSettings(this.settings);
    this.flashMessage.show('Setting Saved',{
      cssClass: 'alert-success', timeout: 4000
    });

  }

}
