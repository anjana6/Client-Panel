import { Component, OnInit } from '@angular/core';

import {Setting} from '../../modules/Setting';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  settings: Setting;
  constructor() { }

  ngOnInit(): void {
  }

}
