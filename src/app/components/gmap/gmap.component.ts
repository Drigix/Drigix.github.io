
import { AfterViewInit, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GMapComponent implements OnInit {

  options: any;

  overlays: any[] = [];

  constructor() {}

  ngOnInit() {
      this.options = {
          center: new google.maps.Circle({ center: new google.maps.LatLng(36.90707, 30.56533), fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500})
      };
  }

}
