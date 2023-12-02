export default function convertTimeStamp(timeStamp) {

    let convertedDate = "";

    convertedDate = timeStamp.slice(8,10) + "-" + timeStamp.slice(5,7) + "-" + timeStamp.slice(0,4)

    return convertedDate;
  }