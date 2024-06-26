import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UsersType} from 'src/assets/usersType';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor(private http:HttpClient) {}

usersLink = './front/src/assets/users.json';

playing = false;


loggedUser = {
  username:null,
  userId:0,
}

selectedCharacter = {
  id:null,
  class:null,
  hp:null,
  name:null,
  roomId:null,
}


heroes:any;

charactersList: any

flush(){
  this.selectedCharacter = {
    id:null,
    class:null,
    hp:null,
    name:null,
    roomId:null,
  }
this.loggedUser = {
  username:null,
  userId:0,
}


}

}