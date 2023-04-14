"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  // forEachName();
  // forYears();
  // loopThroughFirstFiveYears();
  // loopThroughLastFiveYears();
  // logNumbers();
  // forOfTeachers();
  // teachersOver40();
  forOfSearchTeachersByName("er");
}

// ========== forEach ========== //
function forEachName() {
  console.log("!!!!forEach!!!!");
  names.forEach(showName);
}

function showName(name, index) {
  if (index === 0) {
    console.log("første index");
  }

  console.log(index);
  console.log(name);

  if (index % 2 === 0) {
    console.log("hver anden");
  }

  if (index === names.length - 1) {
    console.log("last index");
  }
}

// ========== for loop ========== //

function forYears() {
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    console.log(i);
    console.log(year);

    if (i === years.length - 1) {
      console.log("this is the last year in the list");
    }

    if (year == 2023) {
      console.log("current year");
    }
  }
}

function loopThroughFirstFiveYears() {
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    if (i < 5) {
      console.log(i);
      console.log(year);
    }
  }
}

function loopThroughLastFiveYears() {
  for (let i = 0; i < years.length; i++) {
    const year = years[i];
    if (i > years.length - 5) {
      console.log("last5Years");
      console.log(i);
      console.log(year);
    }
  }
}

function logNumbers() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  for (let i = 1; i < 11; i++) {
    console.log(i);
  }

  for (let i = 10; i >= 0; i--) {
    console.log(i);
    if (i == 0) {
      console.log("liftOff");
    }
  }

  for (let i = 1; i < 20; i += 2) {
    console.log(i);
  }

  for (let i = 1; i <= 16777216; i *= 2) {
    console.log(i);
  }

  for (let i = 111; i <= 138; i += 3) {
    console.log(i);
  }

  for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
  }
}

// console.log("!!!!for loop!!!!")
// for (let i = 0; i < names.length; i++) {
//   const name = names[i];
//   console.log(name);
// }

// ========== for of loop ========== //

function forOfTeachers() {
  for (const teacher of teachers) {
    console.log(teacher);
  }
}

function teachersOver40() {
  const results = [];
  for (const teacher of teachers) {
    if (teacher.age >= 40) {
      // console.log(teacher);
      results.push(teacher);
    }
  }
  console.log(results);
}

function forOfSearchTeachersByName(searchValue) {
  const results = [];
  for (const teachersName of teachers) {
    // console.log(teachersName.name);
    if (teachersName.name.includes(searchValue)) {
      results.push(teachersName);
    }
  }
  // console.log(searchValue);
  console.log(results);
}

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
