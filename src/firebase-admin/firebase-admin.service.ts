import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAdminService {
  private readonly db: admin.firestore.Firestore;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    this.db = admin.firestore();
  }

  getFirestore() {
    return this.db;
  }
}