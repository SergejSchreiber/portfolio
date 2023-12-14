import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService) {
    translate.use('en');
}

  public showMenu: boolean = false;
  public showAnimation: boolean = false;

  menuChanges(opened: boolean) {

    if(opened == false){
      this.showAnimation = opened;
      setTimeout(() => {
        this.showMenu = opened;
      }, 250)
    } else {
      this.showAnimation = opened;
      this.showMenu = opened;
    }
  } 
}
