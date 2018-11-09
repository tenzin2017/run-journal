import { IActivity} from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id": 1,
        "name": "Main Bike Trails",
        "date": new Date('08/11/2018'),
        "distance": 6.2,
        "comments": "Nice day, cool temps",
        "gpxData": '../../assests/gpx/1.gpx'
    },

    {
        "id": 2,
        "name": "Industrial Parks",
        "date": new Date('08/17/2018'),
        "distance": 1.2,
        "comments": "Cool and windy",
        "gpxData": '../../assests/gpx/2.gpx'
        
    }
]

