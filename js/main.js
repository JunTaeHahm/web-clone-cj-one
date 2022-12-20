// 퀵메뉴 이미지
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

// 중첩 for문을 사용해서 4개의 span에 변수로 각 이미지 20개씩 생성한다.
// span 4개 돌리는 forans
for (let i = 0; i < quickSpan.length; i++) {
  let images = '';

  // 각 span 안에 img 20개 생성 for문
  for (let j = 0; j < 20; j++) {
    if (j < 10) {
      images += `<img src="assets/images/quick${i + 1}/quick0${i + 1}_0000${j}.png" />`;
    } else {
      images += `<img src="assets/images/quick${i + 1}/quick0${i + 1}_000${j}.png" />`;
    }
  }
  quickSpan[i].innerHTML = images;
}

// 퀵메뉴 이미지 애니메이션
const quickList = document.querySelectorAll('.content1 > ul > li'); // 0,1,2,3

for (let i = 0; i < quickList.length; i++) {
  quickList[i].addEventListener('mouseover', e => {
    for (let k = 0; k < 20; k++) {
      let spanImg = e.currentTarget.children[0].children[0].children;
      spanImg[k].style.animation = `ani 1s linear ${0.05 * k}s 1`;
    }
  });
}
for (let i = 0; i < quickList.length; i++) {
  quickList[i].addEventListener('mouseout', e => {
    for (let k = 0; k < 20; k++) {
      let imgLi = e.currentTarget.children[0].children[0].children;
      imgLi[k].style.animation = 'none';
    }
  });
}

// 로그인 이미지
const loginAppear = document.querySelector('.info>.login>.appear');
const loginLoop = document.querySelector('.info>.login>.loop');

let appear = '';
for (let i = 0; i < 57; i++) {
  if (i < 10) {
    appear += `<img src="assets/images/appear/appear_0000${i}.png" />`;
  } else {
    appear += `<img src="assets/images/appear/appear_000${i}.png" />`;
  }
  loginAppear.innerHTML = appear;
}

let loop = '';
for (let i = 0; i < 82; i++) {
  if (i < 10) {
    loop += `<img src="assets/images/loop/loop_0000${i}.png" />`;
  } else {
    loop += `<img src="assets/images/loop/loop_000${i}.png" />`;
  }
  loginLoop.innerHTML = loop;
}

// 로그인 애니메이션
// 1) appear 57개 이미지, 딜레이 0.05s 씩 증가
//    animation: ani 2.85s linear 0s 1;
const appearAni = loginAppear.querySelectorAll('img');
for (let i = 0; i < appearAni.length; i++) {
  appearAni[i].style.animation = `ani 2.85s linear ${i * 0.05}s 1`;
}
// 2) loop 82개 이미지, 딜레이 0.05s 씩 증가
//    animation: ani 4.1s linear 2.85s infinite;
const loopAni = loginLoop.querySelectorAll('img');
for (let i = 0; i < loopAni.length; i++) {
  loopAni[i].style.animation = `ani 4.1s linear ${2.85 + i * 0.05}s infinite`;
}

// 고객센터
// toggle로 class on
// title = "고객센터 열기/닫기"
const csBtn = document.querySelectorAll('.topMenu>dd');

csBtn[4].addEventListener('click', e => {
  e.currentTarget.classList.toggle('on');
  if (e.currentTarget.classList.contains('on')) {
    e.currentTarget.children[0].setAttribute('title', '고객센터 닫기');
  } else {
    e.currentTarget.children[0].setAttribute('title', '고객센터 열기');
  }
});

//주메뉴
const headerWrap = document.querySelector('.header_wrap');
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const subMenu = document.querySelectorAll('.gnb>ul>li>ul');

for (let i = 0; i < gnbMenu.length; i++) {
  gnbMenu[i].addEventListener('mouseover', () => {
    // 고객센터에 .on 붙어있으면 .on삭제
    // 검색박스에 .on 붙어있으면 .on삭제
    if (csBtn[4].classList.contains('on') || srchOpen.classList.contains('on')) {
      csBtn[4].classList.remove('on');
      srchOpen.classList.remove('on');
      srchBox.classList.remove('on');
    }

    headerWrap.classList.add('on');
    subMenu.forEach(item => {
      item.classList.add('on');
    });
  }); //mouseover

  gnbMenu[i].addEventListener('mouseout', () => {
    headerWrap.classList.remove('on');
    subMenu.forEach(item => {
      item.classList.remove('on');
    });
  }); //mouseout

  gnbMenu[i].children[0].addEventListener('focus', () => {
    headerWrap.classList.add('on');
    subMenu.forEach(item => {
      item.classList.add('on');
    });
  }); //focus

  gnbMenu[i].children[0].addEventListener('blur', () => {
    headerWrap.classList.remove('on');
    subMenu.forEach(item => {
      item.classList.remove('on');
    });
  }); //blur
}

