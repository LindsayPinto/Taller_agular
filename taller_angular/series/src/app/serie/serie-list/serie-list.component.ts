import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      var total: number = 0;
      for (const serie of this.series) {
        total += serie.seasons;
      }
      this.average = total/this.series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}
