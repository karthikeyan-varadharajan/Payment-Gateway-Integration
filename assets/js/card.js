function generateInvoice(event) {
    event.preventDefault();

    // Retrieve input values
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;


    // Generate a random transaction ID
    const transactionID = generateTransactionID();


    // Create the invoice content
    const invoiceContent = `
      <h2>Invoice</h2>
      <p><strong>Card Holder Name:</strong> ${cardName}</p>
      <p><strong>Credit/Debit Card Number:</strong> ${cardNumber}</p>
      <p><strong>Amount:</strong> ₹${amount}</p>
      <p><strong>Transaction ID:</strong> ${transactionID}</p>
    `;

    // Display the invoice
    const invoiceElement = document.getElementById('invoice');
    invoiceElement.innerHTML = invoiceContent;
    invoiceElement.style.display = 'block';

    // Send the invoice via email
    sendEmail(email, invoiceContent);


    // Clear the form
    document.getElementById('paymentForm').reset();
}
function sendEmail(email, content) {
    // Replace this code with your email sending logic
    console.log(`Sending invoice to ${email}:\n${content}`);
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