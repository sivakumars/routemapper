import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
  "id" : 1,
  "name" : "Appalachian Trails",
  "date" : new Date('06/01/2018'),
  "distance" : 16.2,
  "comments" : "Nice day, cool temps",
  "gpxData": '../../assets/gpx/3507268.gpx'
},
{
   "id": 2,
   "name": 'Chennai OMR',
   "date": new Date('06/03/2018'),
   "gpxData": '../../assets/gpx/3507268.gpx',
   "distance": 1.2,
   "comments": 'Cool and windy.'
 },
 {
   "id": 3,
   "name": 'Underworld trail',
   "date": new Date('06/05/2018'),
   "gpxData": '../../assets/gpx/3507268.gpx',
   "distance": 3.2,
   "comments": 'Evening run.'
 },
 {
   "id": 4,
   "name": 'Deep green  trail',
   "date": new Date('06/08/2018'),
   "gpxData": '../../assets/gpx/3507268.gpx',
   "distance": 8.4,
   "comments": 'Cool and windy by the lake.'
 }
]