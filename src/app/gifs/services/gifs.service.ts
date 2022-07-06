import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'hHyuKMSGLu4JDBax2tSVoGqkOrxD3DmZ';
  private _record: string[] = [];

  // TODO: change any for its correct type
  public results: any[] = []

  get record() {
    return [...this._record];
  }
  constructor(private http: HttpClient) {}

  searchGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._record.includes(query)) {
      this._record.unshift(query);
      this._record = this._record.splice(0, 10);
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`).subscribe(( resp: any ) => {
      console.log(resp.data)
      this.results = resp.data
    })
  }
}
