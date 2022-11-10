import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../photo-service/photo-service.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  @Input() bodyTemplate = 'default';
  @Input() showText = false;

  images: any[] = [];

  constructor(private photoService: PhotoService) { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  ngOnInit() {
      //this.photoService.getImages().then(images => this.images = images);
      this.images = [
        {
          previewImageSrc: "../../../assets/photos/galleria1.jpg",
          thumbnailImageSrc: ".../../../assets/photos/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1"
        },
        {
          previewImageSrc: "../../../assets/photos/galleria2.jpg",
          thumbnailImageSrc: ".../../../assets/photos/galleria1s.jpg",
          alt: "Description for Image 2",
          title: "Title 2"
        }
      ]
      console.log(this.images);
  }

}
