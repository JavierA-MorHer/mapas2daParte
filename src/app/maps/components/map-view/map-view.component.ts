import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements  AfterViewInit {

  constructor( private placesService:PlacesService, private mapService:MapService) { }

  @ViewChild('mapDiv') mapDivElement!: ElementRef;


  ngAfterViewInit(): void {
    if( !this.placesService.userLocation) throw new Error("No hay placeServices.UserLocation");
    

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 15, // starting zoom
      });

      
    const popUp = new Popup()
        .setHTML(`
          <h6>Aqui estoy</h6>
          <span>Estoy en este lugar del mundo</span>
        `);
    
    
       new Marker({ color: 'red'})
          .setLngLat(this.placesService.userLocation!)
          .setPopup(popUp).addTo(map)

      this.mapService.setMap(map);
      
  }


}
