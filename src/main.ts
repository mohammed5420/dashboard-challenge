import './style.css'

// Adding active class to the hovered link and removing it from the rest
const NavLinks = document.querySelectorAll('.side-nav-dashboard-link');
NavLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});


// Donut chart data
const DonutSlice = [{
  id: 1,
  percent: 30,
  color: '#FF0038',
  label: 'Slice 1'
},
{
  id: 2,
  percent: 25,
  color: '#FFB529',
  label: 'Slice 2'
},
{
  id: 3,
  percent: 45,
  color: '#FF6C1A',
  label: 'Slice 3'
}
];

const circlecontainer = document.getElementById('circlecontainer') as Element;

circlecontainer.innerHTML = DonutSlice.map((item, i, arr) => {
  let offset = 3 * i + arr.filter((_item, j) => j < i)
    .reduce((total, item) => total + item.percent, 0);
  return `<circle data-id="${item.id}" stroke="${item.color}"
          cx="20" cy="20" r="19" class="slice"
          pathLength="${100 + 3 * arr.length}"
          stroke-dasharray="${item.percent} 100"
          stroke-dashoffset="-${offset}" />`;
}).join('');


const menuBtn = document.querySelector('.open-menu-btn') as Element;
const menu = document.querySelector('aside') as Element;

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active-menu');
});

