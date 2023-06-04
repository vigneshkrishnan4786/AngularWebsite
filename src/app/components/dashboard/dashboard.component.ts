import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { isUndefined, isNullOrUndefined } from 'is-what';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit{
  private _lastTransaction?: IDBTransaction ;
  @Input() set lastTransaction(txn: IDBTransaction) {
    if (
      isNullOrUndefined(txn) &&
      (isNullOrUndefined(this._lastTransaction) ||
        // this._lastTransaction.id !== txn.id)
        this._lastTransaction)
    ) {
      this._lastTransaction = txn;
    }
  }
  get lastTransaction(): IDBTransaction {
    return this._lastTransaction!;
  }
  ngOnInit(): void {
    
  }

}
