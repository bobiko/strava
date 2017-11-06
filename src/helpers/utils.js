import moment from "moment";

const convertDistance = distance => (distance * 0.001).toFixed(2);

const convertTime = time =>
  moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

const convertSpeed = speed => (speed * 3.6).toFixed(2);

const covertDatetime = datetime => moment(datetime).format('YYYY-MM-DD');

export default {
  convertTime,
  convertDistance,
  convertSpeed,
  covertDatetime
};
