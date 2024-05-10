function generateInvoice(event) {
    event.preventDefault();

    // Retrieve input values
    const senderUPI = document.getElementById('senderUPI').value;
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;
    const upiNumber = document.getElementById('upiNumber').value;

    // Generate a random transaction ID
    const transactionID = generateTransactionID();


    // Create the invoice content
    const invoiceContent = `
      <h2>Invoice</h2>
      <p><strong>Sender UPI ID:</strong> ${senderUPI}</p>
      <p><strong>UPI Number:</strong> ${upiNumber}</p>
      <p><strong>Amount:</strong> ₹${amount}</p>
      <p><strong>Transaction ID:</strong> ${transactionID}</p>`;

    // Display the invoice
    const invoiceElement = document.getElementById('invoice');
    invoiceElement.innerHTML = invoiceContent;
    invoiceElement.style.display = 'block';

    // Clear the form
    document.getElementById('paymentForm').reset();
}

function generateTransactionID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let transactionID = '';

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        transactionID += characters.charAt(randomIndex);
    }

    return transactionID;
}