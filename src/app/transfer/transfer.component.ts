import { Component } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  originAccountId!: string;
  destinationAccountId!: string;
  amount!: number;

  constructor(private bankingService: BankingService) { }

  transfer() {
    const data = {
      type: 'transfer',
      origin: this.originAccountId,
      destination: this.destinationAccountId,
      amount: this.amount
    };
    this.bankingService.transfer(data).subscribe(response => {
      console.log(response);
    });
  }
}
