const HOST = 'http://159.223.58.233';
// const HOST = 'http://localhost:8000';

(async function() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    const id = params['id'];

    if(id) {
        fetch(`${HOST}/api/products/${id}`)
            .then(response => response.json())
            .then((response) => {
                // console.log(response)
                const { name, images } = response.data;
    
                const productName = document.getElementById('product-name');
                const productBaseImage = document.getElementById('product-base-image');
                productName.innerText = name;
                productBaseImage.src = `${HOST}${images[0].url}`;
            }).catch((error) => {
                console.log(error);
            });
    }

 })();