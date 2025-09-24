//! Step 1.Select a list item using data attribute
const selectedIemEl = document.querySelector('[data-item="fruit"]');
console.log(selectedIemEl);

//! Step 2.Navigate to the parent <ul> element
const parentEl = selectedIemEl.parentNode;
console.log(parentEl);

//! Step 1.Navigate to grandParent
const grandParent = parentEl.parentNode;
console.log(grandParent);

//! Step 1.Navigate to greatGrandParent
const greatGrandParent = grandParent.parentNode;
console.log(greatGrandParent);
