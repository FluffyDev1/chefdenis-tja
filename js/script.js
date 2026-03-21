(function () {
    emailjs.init({
        publicKey: "bwjgNjG4UZRmSQ7qb",
    });
})();

var producte = [
    {
        type: 'gustari',
        id: 1,
        img: './imagini/producte/cheeseburger-cu-pui.png',
        name: 'Cheeseburger cu pui',
        desc: 'Salată verde proaspătă, felii fine de cașcaval',
        price: 55
    },
    {
        type: 'gustari',
        id: 2,
        img: './imagini/producte/bagheta.png',
        name: 'Baghetă',
        desc: 'Șuncă de curcan cu salată verde',
        price: 35
    },
    {
        type: 'gustari',
        id: 3,
        img: './imagini/producte/crenvusti.png',
        name: 'Crenvuști foietaj',
        desc: 'Carne proaspătă, brânză cheddar',
        price: 40
    },
    {
        type: 'gustari',
        id: 4,
        img: './imagini/producte/khachapuri.png',
        name: 'Khachapuri  fierbinte',
        desc: 'Brânză topită și cremoasă',
        price: 45
    },
    {
        type: 'gustari',
        id: 5,
        img: './imagini/producte/ciabatta.png',
        name: 'Ciabatta',
        desc: 'Cereale și salami italian',
        price: 35
    },
    {
        type: 'gustari',
        id: 6,
        img: './imagini/producte/wrap-de-pui-salsa.png',
        name: 'Wrap de pui cu sos salsa',
        desc: 'Pui crocant, legume proaspete, salsa',
        price: 60
    },
    {
        type: 'gustari',
        id: 7,
        img: './imagini/producte/croissant.png',
        name: 'Croissant cu ciocolată',
        desc: 'Aluat foietaj cu zahăr umplut cu ciocolată.',
        price: 30
    },
    {
        type: 'gustari',
        id: 8,
        img: './imagini/producte/salata-caesar.png',
        name: 'Salată caesar',
        desc: 'Pui fript, crutoane și parmezan.',
        price: 50
    },
    {
        type: 'gustari',
        id: 9,
        img: './imagini/producte/bagheta-cu-rulada-pui.png',
        name: 'Bagheta cu rulada de pui',
        desc: 'Ruladă pui, roșii, salată verde',
        price: 40
    },
    {
        type: 'gustari',
        id: 10,
        img: './imagini/producte/bagheta-cu-salam.png',
        name: 'Bagheta cu salami, sos picant',
        desc: 'Salam felii, sos ardei iute',
        price: 40
    },
    {
        type: 'combo',
        id: 11,
        img: './imagini/producte/crenvusti-caf.png',
        name: 'Crenvurști + Cafea',
        desc: 'Crenvuști foietaj cu cafea la alegere.',
        price: 60
    },
    {
        type: 'combo',
        id: 12,
        img: './imagini/producte/soda-croissant.png',
        name: 'Soda + Croissant',
        desc: 'Croissant cu ciocolată și băutură răcoritoare',
        price: 45
    },
    {
        type: 'combo',
        id: 13,
        img: './imagini/producte/lamaie-sandwich.png',
        name: 'Soda cu Lămâie + Sandwich',
        desc: 'Sandwich cu mix de carne și cașcaval.',
        price: 100
    },
    {
        type: 'combo',
        id: 14,
        img: './imagini/producte/capucc-toast.png',
        name: 'Cappuccino + Toast cu Ricotta',
        desc: 'Brânză ricotta cremoasă pe pâine',
        price: 80
    },
    {
        type: 'combo',
        id: 15,
        img: './imagini/producte/croissant-cafea.png',
        name: 'Croissant + Cafea',
        desc: 'Croissant cu cafea',
        price: 35
    },
    {
        type: 'bauturi',
        id: 16,
        img: './imagini/producte/apa-dorna.png',
        name: 'Apă Dorna',
        desc: '',
        price: 12
    },
    {
        type: 'bauturi',
        id: 17,
        img: './imagini/producte/sprite.png',
        name: 'Sprite',
        desc: '',
        price: 20
    },
    {
        type: 'bauturi',
        id: 18,
        img: './imagini/producte/coca-cola.png',
        name: 'Coca-Cola',
        desc: '',
        price: 20
    },
    {
        type: 'bauturi',
        id: 19,
        img: './imagini/producte/fanta.png',
        name: 'Fanta',
        desc: '',
        price: 20
    },
    {
        type: 'bauturi',
        id: 20,
        img: './imagini/producte/limonada.png',
        name: 'Limonadă',
        desc: '',
        price: 40
    },
    {
        type: 'bauturi',
        id: 21,
        img: './imagini/producte/bautura.png',
        name: 'Espresso / Americano',
        desc: '',
        price: 25
    },
    {
        type: 'bauturi',
        id: 22,
        img: './imagini/producte/bautura.png',
        name: 'Cappucino',
        desc: '',
        price: 27
    },
    {
        type: 'bauturi',
        id: 23,
        img: './imagini/producte/bautura.png',
        name: 'Latte',
        desc: '',
        price: 30
    },
    {
        type: 'bauturi',
        id: 24,
        img: './imagini/producte/ceai.png',
        name: 'Ceai în sortiment',
        desc: '',
        price: 20
    },
    {
        type: 'bauturi',
        id: 25,
        img: './imagini/producte/ciocolata-fierbinte.png',
        name: 'Ciocolată fierbinte',
        desc: '',
        price: 25
    }
];

