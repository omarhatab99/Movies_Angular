import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _MoviesService:MoviesService){}


  ngOnInit(): void {
    
  }


}
