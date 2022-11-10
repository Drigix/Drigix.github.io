import { ImageLoader } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    getImages() {
    return this.http.get<any>('../../../assets/photos/photos.json')
      .toPromise()
      .then(res => <ImageLoader[]>res.data)
      .then(data =>{ return data; });
    }
}
