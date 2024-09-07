const itemData = {
    "furniture": [
        { name: "Chair", img: "chair.png", description: "Not sure what it is but it was in that one twdg clip that Str4hm sent.", price: "$50" },
        { name: "Sofa", img: "sofa.png", description: "<strong>SOFA!!</strong>", price: "$300" },
        { name: "Bed", img: "bed.png", description: "Where str4hm yorks to Michonne.", price: "$400" }
    ],
    "fruits": [
        { name: "Avocado", img: "avocado.png", description: "Yummy nummy avocado 😋", price: "$3" },
        { name: "Watermelon", img: "watermelon.png", description: "Idk but my mum really wants you to eat her watermelon slices 👹🔪", price: "$5" },
        { name: "Strawberry", img: "strawberry.png", description: "They're too sour. Don't buy.", price: "$4" }
    ],
    "snacks": [
        { name: "Slim Jim", img: "slimjim.png", description: "Not rlly sure what this is, but it's some American delicacy 🤷", price: "$2" },
        { name: "Smore", img: "smore.png", description: "Another American delicacy 🗽🦅🤠🏈🫡", price: "$3" },
        { name: "Drop Pop", img: "droppop.png", description: "If you like sour, you'll like juicy drop pops 💪", price: "$2" }
    ],
    "frozen-foods": [
        { name: "Square Pizza", img: "pizza.png", description: "If you're lazy like str4hm, this is the thing for you 💪", price: "$10" }
    ],
    "poultry": [
        { name: "Fish", img: "fish.png", description: "If you're looking to impale your throat with bones, this freshly caught bass is for you 😝🐟", price: "$20" }
    ],
    "misc": [
        { name: "Vape", img: "vape.png", description: "It's a gaming vape. Need I say more?", price: "$30" },
        { name: "Fly Catcher", img: "flycatcher.png", description: "Works great for starving flies. Tested and approved by Animal Welfare 👍", price: "$5" },
        { name: "Michonne's Breath", img: "breath.png", description: "The breath of goddess wife beautiful shining star amazing piece of art stunning mommy that was ascended from above and blessed me beautiful human being the most perfect person to walk upon the earth to breath the same air as I do I am tweaking", price: "$200000000" }

    ],
    "drinks": [
        { name: "Chocolate Milk", img: "chocolatemilk.png", description: "Everyone can buy this EXCEPT STR4HM. PLS STAY AWAY 🙏🔪", price: "$3" }
    ]
};

function showCategory(category) {
    const container = document.getElementById('items-container');
    container.innerHTML = ''; // Clear previous items

    if (category in itemData) {
        itemData[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <button data-img="${item.img}" data-name="${escapeHtml(item.name)}" data-description="${escapeHtml(item.description)}" data-price="${item.price}">View Details</button>
            `;
            container.appendChild(itemDiv);
        });

        // Add event listeners to buttons
        document.querySelectorAll('.item button').forEach(button => {
            button.addEventListener('click', function() {
                const img = this.getAttribute('data-img');
                const name = this.getAttribute('data-name');
                const description = this.getAttribute('data-description');
                const price = this.getAttribute('data-price');
                viewDetails(img, name, description, price);
            });
        });
    }
}

function viewDetails(img, name, description, price) {
    document.getElementById('item-img').src = img;
    document.getElementById('item-name').innerHTML = name;
    document.getElementById('item-description').innerHTML = description;
    document.getElementById('item-price').innerHTML = price;
    document.getElementById('item-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('item-modal').style.display = 'none';
}

function addToCart() {
    alert('Item added to cart!');
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
