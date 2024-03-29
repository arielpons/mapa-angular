import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  public selectedId:string = '';

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places() {
    return this.placesService.places;
  }

  flyto(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat])
  }
  getDirections(place: Feature) {
    if (!this.placesService.userLocation) throw Error(`No hay user location`);
    this.placesService.deletePlaces(); // hide search results
    const start = this.placesService.userLocation!;
    const end = place.center as [number, number];
    this.mapService.getRouteBetweenPoints(start,end)
  }
}
