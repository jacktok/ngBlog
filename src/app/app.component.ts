import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my name'

  isTest = true;
  updateName(str: string) {
    this.name = str;
    this.isTest = str == '';
  }


}
