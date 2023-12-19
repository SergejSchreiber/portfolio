import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  /**
   * Input property to determine whether to show the animation.
   */
  @Input() showAnimation :boolean = false;

  /**
   * Event emitter to notify the parent component about the change in the animation status.
   */
  @Output() changeMenu = new EventEmitter<boolean>();

  /**
   * Emits an event to change the animation status.
   */
  changeMenuFunction(){
    this.changeMenu.emit(false);
  }

  constructor(public translate: TranslateService) {}

}
