
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatguru',
  templateUrl: './chatguru.page.html',
  styleUrls: ['./chatguru.page.scss'],
})
export class ChatguruPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  messages: Observable<any[]>;
  newMsg = '';

  constructor(private chatService: ChatService, private router: Router) { }
 
  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }
 
  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
 

 
}
