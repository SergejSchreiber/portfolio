import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
@ViewChild('myForm') myForm!: ElementRef;
@ViewChild('nameField') nameField!: ElementRef;
@ViewChild('messageField') messageField!: ElementRef;
@ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('https://LINK-ZUR-ADRESSE/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    //Text anzeigen: Nachricht gesendet
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
