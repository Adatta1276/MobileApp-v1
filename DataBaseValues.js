class DataVals {
    constructor() {} 


  async checkDataAvailability() {
     var ScreenDataRef = await database.ref('ScreenData').once("value");
     var CompassValuesRef = await database.ref('CompassValues').once("value");
     var GeoDataRef = await database.ref('GeoData').once("value");
     var HeadingToLocationRef = await database.ref('HeadingToLocation').once("value");
     var CompassFaceDataRef = await database.ref('CompassFaceData').once("value");
     var LocationEnabledRef = await database.ref('LocationEnabled').once("value");

     if(ScreenDataRef.exists() && CompassValuesRef.exists() && GeoDataRef.exists() && HeadingToLocationRef.exists() && CompassFaceDataRef.exists() && LocationEnabledRef.exists()) {
       console.log("GREAT !! ALL YOUR DATA EXISTS !!!");
     }



     else {
       console.log("EITHER ALL OR SOME OF THE DATA IS MISSING FROM THE DATABASE,  GO CHECK IT OUT!!");
     }
     
  }



  updateData() {
    database.ref('/').update({
      'ScreenData/Height' : windowHeight,
      'ScreenData/Width' : windowWidth,
      'CompassValues/BearingToNorth' : compass.getBearingToNorth(),
      //set northeast marks and angles on compass, then update in database
      'CompassValues/BearingToNorthEast' : 0,
      //set northwest marks and angles on compass, then update in database
      'CompassValues/BearingToNorthWest' : 0,
      'CompassValues/BearingToSouth' : compass.getBearingToNorth() + 135.06,
      //set southeast marks and angles on compass, then update in database
      'CompassValues/BearingToSouthEast' : 0,
      //set southwest marks and angles on compass, then update in database
      'CompassValues/BearingToSouthWest' : 0,
      'CompassValues/CompassPosition' : compass.position,
      //make a web scraper async() function, and then pinpoint approximate location in town/city/village
      'CompassValues/GoogleMapsScrapedPosition' : "Greenwich",
      'CompassValues/HeadingAngle' : compass.getHeading(),
      'GeoData/Accuracy' : placeInfo.accuracy,
      'GeoData/Altitude' : placeInfo.altitude,
      'GeoData/AltitudeAccuracy' : placeInfo.altitudeAccuracy,
      'GeoData/Heading' : placeInfo.heading,
      'GeoData/Speed' : placeInfo.speed,
      'GeoData/Latitude' : placeInfo.latitude,
      'GeoData/Longitude' : placeInfo.longitude,
      'HeadingToLocation/Destination' : "London",
      'HeadingToLocation/HeadingAngle' : 0,
      //write compassFace class, then update the values in database
      'CompassFaceData/CompassFace' : "normal",
      'CompassFaceData/FaceNumber' : 1,
      'CompassFaceData/SpecialFaceRequested' : false
      


      
      
    
    
      
    
    });


    if(geoCheck() === true) {
      database.ref('/').update({
          'LocationEnabled' : true,
      });
    }


    else {
      database.ref('/').update({
        'LocationEnabled' : false,
    });


    }
  }




  
}