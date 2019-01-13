import { Injectable } from '@angular/core';
import { IActivity } from '../models/activity.model';
import { SAVED_ACTIVITIES }  from '../models/activities';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[]{
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allActivities: IActivity[]){
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]){
    var totalDistance = 0;
    for(var i = 0; i < allActivities.length; i++){
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allActivities: IActivity[]){
    var earliestDate = new Date("01/01/9999");
    for(var i = 0; i < allActivities.length; i++){
      var currentDate = allActivities[i].date;
      if(currentDate < earliestDate){
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }
}

// import { Injectable } from '@angular/core';
// import { IActivity } from '../models/activity.model';
// import { SAVED_ACTIVITIES } from '../models/activities';

// @Injectable()
// export class ActivityService {

//   constructor() { }

//   getActivities() : IActivity[] {
//     return SAVED_ACTIVITIES.slice(0);
//   }

//   getTotalActivities(){
//     return SAVED_ACTIVITIES.length;
//   }

//   getTotalDistance(){
//     let totalDistance: number= 0;
//     SAVED_ACTIVITIES.forEach((activity)=>{
//       totalDistance += activity.distance;
//     });
//     return totalDistance;
//   }

//   getEarliestDate(){
//     let earliestDate;
//     return SAVED_ACTIVITIES.reduce((earliestDateActivity, activity) => {
//       let accumulatedActivityDate = earliestDateActivity.date.getDate();
//       let iteratedActivityDate = activity.date.getDate();
//       earliestDate =  accumulatedActivityDate < iteratedActivityDate ? earliestDateActivity : activity;
//       return  earliestDate.date.getDate();
//     });    
//   }
// }
