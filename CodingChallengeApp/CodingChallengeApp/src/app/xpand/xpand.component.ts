import { Component } from '@angular/core';
import { Planets } from '../Model/Planets';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-xpand',
  templateUrl: './xpand.component.html',
  styleUrls: ['./xpand.component.css']
})
export class XPANDComponent {

  public Planets: Planets[] = [];

  constructor(private _service: StandardService){

  }

  ngOnInit(): void {
    this.GetData();
  }

  public GetData() {
    this._service.GetPlanets().subscribe((result)=> {
      console.log(result);
      this.Planets = result;
    });
  }

}
