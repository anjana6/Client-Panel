import { Injectable } from '@angular/core';

import {Setting} from '../modules/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setting: Setting = {
    allowRegisteration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false,
  }

  constructor() { }

  getSetting(): Setting{
    return this.setting;
  }
}
