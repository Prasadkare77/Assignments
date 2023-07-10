const bill = document.querySelector("#bill");
const discount = document.querySelector("#discount");
const calculator = document.querySelector("#submit");
const total = document.querySelector("#totalDisc");

calculator.addEventListener('click', () => {
  const billValue = bill.value;
  const discountValue = discount.value;
  const valid = isValid(discountValue);
  if (valid) {
    const discountAmount = billValue - (billValue * discountValue) / 100;
    console.log(discountAmount);
    total.innerHTML = `Total Amount to pay is: ${discountAmount}`;
  } else {
    alert(`Entered discount is not correct: ${discountValue}`);
  }
});
function isValid(discount) {
  if (discount < 0 || discount > 100) {
    return false;
  }
  return true;
}
