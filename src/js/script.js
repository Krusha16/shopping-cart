class Cart {
  constructor() {
    this.courses = [];
    this.length = 0;
  }

  addCourse(id) {
    let course = courses.find(function (course) {
      return course.id === id;
    });
    if (course.availableSpaces > 0) {
      course.availableSpaces--;
      this.courses.push(course);
      this.updateCart();
      updateCourses();
    }
  }

  removeCourse(itemNumber) {
    let course = this.courses.splice(itemNumber, 1).pop();
    course.availableSpaces++;
    this.updateCart();
    updateCourses();
  }

  subTotal() {
    let sum = 0;
    this.courses.forEach(course => {
      sum += course.price;
    });
    return sum.toFixed(2);
  }

  total() {
    return (this.subTotal() * 1.13).toFixed(2);
  }

  updateCart() {
    let ul = document.querySelector('#cart ul');
    ul.innerHTML = "";
    let summary = ul.previousElementSibling;
    summary.innerHTML = `You have ${this.courses.length} Items in your cart.`;
    let subTotal = ul.nextElementSibling.querySelector('#subtotal-amount');
    subTotal.innerHTML = `$${this.subTotal()}`;
    let total = subTotal.parentElement.nextElementSibling.querySelector('#total-amount');
    total.innerHTML = `$${this.total()}`;
    this.courses.forEach((course, index) => {
      ul.innerHTML += `<li data-item-no="${index}"
      data-course-id="${course.id}">
    <img src="images/${course.image}">  
    <div id="cart-title">${course.title}</div>
    <div id="cart-price">$${course.price}</div>
    <div id="delete">
      <i class="far fa-times-circle"></i>
    </div>
    </li>`
    });
  }
};

function updateCourses() {
  coursesEle.innerHTML = "";
  courses.forEach(function (course) {
    coursesEle.insertAdjacentHTML('afterbegin', `
      <li data-course-id="${course.id}">
        <img src="images/${course.image}">
        <div class="info">
          <h3 id="item-title">${course.title}</h3>
          <p id="item-description">
            ${course.description}
          </p>
          <div id="price">
            <h4>Price:</h4> 
            <span>$${course.price}</span>
          </div>
          <div id="instructor">
            <h4>Instructor</h4>
            <span>${course.instructor}</span>
          </div>
          <button id="add-to-cart">Add To Cart</button>
          <div id="spaces-remaining"><span>${course.availableSpaces}</span> spaces remaining</div>
        </div>
      </li>`);
  });
}

let cart = new Cart();
let ul = document.querySelector('ul.courses');
ul.addEventListener('click', function (event) {
  let id = event.target.closest("li").dataset.courseId;
  cart.addCourse(id);
});
let cartList = document.querySelector('#cart ul');
cartList.addEventListener('click', function (event) {
  let li = event.target.closest("li");
  let itemNumber = li.dataset.itemNo;
  cart.removeCourse(itemNumber);
});
updateCourses();
