import { Routes } from '@angular/router';
import { HomeComponent } from './COMPONENTS/HOME/home.component';
import { ChatbotComponent } from './COMPONENTS/CHATBOT/chatbot.component';
import { AboutComponent } from './COMPONENTS/ABOUT/about.component';




export const routes: Routes = [{path:"", pathMatch:"full", redirectTo:"/home"},
    {path:"home", component:HomeComponent},
    {path:"chatbot", component:ChatbotComponent},
    {path:"about", component:AboutComponent},
];
