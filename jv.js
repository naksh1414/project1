function search() {
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("products");
    const products = document.querySelectorAll(".items");
    const name = storeitems.getElementsByTagName("h2");

    for (var i = 0; i < name.length; i++) {
        let match = products[i].getElementsByTagName('h2')[0];

        if (match) {
            let value = match.textContent || match.innerHTML;

            if (value.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }

    }
}