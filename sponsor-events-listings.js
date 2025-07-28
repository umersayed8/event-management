document.addEventListener('DOMContentLoaded', function() {
            // --- 1. DATA ---
            // This data would typically come from an API
            const eventsData = [
                {
                    title: 'Tech Innovators Summit',
                    date: 'October 15-17, 2024',
                    location: 'San Francisco, CA',
                    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                },
                {
                    title: 'Global Marketing Conference',
                    date: 'November 5-7, 2024',
                    location: 'New York, NY',
                    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                },
                {
                    title: 'Sustainable Futures Expo',
                    date: 'December 2-4, 2024',
                    location: 'London, UK',
                    imageUrl: 'https://images.unsplash.com/photo-1581092921446-541b684691fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                },
                {
                    title: 'Healthcare Leadership Forum',
                    date: 'January 20-22, 2025',
                    location: 'Chicago, IL',
                    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                },
                {
                    title: 'Creative Industries Showcase',
                    date: 'February 10-12, 2025',
                    location: 'Los Angeles, CA',
                    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                },
                {
                    title: 'Financial Services Symposium',
                    date: 'March 3-5, 2025',
                    location: 'Singapore',
                    imageUrl: 'https://images.unsplash.com/photo-1600880292210-85938a039959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
            ];

            // --- 2. DYNAMIC RENDERING ---
            const eventGrid = document.getElementById('event-grid');

            function renderEvents(events) {
                eventGrid.innerHTML = ''; // Clear existing events
                events.forEach(event => {
                    const card = `
                        <div class="group cursor-pointer">
                            <div class="overflow-hidden rounded-lg">
                                <img src="${event.imageUrl}" alt="${event.title}" 
                                     class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                     onError="this.onerror=null;this.src='https://placehold.co/600x400/e2e8f0/64748b?text=Event';">
                            </div>
                            <div class="mt-4">
                                <h3 class="text-lg font-semibold text-gray-900">${event.title}</h3>
                                <p class="mt-1 text-sm text-gray-600">${event.date}</p>
                                <p class="text-sm text-gray-600">${event.location}</p>
                            </div>
                        </div>
                    `;
                    eventGrid.innerHTML += card;
                });
            }

            // Initial render of all events
            renderEvents(eventsData);

            // --- 3. DROPDOWN INTERACTIVITY ---
            const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');

            dropdownButtons.forEach(button => {
                const dropdownId = button.getAttribute('data-dropdown-toggle');
                const dropdownMenu = document.getElementById(dropdownId);

                button.addEventListener('click', (event) => {
                    event.stopPropagation();
                    // Close all other dropdowns first
                    closeAllDropdowns(dropdownId);
                    dropdownMenu.classList.toggle('hidden');
                });
            });

            // Close dropdowns if clicking outside
            window.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown-button')) {
                    closeAllDropdowns();
                }
            });
            
            function closeAllDropdowns(exceptId = null) {
                 const allDropdowns = document.querySelectorAll('.dropdown-menu');
                 allDropdowns.forEach(menu => {
                     if (menu.id !== exceptId) {
                         menu.classList.add('hidden');
                     }
                 });
            }
        });