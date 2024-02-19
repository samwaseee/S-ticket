function goToMain() {
    document.getElementById('front').classList.add('hidden');

    document.getElementById('main').classList.remove('hidden');
}

let x = 0;

document.querySelectorAll('.btn').forEach(bt => {
    bt.addEventListener('click', function (e) {
        if (x < 4) {
            document.getElementById(e.target.innerText).setAttribute("class", "btn bg-[#1DD100] text-white selected");
            x = document.querySelectorAll('.selected').length;

            document.getElementById('seat-number').innerText = x;

            let c = 'seat-' + x + '-div';
            let d = 'seat-' + x;

            document.getElementById(c).classList.remove('hidden');
            document.getElementById(d).innerText = bt.id;

            document.getElementById('total-price-div').classList.remove('hidden');
            document.getElementById('total-price').innerText = x * 550;

            document.getElementById('Grand-total-div').classList.remove('hidden');
            document.getElementById('Grand-total').innerText = x * 550;



            let y = parseInt(document.getElementById('seat-available').innerText);
            y--;
            document.getElementById('seat-available').innerText = y;
        }

        document.getElementById('seat-warn').classList.remove('hidden');

        let couponCheck = document.getElementById('coupon-input').value;

        if ((couponCheck == 'new15' || couponCheck == 'couple 20') && x != 0) {
            document.getElementById('coupon-btn').removeAttribute('disabled');
        }
        else {
            document.getElementById('coupon-btn').setAttribute('disabled', true);
        }
    })
})

document.getElementById('coupon-input').addEventListener('keyup', function () {

    if ((this.value === 'new15' || this.value === 'couple 20') && x != 0) {
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('coupon-btn').setAttribute('disabled', true);
    }
}
)

function coupon() {
    if ((document.getElementById('coupon-input').value) === 'new15') {
        let y = x;
        x = 4;

        document.getElementById('coupon-div').classList.add('hidden');
        document.getElementById('discount-div').classList.remove('hidden');

        document.getElementById('discount-price').innerText = y * 82.5;

        document.getElementById('Grand-total').innerText = y * 550 - y * 82.5;
    }
    else if ((document.getElementById('coupon-input').value) === 'couple 20') {

        let y = x;
        x = 4;

        document.getElementById('coupon-div').classList.add('hidden');
        document.getElementById('discount-div').classList.remove('hidden');

        document.getElementById('discount-price').innerText = y * 110;

        document.getElementById('Grand-total').innerText = y * 550 - y * 110;
    }
}

function confirm() {
    if (document.getElementById('phone-num').value != '') {
        document.getElementById('phone-num').value = '';
        document.getElementById('name').value = '';

        document.getElementById('main').classList.add('hidden');
        document.getElementById('last').classList.remove('hidden');

    }
    else {
        alert('Please give you phone number for ticket conirmation');
    }
}


function continueToMain() {
    document.getElementById('last').classList.add('hidden');
    document.getElementById('front').classList.remove('hidden');
}