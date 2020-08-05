import { Injectable } from '@angular/core';

import {Setting} from '../modules/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setting: Setting = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true,
  }

  constructor() {
    if(localStorage.getItem('settings') != null){
      this.setting = JSON.parse(localStorage.getItem('settings'));
    }
   }

  getSetting(): Setting{
    return this.setting;
  }

  changeSettings(setting: Setting): void{
    localStorage.setItem('settings', JSON.stringify(setting));
  }
}
