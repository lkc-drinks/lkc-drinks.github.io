import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.css']
})
export class FinalReportComponent {
  reportId: any;
  url: string = "";
  reportData: any;
  title: string = "";
  text: string = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {
    this.reportId = this.route.snapshot.params['reportId'];
    this.fetchReport();
  }
  private fetchReport() {
    this.url = "/assets/reports.json";
    this.http.get(this.url).subscribe(res => {
      this.reportData = res;
      for (let report of this.reportData) {
        if (report.id == this.reportId) {
          this.title=report.title;
          this.text=report.text;
        }
      }
    });
  }
}
