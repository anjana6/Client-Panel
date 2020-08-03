import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, rejects) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
      .then( userData => resolve(userData),
      err => rejects(err));
    }); 
  }

  register(email: string, password: string){
    return new Promise( (resolve,reajects) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reajects(err));
    })
  }

  getAuth(){
    return this.afAuth.authState.pipe(auth => auth);
  }

  logOut(): void{
    this.afAuth.signOut();
  }

}
