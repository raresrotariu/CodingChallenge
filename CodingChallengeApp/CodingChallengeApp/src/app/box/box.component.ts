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
  public book: Robots [] = [];

  @Input() public Planet:Planets = new Planets();
  @Input() public Robots:Robots = new Robots();
  @Input() public Captain:boolean = true;

  constructor(private _service:StandardService){

  }



  ngOnInit(): void {
    this.getrobots();
  }

  public getrobots() {
    this._service.GetRobots(this.Planet.planetsId).subscribe((result)=> {
      this.Robot = result;
      this.book = result;
    });
  }

  public AddRobot() {
    this.Robot.push(new Robots);
  }

  public Edit() {
    if(this.editable)
    {
      this.editable = false;
    } else {
      this.editable = true;
    }
  }

  public Save() {

  }

}
