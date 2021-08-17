function getInputValue(inputId){
  const inputfild =  document.getElementById(inputId);
  const depositInputText = inputfild.value;
  const inputAmount = parseFloat (depositInputText);
  // clean input 
  inputfild.value= '';
  return inputAmount ;
}

function depositUpdateTotal(depositeFiled, amount){
  // debugger
  const totalElement = document.getElementById(depositeFiled);
  const totalText = totalElement.innerText;
  const preTotal = parseFloat(totalText);

  // const newDepoitTotalAmount = preDepositTotal + newDepositAmount;
  totalElement.innerText = preTotal + amount;
}

function curentBalanceTotal (){
  const balanceToal = document.getElementById('balance-total');
  const balanceToalText = balanceToal.innerText;
  const preBalaneTotal = parseFloat(balanceToalText);
  return preBalaneTotal;
}

function updateBalance(newDepositAmount, isAdd){
  const balanceToal = document.getElementById('balance-total');
  preBalaneTotal = curentBalanceTotal ();

  if(isAdd == true){
    const newBalanceTotal = preBalaneTotal + newDepositAmount;
    balanceToal.innerText = newBalanceTotal;
  }
  if(isAdd==false){
    const newBalanceTotal = preBalaneTotal - newDepositAmount;
    balanceToal.innerText = newBalanceTotal;
  }
}


// Deposit Balance handle 
document.getElementById('deposit-button').addEventListener('click', function(){
    /*
    const depositInput =  document.getElementById('diposit-input');
    const depositInputText = depositInput.value;
    const newDepositAmount = parseFloat (depositInputText);

    //New  Deposit Amount 
      // newDepositAmount = getInputValue('diposit-input');
      */
  /*
    //  Pre deposit  and Update Deposit Amount 
    const depositTotal = document.getElementById('diposit-total');
    const depositTotalText = depositTotal.innerText;
    const preDepositTotal = parseFloat(depositTotalText);

    const newDepoitTotalAmount = preDepositTotal + newDepositAmount;
    depositTotal.innerText = newDepoitTotalAmount;
    // depositUpdateTotal('diposit-total', newDepositAmount)
    */

    /*
    // Currebt update balance 
      const balanceToal = document.getElementById('balance-total');
      const balanceToalText = balanceToal.innerText;
      const preBalaneTotal = parseFloat(balanceToalText);

      const newBalanceTotal = preBalaneTotal + newDepositAmount;
      balanceToal.innerText = newBalanceTotal;
      // updateBalance(newDepositAmount, true);
      */



      /*
      // Step 1
      newDepositAmount = getInputValue('diposit-input');
      depositUpdateTotal('diposit-total', newDepositAmount)
      updateBalance(newDepositAmount, true);
      */

    //  Step 2
      newDepositAmount = getInputValue('diposit-input');
      if(newDepositAmount > 0 ){
        depositUpdateTotal('diposit-total', newDepositAmount)
        updateBalance(newDepositAmount, true);
      }

     });


    //  widthdraw balance  handle 
    document.getElementById('widthdraw-button').addEventListener('click', function(){
      /*
        const widthDrawInput = document.getElementById('widthdraw-input');
        const widthdrawText = widthDrawInput.value;
        const newWidthdrawAmount = parseFloat(widthdrawText);
        // newWidthdrawAmount =  getInputValue('widthdraw-input');
      */

        /*
        // Get pre widthdraw balance + new Widthdraw Balance
        const widthdrawTotal = document.getElementById('widthdraw-total');
        const widthdrawTotalText = widthdrawTotal.innerText;
        const preWidthdrawTotalAmount = parseFloat(widthdrawTotalText);

        const widthdrawTotalAount = preWidthdrawTotalAmount + newWidthdrawAmount;
        widthdrawTotal.innerText = widthdrawTotalAount;
        // depositUpdateTotal('widthdraw-total', newWidthdrawAmount);
        */

        /*
        // update Total balance 
        const balanceToal = document.getElementById('balance-total');
        const balanceToalText = balanceToal.innerText;
        const preBalaneTotal = parseFloat(balanceToalText);

        const mainBalanceTotal = preBalaneTotal - newWidthdrawAmount;
        balanceToal.innerText = mainBalanceTotal;
          // updateBalance(newWidthdrawAmount, false);
          */

        newWidthdrawAmount =  getInputValue('widthdraw-input');
        preBalaneTotal = curentBalanceTotal ();
        if (newWidthdrawAmount > 0 && newWidthdrawAmount < preBalaneTotal ) {
          depositUpdateTotal('widthdraw-total', newWidthdrawAmount);
          updateBalance(newWidthdrawAmount, false);
        } 
        // error meassage (*)--- not work (problem)
        if ( newWidthdrawAmount > preBalaneTotal){
          // error meassage dekhate consoli log korte hoi 
          console.log('soryy balance not enougth')
        }
       });


       

