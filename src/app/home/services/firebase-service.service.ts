import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firestore: AngularFirestore) { }

  getListAlicorp() {
    return this.firestore.collection('alicorpBD').snapshotChanges();
  }

  deleteItemAlicorp(id: string) {
    return this.firestore.collection('alicorpBD').doc(id).delete();
  }
}
