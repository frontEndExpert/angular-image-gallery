import { Injectable } from '@angular/core';
import {Image} from './shared/models/Image'
//import EXIF from 'exif-js/exif.js';


declare var EXIF ;//: EXIF.EXIFStatic;

@Injectable()
export class LocalStorageService {

  getImageGallery(){
    return JSON.parse(localStorage.getItem('ImageGallery'));
  }

  getImgData(): string{
      var img1 = document.getElementById("img1");
      var created: string;
      var allMetaData: any;
      EXIF.getData(img1, function() {
        created = EXIF.getTag(this, "DateTimeOriginal");
      });
      return created;
  }
  addObjectToImageGallery(url){
    //console.log("object", object)
    let GalleryObject=this.getImageGallery();

      //console.log('getImgData',JSON.stringify(this.getImgData(url)));
      let imgObject: Image = {id: 0, url: "", dateCreated: ""};
        if(GalleryObject===null){
          imgObject.id = 1; 
          GalleryObject=[]; 
          console.log('GO is Null');
        }
        else {imgObject.id =  GalleryObject[GalleryObject.length - 1].id + 1;}

        imgObject.url=url;
        imgObject.dateCreated = (this.getImgData())?this.getImgData():"1/1/1111";
        //console.log("GalleryObject",JSON.stringify(GalleryObject));
      GalleryObject.push(imgObject);
      localStorage.setItem('ImageGallery',JSON.stringify(GalleryObject));
        
  }

  deleteImage(id){
    let listOfImages=this.getImageGallery().filter(
      imgObj => imgObj.id != id
      );
    localStorage.setItem('ImageGallery',JSON.stringify(listOfImages));
  }

  deleteAllImages(){
    localStorage.removeItem("ImageGallery");
  }

  

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  base64toFile(dataURI): File {
    // convert the data URL to a byte string
    const byteString = atob(dataURI.split(',')[1]);

    // pull out the mime type from the data URL
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // Convert to byte array
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that looks like a file.
    const blob = new Blob([ab], { 'type': mimeString });
    blob['lastModifiedDate'] = (new Date()).toISOString();
    blob['name'] = 'file';
        
    // Figure out what extension the file should have
    switch(blob.type) {
        case 'image/jpeg':
            blob['name'] += '.jpg';
            break;
        case 'image/png':
            blob['name'] += '.png';
            break;
    }
    // cast to a File
    return <File>blob;
  }

}


