import moment from "moment";

const convertDistance = distance => (distance * 0.001).toFixed(2);

const convertTime = time =>
  moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

export default {
  convertTime,
  convertDistance
};
