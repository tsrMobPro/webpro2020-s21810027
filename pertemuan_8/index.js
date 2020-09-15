let account = {
    name: 'John',
    expenses: []
};

const addExpenses = function(description, amount) {
    let object = {
        description: description,
        amount: amount
    };

    account.expenses.push(object);
};

addExpenses('Beli Makanan', 15000);
addExpenses('Ongkos', 30000);

const getAccountSummary = function() {
    let totalExpense = 0;
    account.expenses.forEach(function(e) {
        totalExpense += e.amount;
    });
    console.log("Total pengeluaran", account.name, "adalah Rp.", totalExpense);
};

getAccountSummary();

const hapus = function() {
    account.name = "";
    for(let i = 0; i < account.expenses.length; i++){
        account.expenses.pop();
    }
};

hapus();
account.name = "Samuel";

addExpenses('Beli Nasi Goreng', 25000);
addExpenses('Beli Es Teh Manis', 5000);
addExpenses('Beli Tahu Isi', 3000);
addExpenses('Ongkir Bungkusan', 11500);

getAccountSummary();