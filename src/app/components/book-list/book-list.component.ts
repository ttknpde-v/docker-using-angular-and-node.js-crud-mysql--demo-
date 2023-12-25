import {Component, OnInit} from '@angular/core';
import {CrossHttpService} from "../../service/cross-http.service";
import {Romance} from "../../entity/romance";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  private crossHttpService : CrossHttpService
  private romances : Romance[]
  constructor(crossHttpService: CrossHttpService) {
    this.crossHttpService = crossHttpService;
    this.romances = new Array<Romance>()
  }

  ngOnInit(): void {
    this.crossHttpService.reads().subscribe(
      (response : any) => {
        // console.log(response) // it returns the same object that I set on res.json({...}) in my back-end
        // any attribute in Tutorial should have same field on database
        console.log(response.data)
        this.romances = response.data
      });
  }
  get getRomances(): Romance[] {
    return this.romances;
  }
}
