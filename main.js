let cdekNumber = 0;
let cdekTime = "";

let pekNumber = 0;
let pekTime = "";

let printNumber = 0;
let printTime = "";

let prNumber = 0;
let prTime = "";

function recordCDEK() {
    cdekNumber++;
    document.getElementById("cdekNumber").textContent = cdekNumber;
    cdekTime = new Date().toLocaleString();
    document.getElementById("cdekTime").textContent = cdekTime;
    
    // Save data to localStorage
    localStorage.setItem('cdekData', JSON.stringify({ number: cdekNumber, time: cdekTime }));
}

function recordPek() {
    pekNumber++;
    document.getElementById("pekNumber").textContent = pekNumber;
    pekTime = new Date().toLocaleString();
    document.getElementById("pekTime").textContent = pekTime;

    // Save data to localStorage
    localStorage.setItem('pekData', JSON.stringify({ number: pekNumber, time: pekTime }));
}

function recordPrint() {
    printNumber++;
    document.getElementById("printNumber").textContent = printNumber;
    printTime = new Date().toLocaleString();
    document.getElementById("printTime").textContent = printTime;
    
    // Save data to localStorage
    localStorage.setItem('printData', JSON.stringify({ number: printNumber, time: printTime }));
}

function recordPr() {
    prNumber++;
    document.getElementById("prNumber").textContent = prNumber;
    prTime = new Date().toLocaleString();
    document.getElementById("prTime").textContent = prTime;
    
    // Save data to localStorage
    localStorage.setItem('prData', JSON.stringify({ number: prNumber, time: prTime }));
}

function resetCounter() {
    cdekNumber = 0;
    pekNumber = 0;
    printNumber = 0;
    prNumber = 0;

    cdekTime = "";
    pekTime = "";
    printTime = "";
    prTIme = "";

    document.getElementById("cdekNumber").textContent = cdekNumber;
    document.getElementById("pekNumber").textContent = pekNumber;
    document.getElementById("printNumber").textContent = printNumber;
    document.getElementById("prNumber").textContent = prNumber;



    document.getElementById("cdekTime").textContent = "00.00.0000, 00:00:00";
    document.getElementById("pekTime").textContent = "00.00.0000, 00:00:00";
    document.getElementById("printTime").textContent = "00.00.0000, 00:00:00";
    document.getElementById("prTime").textContent = "00.00.0000, 00:00:00";

    // Reset data in localStorage
    localStorage.removeItem('cdekData');
    localStorage.removeItem('pekData');
    localStorage.removeItem('printData');
    localStorage.removeItem('prData');
}

// Restore data from localStorage if available
if (localStorage.getItem('cdekData')) {
    const cdekData = JSON.parse(localStorage.getItem('cdekData'));
    cdekNumber = cdekData.number;
    cdekTime = cdekData.time;
    document.getElementById("cdekNumber").textContent = cdekNumber;
    document.getElementById("cdekTime").textContent = cdekTime;
}

if (localStorage.getItem('pekData')) {
    const pekData = JSON.parse(localStorage.getItem('pekData'));
    pekNumber = pekData.number;
    pekTime = pekData.time;
    document.getElementById("pekNumber").textContent = pekNumber;
    document.getElementById("pekTime").textContent = pekTime;
}

if (localStorage.getItem('printData')) {
    const printData = JSON.parse(localStorage.getItem('printData'));
    printNumber = printData.number;
    printTime = printData.time;
    document.getElementById("printNumber").textContent = printNumber;
    document.getElementById("printTime").textContent = printTime;
}

if (localStorage.getItem('prData')) {
    const prData = JSON.parse(localStorage.getItem('prData'));
    prNumber = prData.number;
    prTime = prData.time;
    document.getElementById("prNumber").textContent = prNumber;
    document.getElementById("prTime").textContent = prTime;
}