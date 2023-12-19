import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /**
   * Scrolls to the top of the page.
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

}
