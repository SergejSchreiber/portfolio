import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  @Input() showAnimation :boolean = false;
  @Output() changeMenu = new EventEmitter<boolean>();

  changeMenuFunction(){
    this.changeMenu.emit(false);
  }

  constructor(public translate: TranslateService) {
    
  }
}