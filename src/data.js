const weekdays = {
    SATURDAY: 'Saturday',
    SUNDAY: 'Sunday',
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday',
};
const colors = {
    darkGreen: 'bg-darkGreen',
    purple: 'bg-purple',
    gray: 'bg-gray',
    blue: 'bg-blue',
    red: 'bg-red',
    yellow: 'bg-yellow',
    pink: 'bg-pink',
    darkBlue: 'bg-darkBlue',
    lightGreen: 'bg-lightGreen',
    orange: 'bg-orange'
}

const categories = [
    {"id": 1, "type": "activity", "name": "Health"},
    {"id": 2, "type": "users", "name": "Contacts"},
    {"id": 3, "type": "book-open", "name": "Book"},
    {"id": 4, "type": "monitor", "name": "work"},
    {"id": 5, "type": "dribbble", "name": "Fun"},
    {"id": 6, "type": "award", "name": "Skills"},
    {"id": 7, "type": "home", "name": "Home"},
    {"id": 8, "type": "dollar-sign", "name": "Financial"},
];

const icons = [
    {"type": "book-open"},
    {"type": "briefcase"},
    {"type": "dribbble"},
    {"type": "film"},
    {"type": "heart"},
    {"type": "moon"},
    {"type": "home"},
    {"type": "monitor"},
    {"type": "shopping-cart"},
    {"type": "dollar-sign"},
    {"type": "check"},
    {"type": "book"},
    {"type": "droplet"},
    {"type": "music"},
    {"type": "users"},
    {"type": "edit"},
    {"type": "globe"}
];

const habits = [
    {
        "id": 1,
        "title": "Brush my teeth",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 2,
        "title": "Exercise",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 3,
        "title": "Control my Weight",
        "categoryId": 1,
        "type": "check",
        "categoryName": "Health"
    },
    {
        "id": 4,
        "title": "Read a book",
        "categoryId": 6,
        "type": "book",
        "categoryName": "Skills"
    },
    {
        "id": 5,
        "title": "Drink 8 glasses of water",
        "categoryId": 1,
        "type": "droplet",
        "categoryName": "Health"
    },
    {
        "id": 6,
        "title": "Clean my room",
        "categoryId": 7,
        "type": "home",
        "categoryName": "Home"
    },
    {
        "id": 7,
        "title": "Water the plants",
        "categoryId": 7,
        "type": "droplet",
        "categoryName": "Home"
    },
    {
        "id": 8,
        "title": "Take meds ",
        "categoryId": 1,
        "type": "check",
        "categoryName":"Health"
    },
    {
        "id": 9,
        "title": "Save 20% of my income",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 10,
        "title": "30 ???????? ?????????????? ?????? ???????????? ?????? ??????",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 11,
        "title": "50 ???????? ?????????????? ?????? ???????????? ?????? ??????",
        "categoryId": 8,
        "type": "dollar-sign",
        "categoryName": "Financial"
    },
    {
        "id": 12,
        "title": "???????? ??????????",
        "categoryId": 3,
        "type": "book-open",
        "categoryName": "??????????"
    },
    {
        "id": 13,
        "title": "?????? ????????",
        "categoryId": 6,
        "type": "music",
        "categoryName": "??????????"
    },
    {
        "id": 14,
        "title": "???? ???????????? ?????? ??????????????",
        "categoryId": 2,
        "type": "users",
        "categoryName": "??????????"
    },
    {
        "id": 15,
        "title": "?????? ??????",
        "categoryId": 5,
        "type": "briefcase",
        "categoryName": "??????????"
    },
    {
        "id": 16,
        "title": "???? ???????? ?? ???? ???????????? ????????????",
        "categoryId": 1,
        "type": "moon",
        "categoryName": "??????????"
    },
    {
        "id": 17,
        "title": "???????? ???????????? ??????",
        "categoryId": 3,
        "type": "book",
        "categoryName": "??????????"
    },
    {
        "id": 18,
        "title": "???????????????? ?????????? ??????",
        "categoryId": 3,
        "type": "edit",
        "categoryName": "??????????"
    },
    {
        "id": 19,
        "title": "???????? ?? ?????????????? ???? ?????? ??????",
        "categoryId": 4,
        "type": "book-open",
        "categoryName": "??????"
    },
    {
        "id": 20,
        "title": "???????? ?????? ???????? ???? ?????????? ??????",
        "categoryId": 7,
        "type": "shopping-cart",
        "categoryName": "????????????????"
    },
    {
        "id": 21,
        "title": "?????????? ??????",
        "categoryId": 7,
        "type": "check",
        "categoryName": "????????????????"
    },
    {
        "id": 22,
        "title": "?????????????? ?????????????? ???????? ????????",
        "categoryId": 6,
        "type": "globe",
        "categoryName": "??????????"
    },
    {
        "id": 23,
        "title": "???????? ??????",
        "categoryId": 5,
        "type": "dribbble",
        "categoryName": "??????????"
    }
];


export  {
    categories, habits, icons,weekdays,colors
};