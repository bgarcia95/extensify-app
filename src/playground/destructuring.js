// const person = {
//   name: "Brayan",
//   age: 24,
//   location: {
//     city: "Santa Ana",
//     temp: 24
//   }
// };

// If the property does not exists we can set a default with destructuring
// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature}°C in ${city}`);
// }

const book = {
  title: "Ego  is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName); // Penguin if exists, if not default = Self-Published
