import Party1 from "../assets/images/party1.png";
import Party2 from "../assets/images/party2.png";
import Party3 from "../assets/images/party3.png";
import Party4 from "../assets/images/party4.png";
import Party5 from "../assets/images/party5.png";
import Party6 from "../assets/images/party6.png";
import Party7 from "../assets/images/party7.png";
import Party8 from "../assets/images/party8.png";

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

export const accordionItems = [
  {
    name: "Hawaiian party",
    date: "13.02.2023",
    photo: Party1,
  },

  {
    name: "Мafia party",
    date: "15.03.2023",
    photo: Party2,
  },

  {
    name: "Party",
    date: "22.05.2023",
    photo: Party3,
  },

  {
    name: "Party on the beach",
    date: "01.06.2023",
    photo: Party4,
  },

  {
    name: "Home Security",
    date: "29.08.2023",
    photo: Party5,
  },

  {
    name: "Network Design & Implementation",
    date: "22.09.2023",
    photo: Party6,
  },

  {
    name: "System Design & Engineering",
    date: "03.11.2023",
    photo: Party7,
  },

  {
    name: "Client Care Plans",
    date: "28.12.2023",
    photo: Party8,
  },
];

export const storeInitialValue = {
  isPopupOpen: false,
  isResponseOk: true,
  isBlockOpen: false,
};
