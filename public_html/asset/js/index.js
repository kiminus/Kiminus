String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
const keypoints_desc_list = [
  [
    'creative',
    'Creativity bring players excitement in the game, novelty makes it popular. My game always provide original design ideas that would win the market',
  ],
  [
    'friendly',
    'Friendly is the key quality for any member in a successful and cohesive team. My cohesive team has won our project a successful customer',
  ],
  [
    'fast-learner',
    'familiar with agile developement and fast learning ensures I can deal with new demands more swiftly and produce output quicker. My current GPA is 3.95 and I am confident in learning new knowledge',
  ],
  [
    'teamwork',
    'teamwork is essential for success. In our CSE 110 project we collaborately win the prize of the class out of 50 teams',
  ],
  [
    'adaptability',
    'need to use new programming language, needed in a new team? I am passionate and ready for changes',
  ],
];

for (let index = 0; index < keypoints_desc_list.length; index++) {
  const keypoint = document.querySelector(
    `#${keypoints_desc_list[index][0]}-keypoint`
  );
  keypoint.addEventListener('mouseenter', e => {
    e.preventDefault();
    const text = keypoint.querySelector('p');
    text.innerText = keypoints_desc_list[index][1];
    text.classList.add('keypoints-desc');
  });
  keypoint.addEventListener('mouseleave', e => {
    e.preventDefault();
    const text = keypoint.querySelector('p');
    text.innerText = keypoints_desc_list[index][0].toProperCase();
    text.classList.remove('keypoints-desc');
  });
}
