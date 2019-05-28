import { Component, OnInit } from '@angular/core';
import { SideNavService} from '../services/side-nav.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public service: SideNavService) { }

  ngOnInit() {
  }

}
