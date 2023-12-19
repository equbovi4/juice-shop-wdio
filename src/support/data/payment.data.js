class PaymentData {
    constructor(cardHolderName, cardNumber, expiryMonth, expiryYear ) {
        this.cardHolderName = cardHolderName;
        this.cardNumber = cardNumber;
        this.expiryMonth = expiryMonth,
        this.expiryYear = expiryYear
    }
}

module.exports = PaymentData;