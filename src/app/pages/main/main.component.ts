import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../store/app.state';
import { getErrorMessage, getLoading } from '../../store/shared/shared.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy {
  showLoading: boolean;
  errorMessage: string;
  sharedSubscription: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.sharedSubscription = this.store.select('shared').subscribe(shared => {
      this.showLoading = shared.showLoading
      this.errorMessage = shared.errorMessage});
  }

  ngOnDestroy() {
    this.sharedSubscription.unsubscribe();
  }

}
