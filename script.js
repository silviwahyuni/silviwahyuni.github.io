document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");

    function createBook(position) {
        let book = document.createElement("div");
        book.innerHTML = "📖"; // Emoji buku terbuka
        book.classList.add("book");

        if (position === "top-right") {
            book.style.top = "10px";
            book.style.right = "10px";
        } else if (position === "bottom-left") {
            book.style.bottom = "10px";
            book.style.left = "10px";
        }

        document.body.appendChild(book);
    }

    createBook("top-right");
    createBook("bottom-left");
});
