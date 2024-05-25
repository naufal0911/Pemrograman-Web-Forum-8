document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Apel", price: "Rp.15.000/KG", category: "Buah", image: "https://freepng.com/uploads/images/202402/pple-png-vector-red-fruit-illustration_1020x.jpg" },
        { name: "Pisang", price: "Rp.10.000/KG", category: "Buah", image: "https://freepng.com/uploads/images/202311/free-png-vector-banana_1020x-3796.jpg" },
        { name: "Brokoli", price: "Rp.3.000/KG", category: "Sayur", image: "https://cdn.pixabay.com/photo/2020/08/25/19/01/broccoli-5517821_1280.png" },
        { name: "Wortel", price: "Rp.5.000/KG", category: "Sayur", image: "https://img.freepik.com/free-vector/fresh-organic-carrot_24877-82270.jpg?w=740&t=st=1716647717~exp=1716648317~hmac=c563035c883d6e4ea9e67c7a760ffe85c8f8230de1bcd90d47b644e912e5cccb" },
        { name: "Dada Ayam", price: "Rp.40.0000/KG", category: "Daging", image: "https://img.freepik.com/premium-vector/vector-illustration-raw-chicken-breast-fillet_527904-13.jpg?w=740" }
    ];

    const productList = document.getElementById('product-list');

    const productHTML = products.map(product => {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h2>${product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <p>Category: ${product.category}</p>
                </div>
            </div>
        `;
    }).join('');

    productList.innerHTML = productHTML;
});
