// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.


const webDesign = {
  title: `Web Design`,
  period: 3,
  instructor: `Mr. Dominguez`,
  numberStudent: 14,
  description: `In Web Design we learn all about how to build websites with tools such as HTML, CSS, and JS`,
  classLength: `1 Semester`
};


// 2. Write a statement that will log some information about your course to the console using dot-notation.


console.log(`${webDesign.title} takes place Period ${webDesign.period} and lasts ${webDesign.classLength}. The teacher is ${webDesign.instructor} and the class has ${webDesign.numberStudent} students. ${webDesign.description}.`);


// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.


const history = {
  title: `Modern World History`,
  period: 6,
  instructor: `Dr. Melonas`,
  numberStudent: 19,
  description: `In History we learn all about how our past affects our future, such as the prior global systems that directly affect today.`,
  classLength: `2 Semesters`
};

console.log(`${history.title} takes place Period ${history.period} and lasts ${history.classLength}. The teacher is ${history.instructor} and the class has ${history.numberStudent} students. ${history.description}.`);



// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!


function courses(class1, class2)  {
  const courseslist = `My courses are ${class1} and ${class2}.`;
  console.log(courseslist);
  return courseslist;
};

courses(history.title, webDesign.title);


// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.


function revision(numberStudent1) {
  let revisionChange = history.numberStudent+numberStudent1;
  const revisionAlert = `The number of students in ${history.title} has gone from ${history.numberStudent} to ${revisionChange}.`;
  console.log(revisionAlert);
  return revisionAlert;
};

revision(3);


// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
};


const myCourses = [
  {
    title: `Web Design`,
    subject: `Web Design`,
    instructor: `Mr. Dominguez`,
  },
  {
    title: `Spanish 4`,
    subject: `Español`,
    instructor: `Sra. Barajas`,
  },
  {
    title: `British Literature`,
    subject:`English`,
    instructor: `Ms. Dawson`,
  },
  {
    title: `Modern World History`,
    subject: `History`,
    instructor: `Dr. Melonas`,
  },
];


myCourses.map((anyCourse) => {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
});


// Create your array for #6 down here and invoke the .map() function after it.
