//1
// const wrapper = document.getElementById("wrapper")
// console.log(wrapper)


// 2
// let bookTitles = document.getElementsByClassName("name");
// console.log(bookTitles);

// Array.from(bookTitles);

// this is showing  false
console.log(Array.isArray(bookTitles));

// this change html to array its like helper method
const arrayResult = Array.from(bookTitles)

//if thier is any mistake in spelling it will through error
//this is not passing because it can directly access bookTitles
//this is showing true
let wrapper = document.getElementById("wrapper");
console.log(Array.isArray(Array.from(wrapper)));
console.log(arrayResult)

//this is array that makes it shows how the name are exactly ini html
//by accessing the value of the elementt alone we add dot text-content(.textContent)
arrayResult.forEach((element) => {
    console.log(element.textContent)
})


3
// this is the way to get element by tagName
const lis= document.getElementsByTagName("li")
console.log(lis);



//4
// by using query selector hastag is necessary and only pick only the first one either by ById, ClassName or TagName
const pageBanner = document.querySelector("#page-banner");
console.log(pageBanner);

const bookToRead = document.querySelector(".title");
console.log(bookToRead.childElementCount);//we can check if bookToRead as parent element by adding dot parentElement
//we can also check if it has younger one by adding dot nextSibling
//we can also check childElementCount
//we can also check or access

//5
// this return a list
// to check a class name that has more than one element
const bookTitles = document.querySelectorAll(".name");
console.log(bookTitles);
// title.forEach(element)
bookTitles.forEach(element=>{
//     console.log(element.textContent)
//     element.textContent += " (text)"; // this change all element to Test or called it manipulation
 //   and by adding plus sign + it's just adding text to tyhe back of  all element without touching the html code

})



// Ways to add or delete element
// we query the the Ul
// every action perform on DOM is called Event
// first we tried to access Ul first
const bookList = document.querySelector("#book-list ul")// this is exactly how we use it in CSS
console.log(bookList) // booklist the Div className
// second we add addEventListener to access the book list
bookList.addEventListener("click",(event)=> {  //click must be lowerCase
    console.log(event);
// third we target the delete button itself
    const deleteBtn = event.target.className
// we use conditional statement to querry the particular guy which that delete are
    if (deleteBtn == "delete"){
// now here is where we can target by the name out of all assuming we have many delete button with the same name TAG
        const liTag = event.target.parentNode;
// final deletion here
        bookList.removeChild(liTag)
    }
})


let get = document.getElementById('add-book').addEventListener('submit', function(toAdd) {
toAdd.preventDefault();
const bookName = this.querySelector('input[type="text"]').value;
const list = document.querySelector('#book-list ul');
const listItem = document.createElement('li');
listItem.innerHTML = '<span class="name">' + bookName + '</span><span class="delete">delete</span>';
list.appendChild(listItem);
    this.querySelector('input[type="text"]').value = " "
});


let child = document.querySelectorAll('.name');
let letter = document.querySelector("#search-books input");
console.log(letter)
letter.addEventListener('input' , (event)=> {
    let content = event.target.value.toLowerCase()
    child.forEach((inside) => {
        let spanContent = inside.textContent.toLowerCase();
        let theParent = inside.parentNode;
        if (spanContent.includes(content)) {
             theParent.style.display = 'block';
        }else{
            theParent.style.display = 'none' ;
        }
    })
})


// let child = document.querySelectorAll('.name');
// let letter = document.querySelector("#search-books input");
// console.log(letter)