// 검색열기닫기
const srchBox = document.querySelector('form.srch');
const srchOpen = document.querySelector('.srch_open');

srchOpen.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
  srchBox.classList.toggle('on');

  if (e.currentTarget.classList.contains('on')) {
    e.currentTarget.children[0].setAttribute('title', '검색입력서식 닫기');
  } else {
    e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기');
  }
});

// 배너
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section'); //섹션 12개 (0~11)

const bnnArrowA = document.querySelectorAll('.banner_arrow>a');
const bnnRollA = document.querySelectorAll('.banner_rolling>ul>li>a');
const rollingA = document.querySelectorAll('.banner_rolling a');

const bnnPlayBtn = document.querySelector('.banner_rolling>p>a.btn_play');

let bnnWidth = document.querySelector('body>section').offsetWidth; //section 의 width 값 할당
window.addEventListener('resize', () => {
  bnnWidth = document.querySelector('body>section').offsetWidth; //resize 될 때 width값 재할당
});

// 배너 이미지
let sectionImg = '';

for (let i = 0; i < bnnSection.length; i++) {
  sectionImg = `url(assets/images/banner/banner${i}.jpg) no-repeat 50% 0`;
  bnnSection[i].style.background = sectionImg;
}

// 배너 넘버
let bnnNum = 0;
let lastNum = document.querySelectorAll('.banner_frame>section').length - 1;

// 함수
// left 값 변경하고 클래스 추가/삭제,
// 섹션에 white포함 되어있으면 버튼/롤링에 white클래스 추가
let bnnAction = bnnNum => {
  bnnFrame.style.left = `${-bnnNum * bnnWidth}px`;

  bnnRollA.forEach(item => {
    item.classList.remove('on');
  });
  bnnRollA[bnnNum].classList.add('on');

  if (bnnSection[bnnNum].classList.contains('white')) {
    bnnArrowA.forEach(item => {
      item.classList.add('white');
    });
    rollingA.forEach(item => {
      item.classList.add('white');
    });
  } else {
    bnnArrowA.forEach(item => {
      item.classList.remove('white');
    });
    rollingA.forEach(item => {
      item.classList.remove('white');
    });
  }
};

// 초기 함수 1회 실행
bnnAction(bnnNum);

// next버튼 클릭
btnNext.addEventListener('click', e => {
  e.preventDefault();
  bnnNum++;
  if (bnnNum > lastNum) bnnNum = 0;
  bnnAction(bnnNum);
  clearTimeout(autoBnn);
  flag = false;
  bnnPlayBtn.classList.add('on');
});

// preve버튼 클릭
btnPrev.addEventListener('click', e => {
  e.preventDefault();
  bnnNum--;
  if (bnnNum < 0) bnnNum = lastNum;
  bnnAction(bnnNum);
  clearTimeout(autoBnn);
  flag = false;
  bnnPlayBtn.classList.add('on');
});

// 오토배너
let autoBanner = () => {
  bnnNum++;
  if (bnnNum > lastNum) bnnNum = 0;
  bnnAction(bnnNum);
  autoBnn = setTimeout(autoBanner, 10000); // 재귀함수로 재실행
};
let autoBnn = setTimeout(autoBanner, 10000); // 함수 최초 실행

// 재생/멈춤 버튼
let flag = true;
bnnPlayBtn.addEventListener('click', e => {
  if (flag) {
    bnnPlayBtn.classList.add('on');
    clearTimeout(autoBnn);
    flag = false; // flag = 0;
  } else {
    bnnPlayBtn.classList.remove('on');
    autoBnn = setTimeout(autoBanner, 10000);
    flag = true; // flag = 1;
  }
});

// 롤링 클릭
for (let i = 0; i < bnnRollA.length; i++) {
  bnnRollA[i].addEventListener('click', e => {
    e.preventDefault;
    clearTimeout(autoBnn);
    flag = false;
    bnnAction(i);
    bnnPlayBtn.classList.add('on');
    bnnNum = i;
  });
}

// circle 스크롤 이벤트
window.addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop;
  // circle left 움직임
  const doughnut_left_l = document.querySelector('.doughnut_left_l');
  const doughnut_left_s = document.querySelector('.doughnut_left_s');
  const combine_left = document.querySelector('.combine_left');

  doughnut_left_s.style.top = `${scroll * 0.3}px`;
  doughnut_left_l.style.top = `${1310 - scroll * 0.8}px`;
  combine_left.style.top = `${scroll * 0.7}px`;

  // circle center 움직임
  const doughnut_center_m = document.querySelector('.doughnut_center_m');

  doughnut_center_m.style.top = `${1200 - scroll * 0.7}px`;

  // circle right 움직임
  const combine_right = document.querySelector('.combine_right');
  const doughnut_right_m = document.querySelector('.doughnut_right_m');

  combine_right.style.top = `${scroll * 0.7}px`;
  if (scroll * 0.7 >= 850) doughnut_right_m.style.top = `${scroll * 0.7}px`;
});

