document.addEventListener('DOMContentLoaded', () => {
    // --- Initialize Feather Icons ---
    feather.replace();

    // --- State ---
    let selectedDate = new Date(2024, 9, 5); // October 5, 2024
    let currentView = 'month'; // 'month', 'week', 'day'

    // --- DOM Elements ---
    const viewTitleEl = document.getElementById('view-title');
    const calendarDatesEl = document.getElementById('calendar-dates');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const monthBtn = document.getElementById('month-btn');
    const weekBtn = document.getElementById('week-btn');
    const dayBtn = document.getElementById('day-btn');
    const monthViewEl = document.getElementById('month-view');
    const weekViewEl = document.getElementById('week-view');
    const dayViewEl = document.getElementById('day-view');
    const upcomingEventsSection = document.getElementById('upcoming-events-section');

    // --- Data ---
    const events = [
        { name: 'Tech Conference 2024', date: new Date(2024, 9, 15), category: 'Conference', status: 'Confirmed' },
        { name: 'Marketing Workshop', date: new Date(2024, 9, 20), category: 'Workshop', status: 'Pending' },
        { name: 'Product Launch', date: new Date(2024, 9, 25), category: 'Launch', status: 'Confirmed' },
        { name: 'Design Sprint', date: new Date(2024, 9, 5), category: 'Workshop', status: 'Confirmed' },
    ];

    // --- View Switching Logic ---
    const switchView = (view) => {
        currentView = view;
        // Hide all views
        monthViewEl.classList.add('hidden');
        weekViewEl.classList.add('hidden');
        dayViewEl.classList.add('hidden');
        upcomingEventsSection.classList.add('hidden');

        // Reset tab styles
        monthBtn.classList.remove('tab-active');
        weekBtn.classList.remove('tab-active');
        dayBtn.classList.remove('tab-active');

        // Show the selected view and update its tab
        if (view === 'month') {
            monthViewEl.classList.remove('hidden');
            upcomingEventsSection.classList.remove('hidden');
            monthBtn.classList.add('tab-active');
            renderMonthView();
        } else if (view === 'week') {
            weekViewEl.classList.remove('hidden');
            weekBtn.classList.add('tab-active');
            renderWeekView();
        } else if (view === 'day') {
            dayViewEl.classList.remove('hidden');
            dayBtn.classList.add('tab-active');
            renderDayView();
        }
    };

    // --- Render Functions ---
    const renderMonthView = () => {
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();

        viewTitleEl.textContent = `${selectedDate.toLocaleString('default', { month: 'long' })} ${year}`;
        calendarDatesEl.innerHTML = '';

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) calendarDatesEl.innerHTML += `<div></div>`;

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            let classes = "w-10 h-10 flex items-center justify-center rounded-full mx-auto cursor-pointer hover:bg-gray-100";
            if (date.toDateString() === new Date(2024, 9, 5).toDateString()) {
                classes += " bg-blue-500 text-white";
            } else {
                classes += " text-gray-700";
            }

            const dateEl = document.createElement('div');
            dateEl.className = classes;
            dateEl.textContent = day;
            dateEl.onclick = () => {
                selectedDate = date;
                switchView('day');
            };
            calendarDatesEl.appendChild(dateEl);
        }
    };

    const renderWeekView = () => {
        weekViewEl.innerHTML = ''; // Clear previous content
        const weekStart = new Date(selectedDate);
        weekStart.setDate(selectedDate.getDate() - selectedDate.getDay()); // Start of the week (Sunday)

        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);

        viewTitleEl.textContent = `${weekStart.toLocaleDateString('default', { month: 'short', day: 'numeric' })} - ${weekEnd.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}`;

        let weekHtml = '<div class="grid grid-cols-7 text-center border-r border-gray-200">';
        for (let i = 0; i < 7; i++) {
            const day = new Date(weekStart);
            day.setDate(weekStart.getDate() + i);
            weekHtml += `
                        <div class="border-l border-t border-b border-gray-200 p-2">
                            <div class="font-semibold text-sm">${day.toLocaleString('default', { weekday: 'short' })}</div>
                            <div class="text-2xl mt-1">${day.getDate()}</div>
                        </div>
                    `;
        }
        weekHtml += '</div>';
        weekViewEl.innerHTML = weekHtml;
    };

    const renderDayView = () => {
        dayViewEl.innerHTML = '';
        viewTitleEl.textContent = selectedDate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const dayEvents = events.filter(e => e.date.toDateString() === selectedDate.toDateString());

        if (dayEvents.length > 0) {
            let dayHtml = '<div class="space-y-4">';
            dayEvents.forEach(event => {
                dayHtml += `
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-bold text-gray-800">${event.name}</h4>
                                <p class="text-sm text-gray-600">${event.category} - <span class="${event.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}">${event.status}</span></p>
                            </div>
                         `;
            });
            dayHtml += '</div>';
            dayViewEl.innerHTML = dayHtml;
        } else {
            dayViewEl.innerHTML = '<p class="text-center text-gray-500 py-8">No events scheduled for this day.</p>';
        }
    };

    const renderUpcomingEvents = () => {
        const eventsListEl = document.getElementById('events-list');
        const header = `<div class="grid grid-cols-10 gap-4 text-sm font-medium text-gray-500 px-4 py-2"><div class="col-span-4">Event</div><div class="col-span-2">Date</div><div class="col-span-2">Category</div><div class="col-span-2">Status</div></div>`;
        eventsListEl.innerHTML = header + events
            .filter(e => e.date >= new Date(2024, 9, 1)) // Filter for upcoming
            .sort((a, b) => a.date - b.date)
            .map(event => {
                const statusClass = event.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
                const categoryClass = 'bg-gray-100 text-gray-800';
                return `<div class="grid grid-cols-10 gap-4 items-center bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm"><div class="col-span-4 font-medium text-gray-900">${event.name}</div><div class="col-span-2 text-gray-600">${event.date.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' })}</div><div class="col-span-2"><span class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${categoryClass}">${event.category}</span></div><div class="col-span-2"><span class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${statusClass}">${event.status}</span></div></div>`;
            }).join('');
    };

    // --- Event Listeners ---
    monthBtn.addEventListener('click', () => switchView('month'));
    weekBtn.addEventListener('click', () => switchView('week'));
    dayBtn.addEventListener('click', () => switchView('day'));

    prevBtn.addEventListener('click', () => {
        if (currentView === 'month') selectedDate.setMonth(selectedDate.getMonth() - 1);
        else if (currentView === 'week') selectedDate.setDate(selectedDate.getDate() - 7);
        else if (currentView === 'day') selectedDate.setDate(selectedDate.getDate() - 1);
        switchView(currentView);
    });

    nextBtn.addEventListener('click', () => {
        if (currentView === 'month') selectedDate.setMonth(selectedDate.getMonth() + 1);
        else if (currentView === 'week') selectedDate.setDate(selectedDate.getDate() + 7);
        else if (currentView === 'day') selectedDate.setDate(selectedDate.getDate() + 1);
        switchView(currentView);
    });

    // --- Initial Render ---
    switchView('month');
    renderUpcomingEvents();
});