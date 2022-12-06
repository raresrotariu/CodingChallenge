import { Component } from '@angular/core';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private _service: StandardService){}

  ngOnInit(): void {

      this._service.GetPlanets().subscribe((result)=> {
        console.log(result);
      });
  }

}
