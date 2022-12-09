import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Captain } from '../Model/Captain';
import { Planets } from '../Model/Planets';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public Planets: Planets[] = [];
  public Captain: Captain[] = [];
  public Option: Captain = new Captain();

  constructor(private _service: StandardService, private _router:Router) {

  }

  ngOnInit(): void {
    this.GetCaptain();
  }

  public NavigateRobot () {
    this._router.navigateByUrl('/xpand');
  }

  public NavigateCaptain () {
    if(this.Option.captainId !== undefined ) {
      this._router.navigateByUrl('/xpand');
    }
  }

  public GetCaptain() {
    this._service.GetCaptain().subscribe((result)=>{
      this.Captain = result;
      console.log(result);
    });
  }

}
