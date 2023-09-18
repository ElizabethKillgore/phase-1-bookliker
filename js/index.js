document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")


fetch('http://localhost:3000/books')
    .then(res => res.json()) 
    .then(bookData => {
        bookData.forEach(book => {
            createBookList(book)
        })
      console.log(bookData)      
})       

function createBookList(book) {
    
    let bookTitlesList = document.createElement('li')
    bookTitlesList.addEventListener('click', () => {
    let bookImage = document.createElement('img')
    bookImage.src = book.img_url
    document.querySelector('#show-panel').append(bookImage)
    let bookDesription = document.createElement('p')
    bookDesription.innerText = book.description
    document.querySelector('#show-panel').append(bookDesription)
    

    book.users.map(user => {
        let bookUsersList = document.createElement('p')
        bookUsersList.innerText = user.username 
        document.querySelector('#show-panel').append(bookUsersList)
    })


    
    
   })
    
    

    
bookTitlesList.innerText = book.title   
    
document.querySelector('#list').append(bookTitlesList)

    
}




});
