import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  hasReachedAbout = false;
  hasReachedSkills = false;
  hasReachedPortfolio = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkElementVisibility('about-tab-stop', -300, window.innerHeight+300, 'hasReachedAbout');
    this.checkElementVisibility('skills-tab-stop', -200, window.innerHeight-500, 'hasReachedSkills');
    this.checkElementVisibility('portfolio-tab-stop', -600, window.innerHeight-600, 'hasReachedPortfolio');
  }

  private checkElementVisibility(elementId: string, topOffset: number, bottomOffset: number, propertyToUpdate: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= topOffset && rect.bottom <= bottomOffset) {
        this[propertyToUpdate] = true;
      } else {
        this[propertyToUpdate] = false;
      }
    }
  }

  

  scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }
}
