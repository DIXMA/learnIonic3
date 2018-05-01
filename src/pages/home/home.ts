import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NotesService} from "../../services/notes.service";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];

  constructor(public navCtrl: NavController, public noteService: NotesService) {
    this.notes = noteService.getNotes();
  }

  @ViewChild('myNav') nav: NavController;
  public goToDeatil(id){
    this.navCtrl.push(DetailPage, {id:id});
  }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0});
  }
}
