export const apiLink =
  "https://my-json-server.typicode.com/ilonmakh/emails/emails";
export const overDateTimestamp = Math.round(
  +new Date(2023, 4, 31, 0, 0) / 1000
);

export const measures = [
  {
    measure: "days",
    short: "DD",
  },

  {
    measure: "hours",
    short: "HH",
  },

  {
    measure: "minutes",
    short: "MM",
  },

  {
    measure: "seconds",
    short: "SS",
  },
];

export const storeInitialValue = {
  isPopupOpen: false,
  isResponseOk: true,
};
