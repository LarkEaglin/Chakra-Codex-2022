import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/models/phases';
import { Planet } from 'src/app/models/planets';
import { DataService } from 'src/app/services/data.service';
import { Day } from 'src/app/models/days';

@Component({
  selector: 'app-phase-data',
  templateUrl: './phases-data.component.html',
  styleUrls: ['./phases-data.component.scss']
})
export class PhasesDataComponent implements OnInit {
  phase: Phase;
  phaseToEdit: Phase;
  phases: Phase[];

  planets: Planet[];


  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.references();
  }
  references(){
    this.dataService.getPhases().subscribe(phases => {
      this.phases = phases;
    });
    this.dataService.getPlanets().subscribe(planets => {
      this.planets = planets;
    });
  }

  choosePhase(phase: Phase){
    this.dataService.getPhase(phase.id).subscribe(
      phaseRef => {
        this.phaseToEdit = phaseRef;
      })
  }
  onSubmit(){
    let data = this.dataService.phaseForm.value;
    this.dataService.addPhase(data);
  }

  del(day: Day){
    this.dataService.delDay(day);
  }

  pushPlanet(planet: Planet){
    this.dataService.getPlanet(planet.id).subscribe(
      planetRef => {
        this.dataService.phasesCollection.doc(this.phaseToEdit.id).collection('planets').add(planetRef);
        console.log('Added ' + planetRef.name + ' to ' + this.phaseToEdit.name + ' subcollection of planets' ); 
      })
  }
}
