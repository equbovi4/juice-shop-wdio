class SearchPage {
    //Methods
    async foundItemAddToBasketButton(itemName) {
        return browser.$(`//mat-card[descendant::div[@class="item-name" and contains(text(), "${itemName}")]]//button[@aria-label="Add to Basket"]`);  
    }

    async snackBarItemAdded(itemName) {
        return browser.$(`//span[@class="mat-simple-snack-bar-content"][contains(text(), '${itemName}') and contains(text(), 'to basket')]`);
    }
}

module.exports = SearchPage;