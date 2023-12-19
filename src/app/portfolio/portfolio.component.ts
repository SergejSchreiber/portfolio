import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  /**
   * Flag indicating if the according section is in view.
   */
  hasReachedAbout = false;
  hasReachedSkills = false;
  hasReachedPortfolio = false;

  /**
   * Listens for the window scroll event and updates visibility flags for specific sections.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkElementVisibility('portfolio-tab-stop', -600, window.innerHeight-600, 'hasReachedPortfolio');
  }

  /**
   * Checks the visibility of a specific element on the page.
   * @param elementId - The ID of the element to check.
   * @param topOffset - The top offset for visibility check.
   * @param bottomOffset - The bottom offset for visibility check.
   * @param propertyToUpdate - The property to update based on the element's visibility.
   */
  private checkElementVisibility(elementId: string, topOffset: number, bottomOffset: number, propertyToUpdate: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= topOffset && rect.bottom <= bottomOffset) {
        this[propertyToUpdate] = true;
      }
    }
  }

  /**
   * Input property to determine whether to show the menu.
   */
  @Input() showMenu: boolean = false;

  /**
   * Event emitter to notify the parent component about the change in the menu status.
   */
  @Output() changeMenu = new EventEmitter<boolean>();

  /**
   * Emits an event to change the menu status.
   */
  changeMenuFunction(){
    this.changeMenu.emit(true);
  }

  constructor(public translate: TranslateService) {}
}
