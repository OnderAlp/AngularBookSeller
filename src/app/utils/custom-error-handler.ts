import { ErrorHandler, Injectable } from '@angular/core';
import {Router, NavigationError, Event} from '@angular/router';
import {filter} from "rxjs/operators";

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationError => event instanceof NavigationError)
      )
      .subscribe((error: NavigationError) => {
        console.error('Router error:', error);
        this.router.navigate(['/404']);
      });
  }

  handleError(error: any): void {
  }

}
