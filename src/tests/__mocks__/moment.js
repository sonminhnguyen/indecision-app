
// this is going to be the function that will call inside of the mocked moment library
// mock file use in test file 
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
}