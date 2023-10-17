import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/resto";
  url1 = "https://devarsh2241.github.io/json/db.json";

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url)
  }


  saveResto(data: any) {
    return this.http.post(this.url, data).subscribe((result) => {

    })
  }
  deleteresto(item: any) {
    return this.http.delete(`${this.url}/${item}`)
  }
  getresto(item: any) {
    return this.http.get(`${this.url}/${item.id}`)
  }
  updateresto(data: any) {
    return this.http.post(this.url, data).subscribe((result) => {

    })
  }
}
