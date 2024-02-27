import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuarioComponent],
  templateUrl: './app.component.html',
 /*  template: `
  <p>Hola mi hermosa ciudad {{city}} {{1+1}} </p>
`, */
styles: `
`,
styleUrl: './app.component.css'

  
})
export class AppComponent {
  public message: string = "pasa por aquí el ratón";
  public isAuthenticated: boolean = false;
  public city:string = "Azuqueca de Henares, España";
  public operatingSystems: { id: string, name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }
  ]; 

public isEditable:boolean = false;


  login() {
    // Simulamos un proceso de inicio de sesión
    this.isAuthenticated = true;
  }

  logout() {
    // Simulamos un proceso de cierre de sesión
    this.isAuthenticated = false;
  }

  greet() {
    console.log('Hello, there 👋');
}

onMouseOver() {
  this.message = 'Way to go 🚀' ;
}

}
