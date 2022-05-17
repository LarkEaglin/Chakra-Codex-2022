import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup } from '@angular/forms';
import { Crystal } from 'src/app/models/crystals';

@Component({
  selector: 'app-crystals',
  templateUrl: './crystals.component.html',
  styleUrls: ['./crystals.component.scss']
})
export class CrystalsComponent implements OnInit {

  crystals: Crystal[];
  crystalForm: FormGroup;
  

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.displayCrystals();
  }

  displayCrystals(){
    this.dataService.getCrystals().subscribe(crystals => {
      console.log(crystals);
      this.crystals = crystals;
    });
}

}
