
let cdekNumber = 0;
let cdekTime = "";

let pekNumber = 0;
let pekTime = "";

let printNumber = 0;
let printTime = "";

let prNumber = 0;
let prTime = "";

function updateTimeList(elementId, timeArray) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = "";
    timeArray.forEach(time => {
        const listItem = document.createElement("li");
        listItem.textContent = time;
        listElement.appendChild(listItem);
    });
}

function recordCDEK() {
    cdekNumber++;
    document.getElementById("cdekNumber").textContent = cdekNumber;
    cdekTime = new Date().toLocaleString();
    document.getElementById("cdekTime").textContent = cdekTime;
    
    let cdekData = JSON.parse(localStorage.getItem('cdekData')) || []; // Загружаем существующий массив данных или создаем новый
    
    cdekData.push({ number: cdekNumber, time: cdekTime }); // Добавляем новую запись в массив
    
    localStorage.setItem('cdekData', JSON.stringify(cdekData)); // Сохраняем массив в localStorage
}

function recordPek() {

    pekNumber++;
    document.getElementById("pekNumber").textContent = pekNumber;
    pekTime = new Date().toLocaleString();
    document.getElementById("pekTime").textContent = pekTime;
    
    let pekData = JSON.parse(localStorage.getItem('pekData')) || []; // Загружаем существующий массив данных или создаем новый
    
    pekData.push({ number: pekNumber, time: pekTime }); // Добавляем новую запись в массив
    
    localStorage.setItem('pekData', JSON.stringify(pekData)); // Сохраняем массив в localStorage

}

function recordPrint() {


    printNumber++;
    document.getElementById("printNumber").textContent = printNumber;
    printTime = new Date().toLocaleString();
    document.getElementById("printTime").textContent = printTime;
    
    let printData = JSON.parse(localStorage.getItem('printData')) || []; // Загружаем существующий массив данных или создаем новый
    
    printData.push({ number: printNumber, time: printTime }); // Добавляем новую запись в массив
    
    localStorage.setItem('printData', JSON.stringify(printData)); // Сохраняем массив в localStorage
}

function recordPr() {


    prNumber++;
    document.getElementById("prNumber").textContent = prNumber;
    prTime = new Date().toLocaleString();
    document.getElementById("prTime").textContent = prTime;
    
    let prData = JSON.parse(localStorage.getItem('prData')) || []; // Загружаем существующий массив данных или создаем новый
    
    prData.push({ number: prNumber, time: prTime }); // Добавляем новую запись в массив
    
    localStorage.setItem('prData', JSON.stringify(prData)); // Сохраняем массив в localStorage
}

function exportAppData() {
    const cdekData = JSON.parse(localStorage.getItem('cdekData')) || [];
    const pekData = JSON.parse(localStorage.getItem('pekData')) || [];
    const printData = JSON.parse(localStorage.getItem('printData')) || [];
    const prData = JSON.parse(localStorage.getItem('prData')) || [];
    
    const allData = { cdekData, pekData, printData, prData };
    const jsonContent = JSON.stringify(allData, null, 2);
    
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'app_data.json';
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
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
    const latestRecord = cdekData[cdekData.length - 1]; // Получаем последнюю запись из массива
    
    cdekNumber = latestRecord.number;
    cdekTime = latestRecord.time;
    document.getElementById("cdekNumber").textContent = cdekNumber;
    document.getElementById("cdekTime").textContent = cdekTime;
}



if (localStorage.getItem('pekData')) {
    const pekData = JSON.parse(localStorage.getItem('pekData'));
    const latestRecord = pekData[pekData.length - 1]; // Получаем последнюю запись из массива
    
    pekNumber = latestRecord.number;
    pekTime = latestRecord.time;
    document.getElementById("pekNumber").textContent = pekNumber;
    document.getElementById("pekTime").textContent = pekTime;
}





if (localStorage.getItem('printData')) {
    const printData = JSON.parse(localStorage.getItem('printData'));
    const latestRecord = printData[printData.length - 1]; // Получаем последнюю запись из массива
    
    printNumber = latestRecord.number;
    printTime = latestRecord.time;
    document.getElementById("printNumber").textContent = printNumber;
    document.getElementById("printTime").textContent = printTime;
}

if (localStorage.getItem('prData')) {
    const prData = JSON.parse(localStorage.getItem('prData'));
    const latestRecord = prData[prData.length - 1]; // Получаем последнюю запись из массива
    
    prNumber = latestRecord.number;
    prTime = latestRecord.time;
    document.getElementById("prNumber").textContent = prNumber;
    document.getElementById("prTime").textContent = prTime;
}