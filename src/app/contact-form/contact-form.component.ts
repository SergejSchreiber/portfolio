import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  isSendButtonDisabled = true;

  ngOnInit() {
    this.isSendButtonDisabled = !(document.getElementById('policyCheckbox') as HTMLInputElement)?.checked;
  }

  updateSendButtonState() {
    this.isSendButtonDisabled = !(document.getElementById('policyCheckbox') as HTMLInputElement)?.checked;

  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    this.sendMailInputFieldsDisable();
    //Animation anzeigen
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

  showLoadIcon() {
    document.getElementById('load-icon').style.display = 'block';
    document.getElementById('send-message-text').style.display = 'none';
  }

  hideLoadIcon() {
    document.getElementById('load-icon').style.display = 'none';
    document.getElementById('send-message-text').style.display = 'block';
    document.getElementById('send-confirmation').style.display = 'block';
  }

  settingFormData(fd: FormData) {
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
  }

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

  resetInputs() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

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

  constructor(public translate: TranslateService) {
    
  }
  
}
