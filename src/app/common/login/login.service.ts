import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Login } from '../../common/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private dbPath = '/users';

  loginRef: AngularFireObject<Login> = null;

  constructor(private db: AngularFireDatabase) {
    this.loginRef = db.object(this.dbPath);
  }


  getUserByName( ): AngularFireObject<Login> {
    return this.loginRef;
  }

  private handleError(error) {
    console.log(error);
  }
}
