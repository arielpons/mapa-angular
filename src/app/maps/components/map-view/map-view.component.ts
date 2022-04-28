import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker} from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  constructor( private placesService:PlacesService) { }
  
  @ViewChild('mapDiv') mapDivElement!:ElementRef

  ngAfterViewInit(): void {
    if (!this.placesService.userLocation) throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
      });
    
    const popup = new Popup()
      .setHTML(`
        <h6> Aquí estoy </h6>
        <span>Estoy en este lugar del mundo</span>
      `);
    
    new Marker({color:'red'})
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map)
  }

}
