/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  hideSideNav: boolean = false;
 
  constructor() { }
 
  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
