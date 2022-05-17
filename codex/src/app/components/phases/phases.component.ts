import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Phase } from '../../models/phases';
// import { Day } from 'src/app/models/days';
// import { Planet } from 'src/app/models/planets';
// import { DataService } from 'src/app/services/data.service';
// import { Phase } from 'src/app/models/phases';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit {


  phases: Phase[];

  constructor( 
    private dataService: DataService  ) { }

  ngOnInit() {
   this.displayPhases();
  }

  displayPhases(){
    this.dataService.getPhases().subscribe(phases => {
      console.log(phases);
      this.phases = phases;
    });

  }
 

}
