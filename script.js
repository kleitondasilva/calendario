let currentYear = new Date().getFullYear();

document.getElementById('prevYear').addEventListener('click', () => {
    currentYear--;
    updateCalendar();
});

document.getElementById('nextYear').addEventListener('click', () => {
    currentYear++;
    updateCalendar();
});

function updateCalendar() {
    document.getElementById('yearDisplay').textContent = currentYear;
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `<h3>${getMonthName(month)}</h3>`;
        
        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';

        const firstDay = new Date(currentYear, month, 1);
        const lastDay = new Date(currentYear, month + 1, 0);
        
        // Dias vazios antes do primeiro dia do mês
        for (let i = 0; i < firstDay.getDay(); i++) {
            daysDiv.innerHTML += '<div class="day"></div>'; // Dias vazios
        }
        
        // Dias do mês
        for (let day = 1; day <= lastDay.getDate(); day++) {
            daysDiv.innerHTML += `<div class="day">${day}</div>`;
        }
        
        monthDiv.appendChild(daysDiv);
        calendar.appendChild(monthDiv);
    }
}

function getMonthName(monthIndex) {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", 
        "Maio", "Junho", "Julho", "Agosto", 
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return monthNames[monthIndex];
}

// Inicializa o calendário
updateCalendar();
