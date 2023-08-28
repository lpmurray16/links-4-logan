import { Component, OnInit } from '@angular/core';
import { Link } from 'src/types/types';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  modalOpen: boolean = false;
  links: Link[] = [];
  firebaseConfig = {
    apiKey: 'AIzaSyC_yc8Ae7r6rDt_PszQW2RZXL9Knv2WCqY',

    authDomain: 'just-links-40f9c.firebaseapp.com',

    databaseURL: 'https://just-links-40f9c-default-rtdb.firebaseio.com',

    projectId: 'just-links-40f9c',

    storageBucket: 'just-links-40f9c.appspot.com',

    messagingSenderId: '512097381820',

    appId: '1:512097381820:web:c035831586b7aa3e9d0fb9',

    measurementId: 'G-H1R4NKCJQT',
  };
  constructor() {}

  ngOnInit(): void {
    this.getLinks();

    const app = initializeApp(this.firebaseConfig);

    const db = getDatabase(app);

    console.log(db);
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  getLinks() {
    console.log('Get Links');
    // fetch links from firebase realtime database
  }

  addLink() {
    console.log('Add Link');
    // add link to firebase realtime database
  }
}
