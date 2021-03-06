import { Injectable } from "@angular/core";

@Injectable()
export class NotesService {
  notes = [
    {id: 1, title: "Note 1", description: "Description note 1"},
    {id: 2, title: "Note 2", description: "Description note 2"},
    {id: 3, title: "Note 3", description: "Description note 3"}
  ];

  public getNotes(){
    return this.notes;
  }

  public getNote(id){
    return this.notes.filter(function (e, i) { return e.id == id; })[0] || {id: null, title: null, description: null};
  }

  public createNote(note){
    this.notes.push(note);
  }

  public editNote(note){
    for(let i; i > this.notes.length; i++){
      if(this.notes[i] == note){
        this.notes[i] = note;
      }
    }
  }

}
