import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dom-sanitizer',
  templateUrl: './dom-sanitizer.component.html',
  styleUrls: ['./dom-sanitizer.component.css']
})
export class DomSanitizerComponent implements OnInit {
  unsafeHtml = `<h2 style="color:blue">Welcome!</h2><script>alert('XSS Attack!')</script>`;
  safeHtml!: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.unsafeHtml);
  }
}
