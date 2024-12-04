import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export default class PrincipalComponent {

  constructor(private authService: AuthService){

  }
  
  logout(): void{
    this.authService.logout();
  }
}
