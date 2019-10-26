class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
       `;
        productList.appendChild(element);
        this.resetForm();
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }

    delProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssclass) {
      const div = document.createElement('div');
      div.className = "alert alert - ${cssclass}";
      div.appendChild(document.createTextNode(message));
      //mostrar en el dom
      const cointener = document.querySelector('.container');
      const App = document.querySelector('#App');
      cointener.insertBefore(div, App);

    }
}

//Dom Events

document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);

        const ui = new UI();
        ui.addProduct(product);
        ui.showMessage('Agregado','success');

        e.preventDefault();
    });

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.delProduct(e.target);
});