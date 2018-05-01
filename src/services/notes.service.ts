import { Injectable } from "@angular/core";

@Injectable()
export class NotesService {
  notes = [
    {id: 1, titile: "Note 1", description: "Description note1"},
    {id: 2, titile: "Note 1", description: "Description note1"},
    {id: 3, titile: "Note 1", description: "Description note1"}
  ];

  public getNotes(){
    return this.notes;
  }
}
