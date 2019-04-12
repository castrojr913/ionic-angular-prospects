import { Component } from '@angular/core';
import { debug } from 'util';
import { LogHelper } from '../helpers/log.helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    const helper = new LogHelper();
    helper.debug('Welcome to HomePage!!');
  }

}