let producteSelectate = [];
try {
    producteSelectate = JSON.parse(localStorage.getItem('producte')) ?? [];
} catch (err) {
    console.log(err);
}


function updateCart(producte) {
    // adauga itemele in cos la inceput
    try {
        let _producte = producte ?? JSON.parse(localStorage.getItem('producte')) ?? [];

        let _producteleSelectate = document.getElementById('producte-selectate');
        _producteleSelectate.innerHTML = '';

        _producte.forEach(product => {
            _producteleSelectate.insertAdjacentHTML('beforeend', `<div class="cart-product">
    <span>${product.amount}x ${product.name}</span>
    <img src="${product.img}" alt="">
</div>`);
        })

        let cartPret = document.querySelector('.cart-info p');
        let cartStatus = document.querySelector('.cart-info span');

        if (_producte.length == 0) {
            cartPret.style.opacity = 0;
            cartStatus.style.opacity = 1;
        } else {
            cartStatus.style.opacity = 0;
            cartPret.style.opacity = 1;
            cartPret.textContent = `Pret: ${_producte.reduce((prev, curr) => prev + (curr.price * curr.amount), 0)} MDL`;
        }
    } catch (err) { }


}


function clearCart() {
    localStorage.setItem('producte', '[]');
    producteSelectate = [];
    updateCart([]);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        let menu = document.querySelector('.mobile-menu-overlay');
        if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });


    document.querySelector('.close-menu').addEventListener('click', () => {
        let menu = document.querySelector('.mobile-menu-overlay');
        if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });

    const inputs = document.querySelectorAll('#combo-container');
    inputs.forEach(input => {
        input.addEventListener('click', (e) => {
            e.stopPropagation();
            input.classList.toggle('active');
        });
    })
    
    let locationInput = document.querySelector('.loc-combo').children[0].children[0];
    const locationList = document.getElementById('loc-list');
    locationList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            locationInput.value = e.target.textContent;
        }
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', (ev) => {
            if (ev.target.attributes['href'])
                document.location.href = ev.target.attributes['href']?.value;
        })
    })


    document.querySelectorAll('.cart').forEach(btn => {
        btn.addEventListener('click', (ev) => {
            let mobileMenu = document.querySelector('.mobile-menu-overlay');
            if(mobileMenu.classList.contains('menu-open')) {
                mobileMenu.classList.remove('menu-open');
            }
            let menu = document.querySelector('.cart-menu-overlay');
            if (menu.classList.contains('menu-open')) {
                menu.classList.remove('menu-open');
            } else {
                menu.classList.add('menu-open');
            }
        })
    });

    document.querySelector('.close-cart-menu').addEventListener('click', () => {
        let menu = document.querySelector('.cart-menu-overlay');
        if (menu.classList.contains('menu-open')) {
            menu.classList.remove('menu-open');
        } else {
            menu.classList.add('menu-open');
        }
    });

    document.querySelector('#order-now').addEventListener('click', (e) => {
        e.preventDefault();
        
        let cartError = document.getElementById('cart-error');
        let cartSuccess = document.getElementById('cart-success');

        console.log(producteSelectate);
        if(!producteSelectate.length) {
            cartError.textContent = 'Coșul dvs. este gol.';
            setTimeout(() => {
                cartError.textContent = '';
            }, 1500);
            return;
        }

        let email = document.getElementById('cart-email');
        let _email = email.value;
        if(!_email.length || !_email.includes('@')) {
            cartError.textContent = 'Completați email-ul.';
            setTimeout(() => {
                cartError.textContent = '';
            }, 1500);
            return;
        }
        let locatie = document.querySelector('.cart-locatie');
        let _locatie = locatie.value;
        let time = new Date();

        emailjs.send('service_wp1byrm', 'template_497eoz7', {
            cart_items: producteSelectate.map(a => `${a.amount}x ${a.name} | ${a.price} MDL`).join('\n'),
            ora: time.getHours().toString().padStart(2, '0') + ":" + time.getMinutes().toString().padStart(2, '0'),
            email: _email,
            locatie: _locatie
        });

        cartError.textContent = '';
        cartSuccess.textContent = 'Comanda a fost trimisă!';
        setTimeout(() => {
            cartSuccess.textContent = '';
        }, 1500);
        clearCart();
    });

    updateCart();

})


function toggleTheme() {
    document.documentElement.classList.toggle('light');
    const isLight = document.documentElement.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
