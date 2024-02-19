function goToMain() {
    document.getElementById('front').classList.add('hidden');

    document.getElementById('main').classList.remove('hidden');

    ticketSelect();
}
let x, new15 = 0, couple20 = 0;

function ticketSelect() {

    document.getElementById('total-price-div').classList.add('hidden', true);
    document.getElementById('Grand-total-div').classList.add('hidden', true);
    document.getElementById('coupon-div').classList.remove('hidden');
    document.getElementById('discount-div').classList.add('hidden', true);
    document.getElementById('seat-number').innerText = 0;
    while (x--) {
        let p = 'seat-' + (x + 1);
        let q = 'seat-' + (x + 1) + '-div';

        let b = document.getElementById(p).innerText;

        document.getElementById(b).setAttribute('disabled', true);
        document.getElementById(b).classList.remove('selected');


        document.getElementById(q).classList.add('hidden', true);
    }

    x = 0;

    document.querySelectorAll('.tic').forEach(bt => {
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
            }

            document.getElementById('seat-warn').classList.remove('hidden');

            let couponCheck = document.getElementById('coupon-input').value;

            if ((couponCheck == 'new15' || new15 === 1) && x != 0) {
                document.getElementById('coupon-btn').removeAttribute('disabled');
                document.getElementById('discount-price').innerText = x * 82.5;

                document.getElementById('Grand-total').innerText = x * 550 - x * 82.5;
            }
           else if ((couponCheck == 'couple 20' || couple20 === 1) && x != 0) {
                document.getElementById('coupon-btn').removeAttribute('disabled');
                document.getElementById('discount-price').innerText = x * 110;

                document.getElementById('Grand-total').innerText = x * 550 - x * 110;
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

}

function seatCut() {
    let y = parseInt(document.getElementById('seat-available').innerText);
    y--;
    document.getElementById('seat-available').innerText = y;
}

function coupon() {
    if ((document.getElementById('coupon-input').value) === 'new15') {

        new15 = 1;

        document.getElementById('coupon-input').value = '';
        document.getElementById('coupon-div').classList.add('hidden');
        document.getElementById('discount-div').classList.remove('hidden');

        document.getElementById('discount-price').innerText = x * 82.5;

        document.getElementById('Grand-total').innerText = x * 550 - x * 82.5;
    }
    else if ((document.getElementById('coupon-input').value) === 'couple 20') {

        couple20 = 1;
        document.getElementById('coupon-input').value = '';
        document.getElementById('coupon-div').classList.add('hidden');
        document.getElementById('discount-div').classList.remove('hidden');

        document.getElementById('discount-price').innerText = x * 110;

        document.getElementById('Grand-total').innerText = x * 550 - x * 110;
    }
}

function confirm() {
    if (document.getElementById('phone-num').value != '' && x != 0) {
        document.getElementById('phone-num').value = '';
        document.getElementById('name').value = '';

        document.getElementById('main').classList.add('hidden');
        document.getElementById('last').classList.remove('hidden');
    }
    else if(x == 0){
        alert('Please select at least one seat !');
    }
    else {
        alert('Please give you phone number for ticket conirmation');
    }
}


function continueToMain() {
    document.getElementById('last').classList.add('hidden');
    document.getElementById('front').classList.remove('hidden');
}