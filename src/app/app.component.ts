import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectYedra';
  precio:Number = 0;
  lugarRecogidaIda: String;
  lugarRecogidaVuelta:String;
  destino: String;
  diaIda: String;
  diaVuelta: String;
  horaIda: String;
  horaVuelta: String;
  public texto: String

    toString(precio, horaIda, horaVuelta, lugarRecogidaIda, lugarRecogidaVuelta, destino, diaIda, diaVuelta) {
    this.texto = ""
    this.texto = "Buenas, el próximo día " + diaIda + "  a las" + horaIda + "quedaremos en " + lugarRecogidaIda + " para ir a " + destino + ", la recogida será en "
    if (lugarRecogidaIda == lugarRecogidaVuelta) {
      this.texto += "el mismo sitio"
    }
    else this.texto += lugarRecogidaVuelta
    if (diaVuelta == diaIda) {
      this.texto += "el mismo día"
    }
    else this.texto += "el día " + diaVuelta
    this.texto += "a las " + horaVuelta + "."
    if(precio != 0) {
      this.texto += "El precio de la actividad será de " + precio + " euros."
    }
    this.texto += "Saludos SCOUTS!!"
  }

}
