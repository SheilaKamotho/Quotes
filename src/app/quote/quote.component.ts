import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Worrying means you suffer twice.', 'J.K Rowling (Harry Porter)', 'Sheila Kamotho',new Date(2020,8,22)),
    new Quote(1, 'A diamond is a lump of coal that did well under pressure.', 'Henry Kissinger', 'Sheila Kamotho',new Date(2020,8,22)),
    new Quote(1, 'People who wonder if the glass is half empty or half full are missing the point; the glass is refillable.', 'Simon Sinek', 'Sheila Kamotho',new Date(2020,8,22)),
    new Quote(1, 'If you want the rainbow you have to put up with the rain.', 'Dolly Patron', 'Sheila Kamotho',new Date(2020,8,22)),
    new Quote(1, 'Few human beings wake up in the morning and ask themselves:"What can I do today to undermine my credibility and mess up the day for someone else?" Most mistakes people make are just a result of a lack of awareness.And here is the payoff for you: as you seek out the good in people, not only will they want to show up more fully for you, but you will see more good in your world.', 'Robin Sharma (The Little Black Book for Stunning Success)', 'Sheila Kamotho',new Date(2020,8,22)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQoute(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
