const productDetails = {
    1: {
        name: "kurti set",
        price: "Rs.1400",
        description: "This is a fantastic product that does amazing things.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/pro%201-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/pro%201-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/pro%201-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/pro%201-4.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/pro%201%20-5.jpg"
        ],
        reviews: [
            { name: "suminima rai (⭐⭐⭐⭐⭐)", rating: 5, comment: "Great product!" },
            { name: "Sara magar (⭐⭐⭐⭐)", rating: 4, comment: "Very useful, but could be improved." },
            { name: "priya thapa (⭐⭐⭐⭐⭐)", rating: 4, comment: "goo quality." },
            { name: "manisha", rating: 4, comment: "best dress." }
        ]
    },
    2: {
        name: "Kurti set",
        price: "Rs.1400",
        description: "An awesome product with top features and amazing performance.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p2-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p2-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p2-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p2-4.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p2-5.jpg"
        ],
        reviews: [
            { name: "alina tamang (⭐⭐⭐⭐⭐)", rating: 4, comment: "Good quality but a bit expensive." },
            { name: "Emma (⭐⭐⭐⭐⭐)", rating: 5, comment: "Love it! Totally worth the price." }
        ]
    },
    3: {
        name: "skirt",
        price: "Rs.800",
        description: "A awesome product.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p3-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p3-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p3-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p3-4.jpg", ""
        ],
        reviews: [
            { name: "sima raut", rating: 4, comment: "Good quality but a bit expensive." },
            { name: "rupa", rating: 5, comment: "Love it! Totally worth the price." }
        ]
    },
    4: {
        name: "long skirt",
        price: "Rs.950",
        description: "best quality.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p4-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p4-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p4-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p4-4.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p4-5.jpg"
        ],
        reviews: [
            { name: "rimal (⭐⭐⭐⭐⭐)", rating: 4, comment: "Good quality." },
            { name: "sneha thakuri (⭐⭐⭐⭐⭐)", rating: 5, comment: "Love it!." },
            { name: "kamala mgrx(⭐⭐⭐⭐)", rating: 5, comment: "thank you for best product." }
        ]
    },
    5: {
        name: "baggy paint",
        price: "Rs.1200",
        description: "Best of best product ever.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p5-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p5-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p5-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p5-4.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p5-5.jpg"
        ],
        reviews: [
            { name: "ranju sharma (⭐⭐⭐⭐⭐)", rating: 4, comment: "i like it." },
            { name: "hima kunwar", rating: 5, comment: "amazing." }
        ]
    },
    6: {
        name: "Kurti set",
        price: "Rs.1300",
        description: "try it.",
        images: [
            "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p6-1.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p6-2.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p6-3.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p6-4.jpg", "https://raw.githubusercontent.com/marinatrendy/shooping/refs/heads/main/p6-5.jpg"
        ],
        reviews: [
            { name: "amrita", rating: 4, comment: "nice." },
            { name: "aana", rating: 5, comment: "good quality." }
        ]
    }
    // Add more products similarly.
};

// Function to show product details in the modal
function showDetails(productId) {
    const details = productDetails[productId];
    let content = `
        <h2>${details.name}</h2>
        <p class="price">${details.price}</p>
        <p>${details.description}</p>
        <div class="product-images">
            ${details.images.map((img, index) => `
                <img src="${img}" alt="Product Image ${index + 1}" onclick="selectImage(event)">
            `).join('')}
        </div>
        <h3>Reviews:</h3>
        <ul>
            ${details.reviews.map(review => `
                <li><strong>${review.name} (${review.rating} stars):</strong> ${review.comment}</li>
            `).join('')}
        </ul>
         <button class="btn" onclick="window.location.href='detail.html'">buy now</button>

    `;
    document.getElementById('product-detail-content').innerHTML = content;
    document.getElementById('product-detail-modal').style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById('product-detail-modal').style.display = "none";
}

// Function to select an image
function selectImage(event) {
    const selectedImages = document.querySelectorAll('.product-images img');
    selectedImages.forEach(img => img.classList.remove('selected-image'));
    event.target.classList.add('selected-image');
}

// Dummy Buy Now function
function buyNow() {
    const selectedImage = document.querySelector('.selected-image');
    if (!selectedImage) {
        alert("Please select an image before purchasing.");
    } else {
        alert("Thank you for purchasing! Redirecting to checkout...");
    }
}
