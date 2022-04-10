  const toggleBtn = document.querySelector('.text');
  const divList = document.querySelector('.para1');
  const toggleBtn1 = document.querySelector('.text2');
  const divList2 = document.querySelector('.para2');

  toggleBtn.addEventListener('click', () => {
    if (divList.style.display === 'none') {
      divList.style.display = 'block';
    }
    else {
      divList.style.display = 'none';
    }
  });

  toggleBtn1.addEventListener('click', () => {
    if (divList2.style.display === 'none') {
      divList2.style.display = 'block';
    }
    else {
      divList2.style.display = 'none';
    }
  });
