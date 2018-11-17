import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google: any;

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  @ViewChild('map') mapRef: ElementRef;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(6.218992717641839, -75.60355112450166);
    //const location2 = new google.maps.LatLng(6.219185747797738, -75.60339582325483);
    //const location3 = new google.maps.LatLng(6.219248157493439, -75.60417282697377);

    const options = {
      center: location,
      zoom: 18,
      streetViewControl: true,
      //mapTypeId: 'terrain'
    }
    const map = new google.maps.Map
    (this.mapRef.nativeElement, options);

    this.addMarker(location, map)
    //this.addMarker(location2, map)
    //this.addMarker(location3, map)
  }
    addMarker(position, map){
      return new google.maps.Marker({
        position,
        map
    })

}
}
