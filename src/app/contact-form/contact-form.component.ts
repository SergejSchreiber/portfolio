import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0
    });
  }

@ViewChild('myForm') myForm!: ElementRef;
@ViewChild('nameField') nameField!: ElementRef;
@ViewChild('emailField') emailField!: ElementRef;
@ViewChild('messageField') messageField!: ElementRef;
@ViewChild('sendButton') sendButton!: ElementRef;


  async sendMail() {
    this.sendMailInputFieldsDisable();
    //Animation anzeigen
    let fd = new FormData();
    this.settingFormData(fd);
    //senden
    await fetch('https://sergej-schreiber.developerakademie.net/angular-projects/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });
    //Text anzeigen: Nachricht gesendet
    this.sendMailInputFieldsAble();
    this.resetInputs();
  }
  
  settingFormData(fd: FormData){
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

  resetInputs(){
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

}
