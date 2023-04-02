import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  private baseUrl = 'http://localhost:8080';
  uploadedFiles: Array < File > ;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  fileChange(element: any) {
      this.uploadedFiles = element.target.files;
      console.log("element",element)
      console.log("uploaded",this.uploadedFiles)
  }

  upload() {
      let formData = new FormData();
      console.log(this.uploadedFiles)
      for (var i = 0; i < this.uploadedFiles.length; i++) {
          formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      }
      console.log(formData)
      this.http.post('http://localhost:5000/upload', formData)
          .subscribe((response) => {
            // response= JSON.stringify(response)
            console.log(response)
              console.log('response received is ', Object.keys(response));
          })
  }

}
