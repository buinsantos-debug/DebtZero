const user = {
    name: "Buinar",
    cash: 3598,
    health: 28
};

document.getElementById("cash").textContent =
    `AED ${user.cash.toLocaleString()}`;
