import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  usd: any;
  gbp: any;
  eur: any;
  score: Number = 0;

  constructor(http: Http) {
    http.get('http://api.nbp.pl/api/exchangerates/rates/a/usd/')
      .subscribe(response => {
        this.usd = response.json();
        });
    http.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/')
      .subscribe(response => {
        this.eur = response.json();
      });
    http.get('http://api.nbp.pl/api/exchangerates/rates/a/gbp/')
      .subscribe(response => {
        this.gbp = response.json();
      });
  }
///
  currenciesList: {};
  currencyOne = 0;
  currencyTwo = 1;
  inputValue = 0;

  ngOnInit() {
    this.currenciesList = [
      { Id: 0, Name: 'US Dollar' },
      { Id: 1, Name: 'Euro' },
      { Id: 2, Name: 'Polski Zloty'},
      { Id: 3, Name: 'British Sterling'}
    ];
  }

  countCurrency() {
    var rateArray=[this.usd.rates[0].mid, this.eur.rates[0].mid, 1, this.gbp.rates[0].mid];
    this.score = rateArray[this.currencyOne]/rateArray[this.currencyTwo]*this.inputValue;
  }

  }
