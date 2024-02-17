function ok()
{
    let x = parseInt(document.getElementById('seat-available').innerText);
    x--;
    document.getElementById('seat-available').innerText = x;
}

let x = 0;

document.querySelectorAll('.btn').forEach(bt => {
    bt.addEventListener('click', function (e) {
        if(x<4)
        {
            document.getElementById(e.target.innerText).setAttribute("class","btn bg-[#1DD100] selected");
            x = document.querySelectorAll('.selected').length;
        }
    })
})