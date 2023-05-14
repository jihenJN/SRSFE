import { Component } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css']
})
export class ResumesComponent {
 
  resumes=[
    {id:110,name:'Leo Brand',job:'angular developer',level:'Senior',salary:950,photo:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'},
    {id:112,name:'Julia Fox',job:'React developer',level:'Junior',salary:850,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-9.webp'},
    {id:101,name:'Jhon Doe',job:'angular developer',level:'Junior',salary:1200,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp'},
    {id:111,name:'Leila Smart',job:'software tester',level:'Senior',salary:1950,photo:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'},
    {id:102,name:'Danny Smith',job:'java developer',level:'Senior',salary:2200 ,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp'},
    {id:103,name:'Alex Steward',job:'software tester',level:'Junior',salary:1800,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp'},
    {id:105,name:'Ashley Olsen',job:'React developer',level:'Senior',salary:2500,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp'},
    {id:106,name:'Kate Rose',job:'software tester',level:'Senior',salary:2580,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp'},
    {id:107,name:'Lara Croft',job:'java developer',level:'Junior',salary:950,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp'},
    {id:108,name:'Brad Pitt',job:'angular developer',level:'Senior',salary:1500,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp'},
    {id:109,name:'June Goth',job:'software tester',level:'Senior',salary:2600,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-7.webp'},
    {id:113,name:'yuke yen',job:'software tester',level:'Junior',salary:2600,photo:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-10.webp'},
  
  ]

  getTotalResumes(){
    return this.resumes.length ;
  }

  getTotalSeniorResumes(){
    return this.resumes.filter(resume => resume.level ==='Senior').length ;
  }

  getTotalJuniorResumes(){
    return this.resumes.filter(resume => resume.level === 'Junior' ).length ;
  }

  resumeCountRadioButton:string ='All';
  searchText:string='';

  onFilterRadioButtonChanged(data:string){
   this.resumeCountRadioButton = data;
   console.log(this.resumeCountRadioButton);
    
  }

  onSearchTextEntered(seachValue:string){
    this.searchText = seachValue;
    console.log(this.searchText);
  }
}
