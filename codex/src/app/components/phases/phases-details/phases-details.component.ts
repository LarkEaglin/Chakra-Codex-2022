import { Component, OnInit } from '@angular/core';
import { Phase } from '../../../models/phases';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/animations/fade';

@Component({
  selector: 'app-phases-details',
  templateUrl: './phases-details.component.html',
  styleUrls: ['./phases-details.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class PhasesDetailsComponent implements OnInit {

  phase: Phase;
  phases: Phase[];
  id: string;
  private sub: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; });

    this.currentPhase();
  }

  currentPhase(){
    let phase = this.dataService.phasesCollection.doc<Phase>(this.id)
    this.dataService.getPhase(this.id).subscribe(
      phaseRef => {
        this.phase = phaseRef;
        console.log(this.phase);
      })
  }
}
