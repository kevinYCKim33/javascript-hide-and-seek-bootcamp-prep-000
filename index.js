function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested");
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let currentChild = document.getElementById("grand-node");
  let nextChild = currentChild.children[0];
  while(nextChild) {
    currentChild = nextChild;
    nextChild = currentChild.children[0];
  }
  return currentChild;
}

// <div id="grand-node">
//   <div>
//     <div>
//       <div>
//         <div>
//           boo!
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
