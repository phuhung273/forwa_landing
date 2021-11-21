
(async function() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    const sku = params['sku'];

    if(sku) {
        fetch(`http://localhost/rest/V2/products/${sku}`)
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                const { name, extension_attributes } = data;
                const { base_image_urls } = extension_attributes;
    
                const productName = document.getElementById('product-name');
                const productBaseImage = document.getElementById('product-base-image');
                productName.innerText = name;
                productBaseImage.src = base_image_urls[0];
            }).catch((error) => {
                console.log(error);
            });
    }

 })();