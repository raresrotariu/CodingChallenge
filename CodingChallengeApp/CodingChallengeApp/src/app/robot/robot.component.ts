import { Component, Input } from '@angular/core';
import { Robots } from '../Model/Robots';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent {

  @Input() public PlanetId: number = 1 ;
  @Input() public Robot: Robots = new Robots();

 constructor(private _service: StandardService) {

 }

 ngOnInit(): void {
 }




}
