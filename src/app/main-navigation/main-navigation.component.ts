import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private router : Router) {
    
  }
  isActive(url : string):boolean{
      return url.toLowerCase()==this.router.url.toLowerCase();
  }

  ngOnInit() {
  }

}
