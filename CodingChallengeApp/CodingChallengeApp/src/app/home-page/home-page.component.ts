import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Planets } from '../Model/Planets';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public Planets: Planets[] = [];

  constructor(private _service: StandardService, private _router:Router) {

  }

  ngOnInit(): void {
  }

  public Robot () {
    this._router.navigateByUrl('/xpand');
  }

  public Captain () {
    this._router.navigateByUrl('/xpand');
  }


}
