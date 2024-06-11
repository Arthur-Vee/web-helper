import { Injectable } from '@angular/core';
import { Message } from '../MODELS/message.model';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  chatbotResponseMessage: Message = { author: "Assistant", messageContent: "Chatbot Response", timestamp: new Date() }

  constructor() {


  }

  processUserInput(userInput: Message) {
    console.log("Received user input:", userInput.messageContent);
  }

  chatbotResponse(): Promise<Message>{
  return new Promise<Message>((resolve, reject) => {
    setTimeout(() => {
      resolve(this.chatbotResponseMessage),
      reject("error getting data")
    }, 2000);
  });
}

}
