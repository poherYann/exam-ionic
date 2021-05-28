import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ArtspotService} from '../../services/artspot.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  private artspotForm: FormGroup;
  private submited: boolean = false;


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public artspotService: ArtspotService,

  ) {}

  ngOnInit() {
  }

  buildForm(){
    this.artspotForm = this.formBuilder.group({
      image: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      author: ['', [Validators.required]],
    });
  }

  /*save(){
    this.submited = true;
    if(!this.artspotForm.valid){
      return;
    }
    let values = this.artspotForm.value;
    let location = new LocationModel(values['address']);
    let artspot = new artspotModel(
      values['name'],
      location,
      image,
      new Date()
    );

    this.artspotService.add(artspot).subscribe(artspot => {
      this.router.navigate(['/show', artspot.id]);
    }).add(() => {
      this.loader = false;
    });
  }

  getForm(){
    return this.artspotForm.controls;
  }*/
}
