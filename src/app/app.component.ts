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
.component {
    color: #a144eb;
  }
`,

  
})
export class AppComponent {
  isAuthenticated: boolean = false;
  public city:string = "Azuqueca de Henares, España";
  /* operatingSystems: { id: string, name: string }[] = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }
  ]; */

  login() {
    // Simulamos un proceso de inicio de sesión
    this.isAuthenticated = true;
  }

  logout() {
    // Simulamos un proceso de cierre de sesión
    this.isAuthenticated = false;
  }

}
