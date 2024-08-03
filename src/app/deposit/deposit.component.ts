import { Component } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  accountId!: string;
  amount!: number;

  constructor(private bankingService: BankingService) { }

  deposit() {
    const data = {
      type: 'deposit',
      destination: this.accountId,
      amount: this.amount
    };
    this.bankingService.deposit(data).subscribe(response => {
      console.log(response);
    });
  }
}
