export function parseJSON(jsonStr, succesCb, failureCb) {
  try {
    succesCb(JSON.parse(jsonStr));
  } catch (error) {
    failureCb(error);
  }
}
export const cussesCb = (result) => {
  console.log('succes parse');
  console.log(result);
};

export const failureCb = (error) => {
  console.log('Failure parse');
  console.log(error);
};

parseJSON('{"x":10}', cussesCb, failureCb);
parseJSON('{x}', cussesCb, failureCb);
