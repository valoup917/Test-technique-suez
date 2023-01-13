import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.css'],
  templateUrl: './movie.component.html'
})

export class MovieComponent {
  data: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/popular-movies').subscribe(data => {
      this.data?.push(data);
      console.log(data);
    })
  }
}