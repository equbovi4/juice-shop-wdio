Feature: Checkout with added data
  This feature checks if User can add payment and address information,
  So that User is able to add products to the basket and complete the checkout process

  Background: 
    Given I open landing page
    And I have registered a new user using API
    And I have logged in

  @Checkout
  Scenario: Checkout process
    And I have added a payment card
      | Name         | Card Number      | Expiry Month | Expiry year |
      | John Goodman | 1234567812345678 |            4 |        2085 |
    And I have saved address information      
      | Country       | United States |
      | Name          | John Goodman  |
      | Mobile Number | 1234567891    |
      | Zip Code      | 00000         |
      | Address       | sunset bv     |
      | City          | Los Angeles   |
      | State         | California    |
    And I add 'Lemon Juice (500ml)' to basket and checkout
    And I choose saved address
    And I choose 'One Day Delivery'
    And I choose saved card
    And I place order and pay
    Then I am in order completion page
    And I see correct order address
    And I see order details
      | Product             | Price | Quantity | Total |
      | Lemon Juice (500ml) |  2.99 |        1 |  2.99 |
    And I see end total price
      | Items       | 2.99 |
      | Delivery    | 0.99 |
      | Promotion   | 0.00 |
      | Total Price | 3.98 |
