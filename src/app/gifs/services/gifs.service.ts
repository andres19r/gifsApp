import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _record: string[] = [];

  get record() {
    return [...this._record];
  }

  searchGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 10);
    }
    console.log(this._record);
  }

  constructor() {}
}
