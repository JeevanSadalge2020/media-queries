// function unique(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = 0;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (Object.keys(obj).includes(arr[i].toString())) {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     }
//   }
//   const index = Object.values(obj).indexOf(1);
//   return +Object.keys(obj)[index] || null;
// }

// console.log(unique([1, 1, 2, 2, 3]));
// 'screen' is name 👇 of a function
window.onresize = screen;
window.onload = screen;

// Function named 'screen' 👇

function screen() {
  Width = window.innerWidth;
  document.getElementById("size").innerHTML = "Width : " + Width + " px";
}
