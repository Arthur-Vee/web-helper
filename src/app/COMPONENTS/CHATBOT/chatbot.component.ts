import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../MODELS/message.model';
import { OpenaiService } from '../../SERVICE/openai.service';




@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  constructor(private openaiService:OpenaiService){
  }
  loading!:boolean
  messageInput!:string
  message!:Message
  chatbotResponse!:Message
  messageHistory:Message[] = []
  async sendMessage(){
    if(!this.messageInput){return}
    
    this.loading = true
    this.message = {author:"You", messageContent:this.messageInput, timestamp:new Date()}

    if(this.messageInput){
    this.messageHistory.push(this.message)
    this.openaiService.processUserInput(this.message)
  }
    this.messageInput = ""
    try{
     this.chatbotResponse = await this.openaiService.chatbotResponse()
     this.messageHistory.push(this.chatbotResponse)
     this.loading = false
    }catch(error){
      console.log("error occured: "+error)
    }
    console.log(this.chatbotResponse)
    console.log(this.messageHistory)
    this.messageInput = ""

    console.log(this.loading)
  }
}
