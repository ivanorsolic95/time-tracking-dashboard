// Fetch data and show daily report by default
fetch('/data.json').then((request) => {
    if (!request.ok) {
        console.log('Oops! Something went wrong!');
        return null;
    }

    return request.json();
}).then((data) => {
    const updateReport = (timeframe) => {
        data.forEach((report) => {
            const card = document.getElementById(report.title.toLowerCase());
            if (card) {
                const currentTimeSpan = card.querySelector('.current-time');
                const previousTimeSpan = card.querySelector('.previous-time');

                if (currentTimeSpan && previousTimeSpan && timeframe === 'daily') {
                    currentTimeSpan.innerHTML = `${report.timeframes[timeframe].current}hrs`;
                    previousTimeSpan.innerHTML = `Yesterday - ${report.timeframes[timeframe].previous}hrs`;
                }

                if (currentTimeSpan && previousTimeSpan && timeframe === 'weekly') {
                    currentTimeSpan.innerHTML = `${report.timeframes[timeframe].current}hrs`;
                    previousTimeSpan.innerHTML = `Last week - ${report.timeframes[timeframe].previous}hrs`;
                }

                if (currentTimeSpan && previousTimeSpan && timeframe === 'monthly') {
                    currentTimeSpan.innerHTML = `${report.timeframes[timeframe].current}hrs`;
                    previousTimeSpan.innerHTML = `Last month - ${report.timeframes[timeframe].previous}hrs`;
                }


            }
        });
    };

    // Show daily report by default
    updateReport('daily');

    // Set up event listeners for report type switches
    const dailyReport = document.getElementById('daily-report');
    const weeklyReport = document.getElementById('weekly-report');
    const monthlyReport = document.getElementById('monthly-report');

    if (dailyReport) {
        dailyReport.addEventListener('click', () => updateReport('daily'));
    }
    if (weeklyReport) {
        weeklyReport.addEventListener('click', () => updateReport('weekly'));
    }
    if (monthlyReport) {
        monthlyReport.addEventListener('click', () => updateReport('monthly'));
    }
});
