import { Component, Input } from '@angular/core';
import { Planets } from '../Model/Planets';
import { Robots } from '../Model/Robots';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  public editable: boolean = false;
  public Robot: Robots [] = [];

  @Input() public Planet:Planets = new Planets();
  @Input() public Robots:Robots = new Robots();
  @Input() public CaptainId:number = 0;

  private _clonePlanet:Planets = new Planets();

  constructor(private _service:StandardService) {
  }

  ngOnInit(): void {
    this.getrobots();
    this._clonePlanet = this.Planet;
  }

  public getrobots() {
    this._service.GetRobots(this.Planet.planetsId).subscribe((result)=> {
      this.Robot = result;

    });
  }

  public UpdatePlanet() {
    this._service.UpdatePlanet(this.Planet).subscribe((result) => {
      this.Planet = result;
      console.log(this.Planet);
    });
  }


  public Edit() {
    if(this.editable)
    {
      this.Planet = this._clonePlanet;
      this.editable = false;
    } else {
      this.editable = true;
    }
  }


  public Save() {
    this.UpdatePlanet();
    this.editable = false;
    this.ngOnInit();
  }

}
