import { Component } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  accountId!: string;
  balance!: number;

  constructor(private bankingService: BankingService) { }

  getBalance() {
    this.bankingService.getBalance(this.accountId).subscribe(response => {
      this.balance = response.balance;
    });
  }
}
