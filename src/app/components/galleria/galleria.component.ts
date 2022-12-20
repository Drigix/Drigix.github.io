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
          previewImageSrc: "https://dokariery.pl/documents/20184/418923/fryzjer_ksi%C4%85%C5%BCki.png/0accfe52-64bd-4c06-a3d7-e71ab334688f?t=1601379393866",
          thumbnailImageSrc: ".../../../assets/photos/galleria1s.jpg",
          alt: "W naszej aplikacji znajdziesz wiele specjalistów z podanych branż. Możesz zarezerwować termin w swojego ulubionego specjalisty z wyprzedzeniem i to wszystko zupełnie za darmo, wystarczy że założysz konto!",
          title: "Specjaliści w zawodzie!"
        },
        {
          previewImageSrc: "https://s3.egospodarka.pl/grafika2/badania-internautow/Opinie-klientow-nie-do-przecenienia-139114-900x900.jpg",
          thumbnailImageSrc: ".../../../assets/photos/galleria1s.jpg",
          alt: "Dzięki naszemu systemowi możesz przeglądąć stronę firmy łącznie z opiniami klientów, którzy już wcześniej skorzystali z usług w danym miejscu. Umożliwi ci to łatwiejsze podjęcie dezycji w którym z salonów dokonać ostatecznie rezerwacji.",
          title: "Opinie klientów!"
        },
        {
          previewImageSrc: "https://mikroporady.pl/files/Porady/Zdjcia/foto_dobrane/Likwidacja_dziaalnoci_gospodarczej.jpg",
          thumbnailImageSrc: ".../../../assets/photos/galleria1s.jpg",
          alt: "Jeśli zechcesz możesz założyć stronę własnej firmy w naszej aplikacji. Założ konto z rolą usługodawcy i promój twój salon z naszą pomocą!",
          title: "Własna firma"
        }
      ]
      console.log(this.images);
  }

}
