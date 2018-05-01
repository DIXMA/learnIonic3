import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NotesService} from "../../services/notes.service";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note = {id: null, title: null, description: null};
  id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NotesService) {
    this.id = this.navParams.get('id');
    if (this.id != 0) {
      this.note = noteService.getNote(this.id);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  public addNote() {
    if (this.id != 0) {
      this.noteService.editNote(this.note);
      alert("Note has been edited...");
    } else {
      this.note.id = Date.now();
      this.noteService.createNote(this.note);
      alert("Note has been created...");
    }
    this.navCtrl.pop();
  }

}
