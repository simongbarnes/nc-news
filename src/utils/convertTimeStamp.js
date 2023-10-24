export default function convertTimeStamp(timeStamp) {

    let dateAndTime = "";

    dateAndTime = timeStamp.slice(8,10) + "-" + timeStamp.slice(5,7) + "-" + timeStamp.slice(0,4) + " " + timeStamp.slice(12,16)

    return dateAndTime;
  }