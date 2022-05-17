import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { DataService } from '../../services/data.service';
import { Chakra } from '../../models/chakras';

@Component({
  selector: 'app-chakras',
  templateUrl: './chakras.component.html',
  styleUrls: ['./chakras.component.scss']
})
export class ChakrasComponent implements OnInit {

  chakras: Chakra[];
  chakraForm: FormGroup;

  constructor(
    private dataService: DataService,

  ) { }

  ngOnInit() {
    this.displayChakras();
  }

  displayChakras(){
    this.dataService.getChakras().subscribe(chakras => {
      console.log(chakras);
      this.chakras = chakras;
    });


  }
}
