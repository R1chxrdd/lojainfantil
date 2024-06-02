document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-clothes-form');
    const clothesList = document.getElementById('clothes-list');
    let clothes = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const clothingName = document.getElementById('clothing-name').value;
        const size = document.getElementById('size').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const imageInput = document.getElementById('image');
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageSrc = event.target.result;
            
            const clothingItem = {
                name: clothingName,
                size: size,
                price: price,
                description: description,
                image: imageSrc
            };

            clothes.push(clothingItem);
            displayClothes();
            form.reset();
        };
        
        if (imageInput.files[0]) {
            reader.readAsDataURL(imageInput.files[0]);
        }
    });

    function displayClothes() {
        clothesList.innerHTML = '';
        clothes.forEach(function(clothingItem) {
            const li = document.createElement('li');
            li.classList.add('clothes-item');

            const img = document.createElement('img');
            img.src = clothingItem.image;
            img.alt = clothingItem.name;

            const name = document.createElement('h3');
            name.textContent = clothingItem.name;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Comprar';
            
            const price = document.createElement('p');
            price.textContent = `R$ ${clothingItem.price}`;

            const size = document.createElement('p');
            size.textContent = `Tamanho: ${clothingItem.size}`;

            const description = document.createElement('p');
            description.textContent = `Descrição: ${clothingItem.description}`;
            
            li.appendChild(name);
            li.appendChild(img);
            li.appendChild(buyButton);
            li.appendChild(price);
            li.appendChild(size);
            li.appendChild(description);

            clothesList.appendChild(li);
        });
    }
});
