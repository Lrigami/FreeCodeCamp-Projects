let price = 19.5;
const itemPrice = document.getElementById("item-price");
itemPrice.innerText = `${price}`;

let register = document.getElementById("register");
let cash = document.getElementById("cash");
const changeDiv = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let status;
let currentCid;

const displayRegister = () => {
    cid.forEach(moneyType => {
        let type = document.createElement("li");
        let typeName = document.createElement("span");
        typeName.innerText = `${moneyType[0]}:`;

        let typeNumber = document.createElement("span");
        typeNumber.classList.add("money");
        typeNumber.innerText = `$${moneyType[1]}`;

        type.appendChild(typeName);
        type.appendChild(typeNumber);

        register.appendChild(type);
    })
}
displayRegister();

const updateRegister = () => {
    let moneyToUpdate = document.getElementsByClassName("money");
    for (let i = 0; i < cid.length; i++) {
        [...moneyToUpdate][i].innerText = `$${cid[i][1]}`;
    }
}

const sumOfCid = array => {
    currentCid = 0;
    currentCid = array.reduce((acc, el) => acc + parseFloat(el[1]), 0).toFixed(2);
    return currentCid;
}

const isRegisterOpen = (cashGiven) => {
    let due = parseFloat((cashGiven - price).toFixed(2));
    if (currentCid < due) {
        return status = "INSUFFICIENT_FUNDS";
    } else if (currentCid == due) {
        return status = "CLOSED";
    } else {
        return status = "OPEN";
    } 
}

const giveChange = (cashGiven) => {
    let due = (cashGiven - price).toFixed(2);
    for (let i = cid.length-1 ; i >= 0; i--) {
        if (due > 0) {
            let count = 0;
            switch (cid[i][0]) {
                case 'ONE HUNDRED':
                    while (due / 100 >= 1 && cid[i][1] > 0) {
                        due = (due - 100).toFixed(2);
                        cid[i][1] = (cid[i][1] - 100).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `ONE HUNDRED: $${(100 * count)}\n`
                    }
                    break;
                case 'TWENTY' : 
                    while (due / 20 >= 1 && cid[i][1] > 0) {
                        due = (due - 20).toFixed(2);
                        cid[i][1] = (cid[i][1] - 20).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `TWENTY: $${(20 * count)}\n`
                    }
                    break;
                case 'TEN' :
                    while (due / 10 >= 1 && cid[i][1] > 0) {
                        due = (due - 10).toFixed(2);
                        cid[i][1] = (cid[i][1] - 10).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `TEN: $${(10 * count)}\n`
                    }
                    break;
                case 'FIVE' :
                    while (due / 5 >= 1 && cid[i][1] > 0) {
                        due  = (due - 5).toFixed(2);
                        cid[i][1] = (cid[i][1] - 5).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `FIVE: $${(5 * count)}\n`
                    }
                    break;
                case 'ONE' :
                    while (due / 1 >= 1 && cid[i][1] > 0) {
                        due  = (due - 1).toFixed(2);
                        cid[i][1] = (cid[i][1] - 1).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `ONE: $${(1 * count)}\n`
                    }
                    break;
                case 'QUARTER' : 
                    while (due / 0.25 >= 1 && cid[i][1] > 0) {
                        due = (due - 0.25).toFixed(2);
                        cid[i][1] = (cid[i][1] - 0.25).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `QUARTER: $${(0.25 * count)}\n`
                    }
                    break;
                case 'DIME' :
                    while (due / 0.1 >= 1 && cid[i][1] > 0) {
                        due = (due - 0.1).toFixed(2);
                        cid[i][1] = (cid[i][1] - 0.1).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `DIME: $${(0.1 * count)}\n`
                    }
                    break;
                case 'NICKEL' :
                    while (due / 0.05 >= 1 && cid[i][1] > 0) {
                        due = (due - 0.05).toFixed(2);
                        cid[i][1] =  (cid[i][1] - 0.05).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `NICKEL: $${(0.05 * count)}\n`
                    }
                    break;
                case 'PENNY' :
                    while (due > 0 && cid[i][1] > 0) {
                        due = (due - 0.01).toFixed(2);
                        cid[i][1] = (cid[i][1] - 0.01).toFixed(2);
                        count++
                    }
                    if (count > 0) {
                        changeDiv.innerText += `PENNY: $${(0.01 * count)}\n`
                    }
                    break;
            }
        }
    }
    if (due == 0) {
        status = status;
    } else {
        status = "INSUFFICIENT_FUNDS";
        changeDiv.innerText = `Status: ${status}`;
    }
}

purchaseBtn.addEventListener("click", () => {
    changeDiv.innerText = "";
    let cashGiven = Number(cash.value);

    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } else if (cashGiven === price) {
        changeDiv.innerText = "No change due - customer paid with exact cash";
        return;
    }

    sumOfCid(cid);
    isRegisterOpen(cashGiven);
    changeDiv.innerText = `Status: ${status}\n`;
    if (status === "OPEN" || status === "CLOSED") {
        giveChange(cashGiven);
    }

    updateRegister();
})