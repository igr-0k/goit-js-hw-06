const listCategory = document.querySelectorAll('.item');
console.log('Number of categories:', listCategory.length);

listCategory.forEach(function (category) {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.childElementCount);
});
