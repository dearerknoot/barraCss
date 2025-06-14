const vbar = document.querySelector('.vbar');

function rNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function pararVbar(){
    vbar.style.animationPlayState = 'paused';
    
    const style = window.getComputedStyle(vbar);
    const marginLeft = parseInt(style.marginLeft);


      if (marginLeft >= 50 && marginLeft < 200) {
        let lowDmg = rNum(0, 50);
        if (lowDmg <= 10) {
          lowDmg = 0;
          alert("errou o ataque :(");
        } else {
          alert(`causou ${lowDmg} de dano, fraco`);
        }
      } else if (marginLeft >= 200 && marginLeft < 350) {

            let medDmg = rNum(50,100);
            alert(`causou ${medDmg} de dano, médio`)

      } else if (marginLeft >= 350 && marginLeft < 500) {
            let highDmg = rNum(100,120);
            alert(`critical dmg: ${highDmg}`)
      } else if (marginLeft >= 650 && marginLeft <= 750) {
        let lowDmg = rNum(0, 50);
        if (lowDmg <= 10) {
          lowDmg = 0;
          alert("errou o ataque :(");
        } else {
          alert(`causou ${lowDmg} de dano, fraco`);
        }
      } else if (marginLeft >= 500 && marginLeft < 650) {
             let medDmg = rNum(50,100);
            alert(`causou ${medDmg} de dano, médio`)
      }
}
