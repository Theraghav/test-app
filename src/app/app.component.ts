import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
@ViewChild('test') testRef: ElementRef;
@ViewChild('printModal') printModalRef: ElementRef;

  title = 'test-app';
  startDate: string;
  currentDate: string;
  endDateCustom: string;

  constructor(public printModal: MatDialog){}

  ngOnInit():void{

  }

  openPrintModal(...elms):void{
    const [leftSec, rightSecTop, rightSecBottom] = [...elms];
    const leftSecText = (<HTMLDivElement>leftSec).innerText;
    const rightSecTopHtml = (<HTMLDivElement>rightSecTop).outerHTML;
    const rightSecBottomHtml = (<HTMLDivElement>rightSecBottom).outerHTML;
    (<HTMLDivElement>this.testRef.nativeElement)
    .innerHTML = `${leftSecText} 
    <br> ${rightSecTopHtml} 
    <br> ${rightSecBottomHtml}`;

    const modal =  this.printModal.open(PrintModalComp, {
      width: '90%',
      data: {leftSec, rightSecTopHtml, rightSecBottomHtml}
    });
  }
}

class PrintModalComp {
  constructor(private modalRef: MatDialogRef<PrintModalComp)
}