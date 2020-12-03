
class Course {
  constructor(id, price, instructor, availableSpaces, title, description, image) {
    this.id = id;
    this.price = price;
    this.instructor = instructor;
    this.availableSpaces = availableSpaces;
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

const cartEle = document.querySelector('.popover');
const coursesEle = document.querySelector('.courses');

cartEle.addEventListener('click', function() {
  document.querySelector('.cart-inner').classList.toggle('hide');
});


const courses = [
  new Course(
    "SD100",
    154.99,
    "Chris MacDonald",
    15, 
    "Introduction to Web Development",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "html_and_css.jpg"
  ),
  new Course(
    "SD110",
    223.01,
    "Chris MacDonald",
    3, 
    "JavaScript Basics",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "js-basics.png"
  ),
  new Course(
    "SD120",
    99.99,
    "Chris MacDonald",
    10, 
    "Object Oriented JavaScript",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "advanced-javascript.png"
  ),  
  new Course(
    "SD145",
    49.99,
    "Chris MacDonald",
    30, 
    "JavaScript Testing",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "testing.png"
  ),
  new Course(
    "SD260",
    149.99,
    "Chris MacDonald",
    5, 
    "Introduction to React",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "react.jpg"
  ),
  new Course(
    "SD130",
    149.99,
    "Chris MacDonald",
    15, 
    "Tools and Automation",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "tools.png"
  ),
];



