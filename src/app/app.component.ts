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

  /**
   * Property to control the visibility of the menu.
   */
  public showMenu: boolean = false;

  /**
   * Property to control the visibility of the animation.
   */
  public showAnimation: boolean = false;

  /**
   * Handles changes in the menu status and triggers animations accordingly.
   * @param opened - A boolean indicating whether the menu is opened or closed.
   */
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
