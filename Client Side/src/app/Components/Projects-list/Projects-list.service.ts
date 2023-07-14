import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsListService {
    isResultLoaded = false;
    isUpdateFormActive = false;
    MapsSettingsArray : [] = [];
    MapSettingID = "";

  constructor(private myClient:HttpClient) { }
  //URL
  private Base_URL = "http://localhost:5257/api/MapSettings/";

  ProjType(){
    return [
        {
            id: 1,
            name: ""
        },
        {
            id: 2,
            name: ""
        }
    ]
}

MapSubType(){
    return [
        {
            name: "Features",
            subname: "Dynamic"
        },
        {
            name: "Features",
            subname: "Cached"
        },
        {
            name: "Basemap",
            subname: "Imagery"
        },
        {
            name: "Basemap",
            subname: "Topographic"
        }
    ]
}

// Get all Maps Data
getAllMapsSettings()
  {
    this.myClient.get(this.Base_URL+"GetMapSettings")
    .subscribe((resultData: any)=>{
        this.isResultLoaded = true;
        console.log(resultData);
        // this.MapsSettingsArray = resultData;
        return resultData
    });
  };
  getMaps(){
    return this.myClient.get(this.Base_URL+"GetMapSettings");
  }
  

  // Post New Map
  AddNewMap(map:any){
    return this.myClient.post(this.Base_URL+"AddSettings", map)
  }

//   UpadteMap(map:any){
//     return this.myClient.post(this.Base_URL+"UpdateSettings", map)
//   }

//   UpdateRecords(bodyData:any)
//   {
//     return this.myClient.patch(this.Base_URL+"UpdateSettings"+"/"+ this.MapSettingID,bodyData).subscribe((resultData: any)=>
//     {
//         console.log(resultData);
//         alert("Map Registered Updateddd")
//         this.getAllMapsSettings();
      
//     });
//   }
//   save()
//   {
//     if(this.MapSettingID == '')
//     {
//         this.register();
//     }
//       else
//       {
//        this.UpdateRecords();
//       }      
 
//   }
  
}
