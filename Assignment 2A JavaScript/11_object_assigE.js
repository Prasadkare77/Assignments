let sbiBank = {
    bankName: "State bank of India",
    location: "Hadapsar",
    accountNo: 20230501,
    ifsc: "SBIN001",
    interestRate: "6%",
    showDetails: function(){
        let result = `Bank Name: ${this.bankName}, Loacation: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest rate: ${this.interestRate}`;
        console.log(result);
    },
};

let axisBank = {
    bankName: "Axis Bank",
    location: "Swargate",
    accountNo: 20230502,
    ifsc: "AXISN002",
    interestRate: "8%",
    showDetails: function(){
        let result = `Bank Name: ${this.bankName}, Loacation: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest rate: ${this.interestRate}`;
        console.log(result);
    },
};

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Katraj",
    accountNo: 20230503,
    ifsc: "HDFCN003",
    interestRate: "10%",
    showDetails: function(){
        let result = `Bank Name: ${this.bankName}, Loacation: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest rate: ${this.interestRate}`;
        console.log(result);
    },
};

let yesBank = {
    bankName: "Yes Bank",
    location: "Warje",
    accountNo: 20230504,
    ifsc: "YESN004",
    interestRate: "12%",
    showDetails: function(){
        let result = `Bank Name: ${this.bankName}, Loacation: ${this.location}, Account No: ${this.accountNo}, IFSC Code: ${this.ifsc}, Interest rate: ${this.interestRate}`;
        console.log(result);
    },
};

sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();