import { Component, OnInit } from '@angular/core';
import {ArtspotService} from '../../services/artspot.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.page.html',
  styleUrls: ['./showall.page.scss'],
})
export class ShowallPage implements OnInit {

  private artspot: Object;

  constructor(public artspotService: ArtspotService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.artspotService.getAll().subscribe(artspot => {
      this.artspot = artspot;
    });
  }

}
