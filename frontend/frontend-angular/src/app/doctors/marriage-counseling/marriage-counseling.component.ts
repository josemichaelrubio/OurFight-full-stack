import { MarriageCounselingDataService } from './../../service/marriage-counseling-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-marriage-counseling',
  templateUrl: './marriage-counseling.component.html',
  styleUrls: ['./marriage-counseling.component.css']
})
export class MarriageCounselingComponent implements OnInit {

  asyncDoctors: Observable<Doctor[]> = this.doctorService.getMarriageCounselors();

  doctors: Doctor[] =[];
  errorMessage: string = "";
  maxStringLength: number =0;
  headElements = ['ID', 'Name', 'Gender', 'Avialable', 'Volunteer', 'Speciality']



  constructor(private doctorService: MarriageCounselingDataService) {
    doctorService.getMarriageCounselors().subscribe(
      (doctorsReturned)=>{
        this.doctors = doctorsReturned;
        doctorsReturned.forEach(i=>{this.maxStringLength=Math.max(i.name.length, this.maxStringLength)});
      },
      ()=>{this.errorMessage ="There is an issue getting your data"})
  }

  ngOnInit(): void {
  }

}
