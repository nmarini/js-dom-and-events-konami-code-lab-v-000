const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  const body = document.body;
  let index = 0;
  body.addEventListener('keydown', function(k){
    const key = parseInt(k.detail || k.which);

    if (key === code[index]) {
      index++;

      if (index === ) {
        alert("Hooray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  });

}