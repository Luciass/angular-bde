import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = 'home';
  items: any;
  loaded: boolean;

  constructor(
    private router: Router,
    private HomeService: HomeService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getActu();
  }

  getActu(): void {
    this.loaded = false;
    this.HomeService.getActu('http://localhost:8081/actus')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        }
      )
  }


  navigateToHome() {
    this.router.navigate(['/test']);
  }

}
