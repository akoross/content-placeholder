const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const date = document.querySelector('#date');
const name = document.querySelector('#name');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
  header.innerHTML = `<img src="https://assets.imgix.net/examples/bridge.jpg" alt="">`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, quo?`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
  name.innerHTML = `John Doe`;
  date.innerHTML = `Jan 22, 2022`;

  animated_bgs.forEach((bg) => bg.classList.remove('inamated-bg'));
  console.log(animated_bg_texts);
  animated_bg_texts.forEach((bgText) =>
    bgText.classList.remove('animated-bg-text', 'animated-bg'),
  );
};

setTimeout(getData, 2500);
