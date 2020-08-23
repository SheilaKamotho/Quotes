export class Quote {
  showAuthor:boolean;
  showSubmittedBy:boolean;
  constructor(public id: number, public quote: string, public author: string,public submittedBy: string,submitDate: Date ){
    this.showAuthor =false;
    this.showSubmittedBy=false;
  }
    
  }