import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Link } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDatabaseService {
  constructor(private realtimeDB: AngularFireDatabase) {}

  getRealtimeLinks(): Observable<any> {
    return this.realtimeDB.list<Link>('links').valueChanges();
  }

  addLink(link: Link) {
    return this.realtimeDB.list<Link>('links').push(link);
    this.realtimeDB.object('links').update(link);
  }
}
