cl = console.log;

const player = document.getElementById("players");

const all1 = document.querySelectorAll('.all');

const onChangecolor = (eve) => {
    let getplayer1 = eve.target.value;
    cl(getplayer1);
    all1.forEach(div => div.classList.add('d-none'));

   const getimgs = Array.from(document.querySelectorAll('.' + getplayer1));

   getimgs.forEach(img => img.classList.remove('d-none'));
}



player.addEventListener('change', onChangecolor);