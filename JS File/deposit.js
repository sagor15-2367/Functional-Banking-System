
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Normal way
    // 1. get the value element id
    // 2.get the value from the element
    // 3. convert string value to a number
    const newDepositAmount = getInputFieldValueById('deposit-field');
    // 1. get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // console.log(newDepositAmount);
    // 1.calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);
})