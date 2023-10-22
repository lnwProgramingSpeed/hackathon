import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.css']
})
export class InboxPageComponent {
  messages: string[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}
