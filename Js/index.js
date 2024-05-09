// Define the bank accounts
let accounts = {
  1234567890: {
    balance: 10000,
    pin: 1234,
  },
  9876543210: {
    balance: 500,
    pin: 5678,
  },
};

// Define the transfer function
function transferMoney() {
  // Prompt for the account number to transfer from
  let accountFrom = prompt("Enter the account number to transfer from:");
  // Prompt for the PIN
  let pin = parseInt(prompt("Enter the PIN for account " + accountFrom + ":"));
  // Check if the account exists and the PIN is correct
  if (accounts[accountFrom] && accounts[accountFrom].pin === pin) {
    // Prompt for the account number to transfer to
    let accountTo = prompt("Enter the account number to transfer to:");
    // Prompt for the amount to transfer
    let amount = parseFloat(prompt("Enter the amount to transfer:"));
    // Check if the accountTo exists and the amount is valid
    if (
      accounts[accountTo] &&
      amount > 0 &&
      accounts[accountFrom].balance >= amount
    ) {
      // Deduct the amount from accountFrom
      accounts[accountFrom].balance -= amount;
      // Add the amount to accountTo
      accounts[accountTo].balance += amount;
      alert(
        `Transferred $${amount} from account ${accountFrom} to account ${accountTo}`
      );
    } else {
      alert("Invalid account or amount");
    }
  } else {
    alert("Invalid account or PIN");
  }
}

// Call the transfer function
transferMoney();
