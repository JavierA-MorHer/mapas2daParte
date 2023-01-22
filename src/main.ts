import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import  Mapboxgl from 'mapbox-gl'

Mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aWVybW9yYWxlczExMjciLCJhIjoiY2o4amkwY2U1MDI4cjJxcGZvN3BzOWh5YSJ9._htAQnGJdbeiEcHsiYLICg';

if( !navigator.geolocation){
  alert('Navegador no soporta geolocalizacion')
  throw new Error('Navegador no soporta la geolocalizacion')
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
