import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@ViewChild('test') testRef: ElementRef;
  title = 'test-app';
  startDate: string;
  currentDate: string;
  endDateCustom: string;

  constructor(){}

  ngOnInit():void{

  }

  print(...elms):void{
    const [leftSec, rightSecTop, rightSecBottom] = [...elms];
    const leftSecText = (<HTMLDivElement>leftSec).innerText;
    const rightSecTopHtml = (<HTMLDivElement>rightSecTop).outerHTML;
    const rightSecBottomHtml = (<HTMLDivElement>rightSecBottom).outerHTML;
    (<HTMLDivElement>this.testRef.nativeElement)
    .innerHTML = `${leftSecText} 
    <br> ${rightSecTopHtml} 
    <br> ${rightSecBottomHtml}`;
  }
}
