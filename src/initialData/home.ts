export const weatherInitialState = {
  current: {
    temp_f: 0,
    temp_c: 0,
    condition: {
      code: 0,
      icon: "",
      text: "",
    },
  },
  location: {
    country: "",
    lat: 0,
    localtime: new Date(),
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  },
};
