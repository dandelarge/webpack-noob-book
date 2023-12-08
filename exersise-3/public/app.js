const $incButton = $('#increment');
const $decButton = $('#decrement');
const $counter = $('#countNo');

let count = 0;

$incButton.on('click', () => {
  count++;
  $counter.text(count);
});

$decButton.on('click', () => {
  count--;
  $counter.text(count);
});