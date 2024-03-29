import inquirer from "inquirer";

async function atm() {


    //Suppose balance = 10000
    let balance = 10000;
    
    //Pin input
    const  {pin}  = await inquirer.prompt([{

        name: 'pin',
        type: 'number',
        message: 'Enter the four digits pin code'

    }]);

    //Invalid pin error.
    const invalid_pin = ()=>{

        if(!(pin >= 1000 && pin <= 10000)){
        throw new Error('Sorry, You have entered invalid pin. ')  

    }};

    invalid_pin();
    
    //Transaction methods

     const Transaction = await inquirer.prompt([{

        name : 'Transaction',
        type : 'list',
        message : 'Select the transaction method',
        choices : ["Withdraw" , "Deposit" , "Check balance"]

     }]);


     switch(Transaction.Transaction){
      //Withdraw method
      case "Withdraw":
      //User withdraw amount input.
      const amount = await inquirer.prompt([{

         name : 'amount',
         type : 'number',
         message : 'Enter the withdraw amount'

      }]);
            
      //Convert Withdraw input amount into number.
      const withdrawAmount = Number(amount.amount);
            
      if (withdrawAmount > 0 && withdrawAmount <= balance) {
          let withdraw_Amount = balance - withdrawAmount;
          console.log("The withdrawn amount = " + withdraw_Amount);
          
      } else {
          console.log('Sorry, The transaction cannot proceed. Your balance is less than amount entered.');
      }

      
      break;
      
      //Deposit method
      case "Deposit" :
      //User Deposit amount input.
      const depositAmount = await inquirer.prompt([{

         name : 'deposit',
         type : "number",
         message : 'Enter the deposit amount'

      }]);

      //Convert deposit input amount into number.
      const deposit_amount = Number(depositAmount.depositAmount);

      //Total deposit amount
      let TotaldepositAmount = balance + deposit_amount;
      console.log("The deposited amount = " + TotaldepositAmount);
      break;
      
      //Check balalnce
      case "Check balance" :
      console.log("Balance = " + balance);
    }};
    
atm();
