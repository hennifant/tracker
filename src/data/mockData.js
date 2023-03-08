import { tokens } from "../theme";

export const mockDataStaff = [
  {
    id: 1,
    name: "Danielle",
    email: "dtaylor@live.com",
    age: "66",
    phone: "801-368-5847",
    access: "Admin",
  },
  {
    id: 2,
    name: "Charlotte",
    email: "charlotte_howard@aol.com",
    age: "44",
    phone: "231-734-4433",
    access: "Admin",
  },
  {
    id: 3,
    name: "Ryan",
    email: "r.w@hotmail.com",
    age: "76",
    phone: "405-443-0491",
    access: "User",
  },
  {
    id: 4,
    name: "Timothy",
    email: "t_f_torres@aol.com",
    age: "55",
    phone: "570-513-8569",
    access: "Intern",
  },
  {
    id: 5,
    name: "Maria",
    email: "mariaeramirez@ymail.com",
    age: "42",
    phone: "318-234-3631",
    access: "Manager",
  },
  {
    id: 6,
    name: "Charlotte",
    email: "c.r.hughes21@gmail.com",
    age: "35",
    phone: "432-135-3009",
    access: "User",
  },
  {
    id: 7,
    name: "Ryan",
    email: "r.hernandez@outlook.com",
    age: "18",
    phone: "218-203-3114",
    access: "Manager",
  },
  {
    id: 8,
    name: "Christopher",
    email: "c.cook@ymail.com",
    age: "20",
    phone: "940-958-0259",
    access: "User",
  },
  {
    id: 9,
    name: "Rachel",
    email: "racheladavis@rocketmail.com",
    age: "58",
    phone: "952-940-4548",
    access: "User",
  },
  {
    id: 10,
    name: "Lauren",
    email: "lauren@hotmail.com",
    age: "22",
    phone: "984-715-7599",
    access: "User",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Taylor",
    email: "dtaylor@live.com",
    age: "66",
    phone: "801-368-5847",
    address: "3942 Green Street, New York, NY 10001",
    city: "Tuleta",
    zip: "78162",
  },
  {
    id: 2,
    name: "Howard",
    email: "charlotte_howard@aol.com",
    age: "44",
    phone: "231-734-4433",
    address: "15 Pennsylvania Avenue, New York, NY 10001",
    city: "San Leandro",
    zip: "94578",
  },
  {
    id: 3,
    name: "Morris",
    email: "r.w@hotmail.com",
    age: "76",
    phone: "405-443-0491",
    address: "80242 Maple Avenue, New York, NY 10001",
    city: "Garrison",
    zip: "58540",
  },
  {
    id: 4,
    name: "Torres",
    email: "t_f_torres@aol.com",
    age: "55",
    phone: "570-513-8569",
    address: "3463 Elm Avenue, New York, NY 10001",
    city: "San Jose",
    zip: "95127",
  },
  {
    id: 5,
    name: "Ramirez",
    email: "mariaeramirez@ymail.com",
    age: "42",
    phone: "318-234-3631",
    address: "404 Hillside Avenue, New York, NY 10001",
    city: "San Bernardino",
    zip: "92406",
  },
  {
    id: 6,
    name: "Hughes",
    email: "c.r.hughes21@gmail.com",
    age: "35",
    phone: "432-135-3009",
    address: "69 Lincoln Avenue, New York, NY 10001",
    city: "Pittsburgh",
    zip: "15253",
  },
  {
    id: 7,
    name: "Hernandez",
    email: "r.hernandez@outlook.com",
    age: "18",
    phone: "218-203-3114",
    address: "1 Park Drive",
    city: "Excello",
    zip: "65247",
  },
  {
    id: 8,
    name: "Cook",
    email: "c.cook@ymail.com",
    age: "20",
    phone: "940-958-0259",
    address: "3306 Route 32, New York, NY 10001",
    city: "Malabar",
    zip: "32950",
  },
  {
    id: 9,
    name: "Davis",
    email: "racheladavis@rocketmail.com",
    age: "58",
    phone: "952-940-4548",
    address: "814 Myrtle Avenue, New York, NY 10001",
    city: "Gloverville",
    zip: "29828",
  },
  {
    id: 10,
    name: "Cox",
    email: "lauren@hotmail.com",
    age: "22",
    phone: "984-715-7599",
    address: "11 Water Street, New York, NY 10001",
    city: "Wayland",
    zip: "01778",
  },
];

export const mockBarData = [
  {
    Sensor: "Sensor 1",
    LEVER_SWITCH: 737,
    LEVER_SWITCHColor: "hsl(229, 70%, 50%)",
  },
  {
    Sensor: "Sensor 2",
    LEVER_SWITCH: 655,
    LEVER_SWITCHColor: "hsl(307, 70%, 50%)",
  },
  {
    Sensor: "Sensor 3",
    LEVER_SWITCH: 509,
    LEVER_SWITCHColor: "hsl(72, 70%, 50%)",
  },
  {
    Sensor: "Sensor 4",
    LEVER_SWITCH: 633,
    LEVER_SWITCHColor: "hsl(257, 70%, 50%)",
  },
  {
    Sensor: "Sensor 5",
    LEVER_SWITCH: 581,
    LEVER_SWITCHColor: "hsl(190, 70%, 50%)",
  },
  {
    Sensor: "Sensor 6",
    LEVER_SWITCH: 466,
    LEVER_SWITCHColor: "hsl(208, 70%, 50%)",
  },
  {
    Sensor: "Sensor 7",
    LEVER_SWITCH: 680,
    LEVER_SWITCHColor: "hsl(87, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "BMW",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "January",
        y: 212,
      },
      {
        x: "February",
        y: 190,
      },
      {
        x: "March",
        y: 270,
      },
      {
        x: "April",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 175,
      },
      {
        x: "July",
        y: 33,
      },
      {
        x: "August",
        y: 189,
      },
      {
        x: "September",
        y: 97,
      },
      {
        x: "October",
        y: 87,
      },
      {
        x: "November",
        y: 299,
      },
      {
        x: "December",
        y: 251,
      },
    ],
  },
  {
    id: "VW",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "January",
        y: 31,
      },
      {
        x: "February",
        y: 136,
      },
      {
        x: "March",
        y: 91,
      },
      {
        x: "April",
        y: 190,
      },
      {
        x: "May",
        y: 211,
      },
      {
        x: "June",
        y: 152,
      },
      {
        x: "July",
        y: 189,
      },
      {
        x: "August",
        y: 152,
      },
      {
        x: "September",
        y: 8,
      },
      {
        x: "October",
        y: 187,
      },
      {
        x: "November",
        y: 107,
      },
      {
        x: "December",
        y: 130,
      },
    ],
  },
];
