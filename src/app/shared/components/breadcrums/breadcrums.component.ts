import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss']
})
export class BreadcrumsComponent implements OnInit {
  
  rutas: any [] = [];

  breadcrumbs$: Subscription; 

  constructor(
    private router: Router
  ) { 
    this.breadcrumbs$ = this.getArgumentosRuta().subscribe( ({ data: { breadcrumb } }) => this.rutas = breadcrumb );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.breadcrumbs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.routeConfig),
    )
  }

}
