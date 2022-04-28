import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; 


Mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZWxwOTciLCJhIjoiY2wyamNtNjU4MDJiYzNqbXg3dTk4eDYyMCJ9.nsnGgSSSMJj7K6UNqtsldg';

if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
