import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.page.html',
  styleUrls: ['./remember-password.page.scss'],
})
export class RememberPasswordPage implements OnInit {

  email='';

  constructor() { }

  ngOnInit() {
  }

  async onBtnSendPasswordClicked(){

  }

}
