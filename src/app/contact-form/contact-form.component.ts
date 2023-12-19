import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {

  /**
   * Scrolls to the top of the page.
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  /**
   * Indicates whether the send button is disabled.
   */
  isSendButtonDisabled = true;

  /**
   * Called when the component is initialized.
   * Checks the state of the privacy policy checkbox and disables the send button accordingly.
   */
  ngOnInit() {
    this.isSendButtonDisabled = !(document.getElementById('policyCheckbox') as HTMLInputElement)?.checked;
  }

  /**
   * Updates the state of the send button based on the privacy policy checkbox.
   */
  updateSendButtonState() {
    this.isSendButtonDisabled = !(document.getElementById('policyCheckbox') as HTMLInputElement)?.checked;

  }

  /**
   * Reference to form elements and other DOM elements.
   */
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  /**
   * Sends the form and displays a loading animation.
   */
  async sendMail() {
    this.sendMailInputFieldsDisable();
    this.showLoadIcon();
    let fd = new FormData();
    this.settingFormData(fd);
    await fetch(
      'https://sergej-schreiber.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
    this.hideLoadIcon();
    this.sendMailInputFieldsAble();
    this.resetInputs();
  }

  /**
   * Displays the loading animation and hides the "Send message" text.
   */
  showLoadIcon() {
    document.getElementById('load-icon').style.display = 'block';
    document.getElementById('send-message-text').style.display = 'none';
  }

  /**
   * Hides the loading animation and shows the "Send message" text.
   */
  hideLoadIcon() {
    document.getElementById('load-icon').style.display = 'none';
    document.getElementById('send-message-text').style.display = 'block';
    document.getElementById('send-confirmation').style.display = 'block';
  }

  /**
   * Sets the form data for the fetch request.
   * @param fd - FormData object containing the form data.
   */
  settingFormData(fd: FormData) {
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
  }

  /**
   * Disables the input fields and the send button.
   */
  sendMailInputFieldsDisable() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  /**
   * Enables the input fields and the send button.
   */
  sendMailInputFieldsAble() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }

  /**
   * Resets the input fields.
   */
  resetInputs() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

  /**
   * Validates a form field and displays error messages if necessary.
   * @param field - The form field to validate.
   * @param fieldName - The name of the field (e.g., 'name', 'email', 'message').
   */
  validateField(field: HTMLInputElement | HTMLTextAreaElement, fieldName: string) {
    const errorNoteId = `${fieldName}-error-note`;
    const errorNote = document.getElementById(errorNoteId);
    const errorImgId = `${fieldName}-error-img-invalid`;
    const errorImg = document.getElementById(errorImgId);
    const errorImgValidId = `${fieldName}-error-img-valid`;
    const errorImgValid = document.getElementById(errorImgValidId);

    if (field.value.trim() === '') {
      if (errorNote) {
        errorNote.style.display = 'block';
        errorImg.style.display = 'block';
        errorImgValid.style.display = 'none';
      }
      field.style.borderColor = 'red';
    } else {
      if (errorNote) {
        errorNote.style.display = 'none';
        errorImg.style.display = 'none';
        errorImgValid.style.display = 'block';
      }
      field.style.borderColor = '#70E61C';
    }
  }

  constructor(public translate: TranslateService) {}
  
}
