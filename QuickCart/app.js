document.addEventListener('DOMContentLoaded', function () {

    let list = document.querySelector('.col-md-6 .col-md-6');
    let btns = document.querySelectorAll('.card button');
    let totalCost = document.querySelector('.totalCost span');
    let checkout = document.querySelector('.checkout');
    let cart = document.querySelector('#cart-section');
    let total = 0;

    //add item to cart
    Array.from(btns).forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (e.target.className != "btn btn-success outOfStock") {
                let a = document.createElement('div');
                let b = e.target.parentElement.parentElement;
                a.innerHTML += b.outerHTML;
                let c = a.children[0].children[1].children[2];
                c.remove();
    
                //add delete button to items in cart
                let dltBtn = document.createElement('div');
                dltBtn.classList.add('btn', 'btn-danger');
                dltBtn.textContent = 'Delete';
                a.children[0].children[1].append(dltBtn);
                list.innerHTML += a.outerHTML;
    
                //add cost to total cost
                let cost = Number(e.target.parentElement.children[1].textContent);
                total += Number(cost);
                totalCost.innerHTML = "$" + Number(total).toFixed(2);
            }
            else {
                alert("There isn’t Trail mix in stock!");
            }
        });
    });

    //remove item from cart
    list.addEventListener('click', function (e) {
        if (e.target.className == 'btn btn-danger') {
            e.target.parentElement.parentElement.parentElement.remove();

            //subtract cost from total cost
            total -= Number(e.target.parentElement.children[1].textContent);
            totalCost.innerHTML = "$" + Number(total).toFixed(2);
        }
    });

    //checkout success
    checkout.addEventListener('click', function (e) {
        if (cart.children[0].children[1].children[0].children[0].children[0].hasChildNodes()) {
            alert("Thank you! Your purchase was successful!");
            location.href='./pickup.html';
        }
        else {
            alert('Cart is empty!')
        }
        console.log(cart.children[0].children[1].children[0].children[0].children[0]);
    });

})





