import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenurComponent } from './menur/menur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { SociosComponent } from './socios/socios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ServiciosComponent,
    SociosComponent,
    MenurComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
