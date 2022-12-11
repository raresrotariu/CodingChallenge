import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planets } from '../Model/Planets';
import { StandardService } from '../service/standard.service';

@Component({
  selector: 'app-xpand',
  templateUrl: './xpand.component.html',
  styleUrls: ['./xpand.component.css']
})
export class XPANDComponent {

  public Planets: Planets[] = [];
  public CaptainId: number = 0;

  constructor(private _service: StandardService,public _router: Router) {
  }

  ngOnInit(): void {
    this.GetData();
    this.CaptainId = history.state.id;
    //console.log(this.CaptainId);
    //this.RouteBack();
  }

  public GetData() {
    this._service.GetPlanets().subscribe((result)=> {
      //console.log(result);
      this.Planets = result;
    });
  }

  public RouteBack() {
    if(this.CaptainId == undefined)
    {
      this._router.navigateByUrl('');
    }
  }

}