// content3
// 브랜드 li에 mouseover 시 모든 li에 .on을 지우고 mouseover한 li만 .on추가
const brandLi = document.querySelectorAll('.content3_inner>div>ul>li');

let htmlWidth = document.querySelector('html').offsetWidth;
let classLeft = '';
let changeCls = () => {
  if (htmlWidth > 768) {
    classLeft = 6; // 타블렛,PC크기는 6개씩
  } else {
    classLeft = 4; // 모바일은 4개씩
  }
};
changeCls();
window.addEventListener('resize', () => {
  htmlWidth = document.querySelector('html').offsetWidth;
  changeCls();
});

brandLi.forEach((item, idx) => {
  item.addEventListener('mouseover', e => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.add('on');
    } else {
      e.currentTarget.classList.add('left');
    }
  });
  item.addEventListener('mouseout', e => {
    e.preventDefault();
    if ((idx + 1) % classLeft !== 0) {
      e.currentTarget.classList.remove('on');
    } else {
      e.currentTarget.classList.remove('left');
    }
  });
});

// 카테고리 li 클릭 시 해당 li class의 속성값 가져와서 변수에 할당
// 브랜드 li와 변수 값이랑 비교 해서 switch case문 사용

const categoryLi = document.querySelectorAll('.content3_inner>ul>li>a'); //5개
let categoryClass = '';

let categoryAction = (idx, cls) => {
  categoryLi.forEach(item => {
    item.classList.remove('on');
    categoryLi[idx].classList.add('on');
  });
  brandLi.forEach(item => {
    item.style.display = 'block';
    if (item.classList.contains(cls) == false) {
      item.style.display = 'none';
    }
  });
};

categoryLi.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    categoryClass = e.currentTarget.parentElement.getAttribute('class');

    switch (categoryClass) {
      case 'all':
        categoryLi.forEach(item => {
          item.classList.remove('on');
          categoryLi[0].classList.add('on');
        });
        brandLi.forEach(item => {
          item.style.display = 'block';
        });
        break;
      case 'ent':
        categoryAction(1, 'ent');
        break;
      case 'shop':
        categoryAction(2, 'shop');
        break;
      case 'diner':
        categoryAction(3, 'diner');
        break;
      case 'box':
        categoryAction(4, 'box');
        break;
      default:
        break;
    }
  });
});

// family site 클릭 시 .on toggle
const famSite = document.querySelector('.footer_inner>dl>dd.family_site');

famSite.addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.classList.toggle('on');
});

// 스크롤이 0보다 커지면 .top에 .on 추가
// 더 내려가면 .on 삭제 .ab 추가
const btnTop = document.querySelector('.top');

window.addEventListener('scroll', e => {
  let scroll = document.querySelector('html').scrollTop;

  if (scroll > 0) {
    btnTop.classList.remove('ab');
    btnTop.classList.add('on');
  }
  if (scroll > 2000) {
    btnTop.classList.remove('on');
    btnTop.classList.add('ab');
  }
});

// 탑버튼 클릭 시 부드럽게 올라가게
btnTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// 햄버거 버튼 클릭
const body = document.querySelector('body');
const bg = document.querySelector('div.bg');

const mobBtn_open = document.querySelector('.mobBtn_open');
const mobBtn_close = document.querySelector('.mobBtn_close');
const mob = document.querySelector('.mob');

mobBtn_open.addEventListener('click', e => {
  e.preventDefault();
  mob.classList.add('on');
  body.classList.add('on');
  bg.classList.add('on');
  mobBtn_close.classList.add('on');
});
mobBtn_close.addEventListener('click', e => {
  e.preventDefault();
  mob.classList.remove('on');
  body.classList.remove('on');
  bg.classList.remove('on');
  mobBtn_close.classList.remove('on');
});

// 햄버거 메뉴 드롭다운
const mob_topMenu_dd = document.querySelector('.mob_topMenu>dd:nth-last-of-type(2)');
const mob_topMenu_ul = document.querySelector('.mob_topMenu>dd:nth-last-of-type(2)>ul');
const mob_gnb_ul = document.querySelectorAll('nav.mob_gnb>ul>li.arrow');

mob_topMenu_dd.addEventListener('click', e => {
  e.preventDefault();
  mob_topMenu_dd.classList.toggle('on');
});
mob_gnb_ul.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('on');
  });
});
