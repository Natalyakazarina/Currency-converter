window.addEventListener("click", function (e) {
    let rates = [
    0.91,
    77.32,
    2.44,
    1.1,
    85,
    2.68,
    0.01,
    0.01,
    0.03,
    0.41,
    0.37,
    31.67
  ];

    let USD_EUR = rates[0];
    let USD_RUB = rates[1];
    let USD_BYN = rates[2];
    let EUR_USD = rates[3];
    let EUR_RUB = rates[4];
    let EUR_BYN = rates[5];
    let RUB_USD = rates[6];
    let RUB_EUR = rates[7];
    let RUB_BYN = rates[8];
    let BYN_USD = rates[9];
    let BYN_EUR = rates[10];
    let BYN_RUB = rates[11];

    if (e.target.className == "convert-btn") {
        let result;
        let amount = document.querySelector(".Amount").value;
        let convertFrom = document.querySelector(".current-currency");
        let convertTo = document.querySelector(".to-convert-into-currency");

        switch ((convertFrom.value, convertTo.value)) {
            case ("USD", "USD"):
                alert('Please choose different currencies')
                result = amount * 1;
                break;
            case ("USD", "EUR"):
                result = amount * USD_EUR;
                break;
            case ("USD", "BYN"):
                result = amount * USD_BYN;
                break;
            case ("USD", "RUB"):
                result = amount * USD_RUB;
                break;
            case ("EUR", "EUR"):
                alert('Please choose different currencies')
                result = amount * 1;
                break;
            case ("EUR", "USD"):
                result = amount * EUR_USD;
                break;
            case ("EUR", "BYN"):
                result = amount * EUR_BYN;
                break;
            case ("EUR", "RUB"):
                result = amount * EUR_RUB;
                break;
            case ("RUB", "RUB"):
                alert('Please choose different currencies')
                result = amount * 1;
                break;
            case ("RUB", "USD"):
                result = amount * RUB_USD;
                break;
            case ("RUB", "BYN"):
                result = amount * RUB_BYN;
                break;
            case ("RUB", "EUR"):
                result = amount * RUB_EUR;
                break;
            case ("BYN", "BYN"):
                alert('Please choose different currencies')
                result = amount * 1;
                break;
            case ("BYN", "USD"):
                result = amount * BYN_USD;
                break;
            case ("BYN", "RUB"):
                result = amount * BYN_RUB;
                break;
            case ("BYN", "EUR"):
                result = amount * BYN_EUR;
                break;
        }
        document.querySelector(".result").innerHTML = result;
        document.querySelector(".Amount").value = amount;
    }
});