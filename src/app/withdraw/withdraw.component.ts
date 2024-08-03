import { Component } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  accountId!: string;
  amount!: number;
  response: any;

  constructor(private bankingService: BankingService) { }

  withdraw() {
    const data = {
      type: 'withdraw',
      origin: this.accountId,
      amount: this.amount
    };
    this.bankingService.withdraw(data).subscribe(response => {
      console.log(response);
    });
  }
}
