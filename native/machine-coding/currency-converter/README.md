
# Currency Converter

This is a simple currency converter web application built with HTML, CSS, and JavaScript. It allows users to convert between different currencies, including USD, EUR, GBP, and INR. You can customize and expand the list of supported currencies as needed.



## Features

- Conversion between multiple currencies.
- User-friendly and visually appealing design.
- Real-time conversion based on the provided exchange rates.

## Usage



1. Open the `index.html` file in your web browser to launch the application.

2. Enter the amount you want to convert in the "Enter amount" field.

3. Select the currency you are converting from in the "From Currency" dropdown.

4. Select the currency you want to convert to in the "To Currency" dropdown.

5. Click the "Convert" button, and the converted amount will be displayed in the "Result" field.

## Customization

To add more currencies or customize the exchange rates, you can edit the `currencyRates` object in the `script.js` file. Simply add the currency code and its exchange rate relative to USD.

```javascript
const currencyRates = {
    USD: 1,    // USD to USD (1:1)
    EUR: 0.85, // USD to EUR (1 USD = 0.85 EUR)
    GBP: 0.74, // USD to GBP (1 USD = 0.74 GBP)
    INR: 74.63, // USD to INR (1 USD = 74.63 INR)
    // Add more currency rates here
};
```



## Acknowledgments

- Currency exchange rates are for demonstration purposes only and may not reflect real-time rates.
- Feel free to customize and improve this code according to your needs.

If you have any questions or suggestions, please feel free to contact us.

Happy coding!
```

