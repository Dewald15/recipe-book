import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  
  ngOnInit(){
    firebase.initializeApp({ //initializeApp is a method which expects to get a javascript object as an argument, retrieved from our firebase backend. In firebase, you can find the info under websetup
      apiKey: "AIzaSyCN1F7N7U2VpxFfQ2wAt5JV_mltqIL0N8k",
      authDomain: "ng-recipe-book-feaee.firebaseapp.com"
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
