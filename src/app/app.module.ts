import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BankingService } from './banking.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    DepositComponent,
    TransferComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  providers: [BankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
