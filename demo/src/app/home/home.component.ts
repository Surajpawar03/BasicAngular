import { Component } from '@angular/core';
import { AbouteComponent } from '../aboute/aboute.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AbouteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // condition=false;
  // login(){
  //   this.condition=true;
  // };
  // logout(){
  //   this.condition=false
  // }
  // students :any =['suraj','ram','stay']
}
