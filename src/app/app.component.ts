import { Component, OnInit } from '@angular/core';

      
import * as $ from 'jquery';

      

      
@Component({

      
 selector: 'app-root',

      
 templateUrl: './app.component.html',

      
 styleUrls: ['./app.component.css']

      
})

      
export class AppComponent implements OnInit{

      
 title =
        'app';

      
 tableSource:
          any=[];

      
 tab: any=[];

      
 simp: any=[];simp1:
          any[];

      
 empid:any;

      
 empname:any;

      
 phonenum:any;

      
 tab1=[];

      
 ngOnInit(){

      
 let k =[{id:"1",name:"ajai",date:"10/11/2016"},{id:"2",name:"abi",date:"12/13/2016"},{id:"3",name:"akshay",date:"07/07/2016"},{id:"4",name:"anavarthan",date:"07/07/2016"},{id:"5",name:"barath",date:"07/07/2016"},{id:"6",name:"micheal",date:"07/07/2016"},{id:"7",name:"fjgjgjhg",date:"07/07/2016"},{id:"8",name:"khhhhg",date:"07/07/2016"},{id:"9",name:"opip",date:"02/09/2016"},{id:"10",name:"cxvcbmn",date:"05/03/2016"},{id:"11",name:"iytrre",date:"06/04/2016"}];

      
 this.tableSource=k;

      
 this.tab=this.tableSource;

      
 let emp =[

      
 {empid:1,empname:"ajai",phonenum:"95"},

      
 {empid:2,empname:"abi",phonenum:"345"},

      
 {empid:3,empname:"akshay",phonenum:"87"},

      
 {empid:4,empname:"anavarthan",phonenum:"453"},

      
 {empid:5,empname:"barath",phonenum:"879"},

      
 {empid:6,empname:"micheal",phonenum:"324"},

      
 {empid:7,empname:"fjgjgjhg",phonenum:"754"},

      
 {empid:8,empname:"khhhhg",phonenum:"082"},

      
 {empid:9,empname:"opip",phonenum:"956"},

      
 {empid:10,empname:"cxvcbmn",phonenum:"675"},

      
 {empid:11,empname:"iytrre",phonenum:"765"}]; 

      
 this.simp=emp;

      
 this.simp1=emp;

      
 } 

      
 hai(){

      
 let fields =this.tableSource[0],items=this.tableSource,args=[$("#id").val(),$("#name").val(),$("#date").val()];

      
 if(items.length
        && items){

      
 this.tab=
          items.filter((item)=>{

      
 let i=0;

      
 for(let prop in fields){

      
 if (args[i] &&
          item[prop].toLowerCase().indexOf(args[i].toString().toLowerCase())
        === -1)
          {

      
 return false;

      
 }

      
 i=i+1;

      
 }

      
 return true;

      
 });

      
 }

      
}

      
 search(){  
 const that =  this;
 let data :  any={};      
 data.empid=this.empid;
 data.empname=this.empname;     
 data.phonenum=this.phonenum;     
 let filters:  any = [];

      
 filters =this.simp;

      
 console.log(data)

      
 if(data.empid.toString() !='' && data.empid.toString() != null && data.empid.toString() != ""){
 
 filters = filters.filter((item)=>{     
 if ((this.empid.toString() !='' && item.empid.toString().indexOf(data.empid.toString()) > -1))
          {
             return true;     
          }     
 })

      
 }

      
 if(data.empname != '' && data.empname != null && data.empname != ""){

    filters = filters.filter(item=>{

      
 if ((this.empname !=''
        && item.empname.indexOf(data.empname) > -1))
          {

      

      
 return true;

      
 }

      

      
 })      
 }

      
 if(data.phonenum
        !=''
        && data.phonenum !=
        null && data.phonenum !=
        ""){

      
 filters =
          filters.filter(item=>{

      
 if ((this.phonenum != '' && item.phonenum.indexOf(data.phonenum)
        > -1))
          {

      

      
 return true;

      
 }

      

      
 })

      

      
 }

      
 this.simp1=filters;

      
 }

      
 

      
}
