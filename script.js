
// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    // Toggle icon between bars and times (X)
    const icon = menuBtn.querySelector('i');
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});
document.addEventListener("DOMContentLoaded", () => {
  // --- Logic for Password Toggle ---
  const toggleButtons = document.querySelectorAll(".password-toggle");
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const passwordInput = button.previousElementSibling;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        button.textContent = "Show";
      }
    });
  });

  // --- Logic for Account Type Selector ---
  const accountTypeButtons = document.querySelectorAll(".account-type");
  accountTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // First, remove 'active' class from all buttons
      accountTypeButtons.forEach((btn) => btn.classList.remove("active"));
      // Then, add 'active' class to the one that was clicked
      button.classList.add("active");
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
    // --- Sample Data (This would come from your backend) ---
    const eventsData = [
        {
            name: 'Tech Innovators Summit',
            date: '2024-07-15',
            ticketsSold: 350,
            revenue: 25000,
            sponsorStatus: 'Matched'
        },
        {
            name: 'Marketing Masters Conference',
            date: '2024-08-20',
            ticketsSold: 200,
            revenue: 15000,
            sponsorStatus: 'Pending'
        },
        {
            name: 'Startup Showcase',
            date: '2024-09-10',
            ticketsSold: 400,
            revenue: 20000,
            sponsorStatus: 'Matched'
        },
        {
            name: 'Design Thinking Workshop',
            date: '2024-10-05',
            ticketsSold: 150,
            revenue: 10000,
            sponsorStatus: 'Not Matched'
        },
        {
            name: 'FinTech Forum',
            date: '2024-11-12',
            ticketsSold: 150,
            revenue: 5000,
            sponsorStatus: 'Not Matched'
        }
    ];

    const tableBody = document.getElementById('events-table-body');

    // --- Function to populate the table with event data ---
    function populateEventsTable(events) {
        // Clear existing rows
        tableBody.innerHTML = '';

        if (events.length === 0) {
            const noEventsRow = `
                <tr>
                    <td colspan="6" style="text-align: center; color: #6c757d;">No events found.</td>
                </tr>
            `;
            tableBody.innerHTML = noEventsRow;
            return;
        }

        events.forEach(event => {
            const row = document.createElement('tr');

            // Format revenue to currency
            const formattedRevenue = `$${event.revenue.toLocaleString()}`;
            
            // Determine the class for the sponsor status badge
            let statusClass = '';
            switch (event.sponsorStatus) {
                case 'Matched':
                    statusClass = 'status-matched';
                    break;
                case 'Pending':
                    statusClass = 'status-pending';
                    break;
                case 'Not Matched':
                    statusClass = 'status-not-matched';
                    break;
            }

            row.innerHTML = `
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.ticketsSold}</td>
                <td>${formattedRevenue}</td>
                <td><span class="status-badge ${statusClass}">${event.sponsorStatus}</span></td>
                <td class="action-links">
                    <a href="#" class="view-btn">View</a>
                    <a href="#" class="edit-btn">Edit</a>
                    <a href="#" class="delete-btn">Delete</a>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // --- Initial population of the table ---
    populateEventsTable(eventsData);

    // --- Event Delegation for Action Links ---
    tableBody.addEventListener('click', (e) => {
        const target = e.target;
        const eventName = target.closest('tr').querySelector('td:first-child').textContent;

        if (target.classList.contains('view-btn')) {
            e.preventDefault();
            alert(`Viewing details for: ${eventName}`);
        } else if (target.classList.contains('edit-btn')) {
            e.preventDefault();
            alert(`Editing details for: ${eventName}`);
        } else if (target.classList.contains('delete-btn')) {
            e.preventDefault();
            if (confirm(`Are you sure you want to delete "${eventName}"?`)) {
                alert(`"${eventName}" has been deleted. (This is a simulation)`);
                // In a real app, you would make a backend call here to delete the event
                // and then re-fetch the data to update the table.
            }
        }
    });

});

/******************************************
            create event
 ************************************/

            document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const uploadButton = uploadArea.querySelector('.btn-upload');
    const fileNameDisplay = document.getElementById('file-name');

    // Trigger file input click when the upload area or button is clicked
    uploadArea.addEventListener('click', (e) => {
        if (e.target !== fileInput) {
            fileInput.click();
        }
    });

    // Handle drag and drop events
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault(); // Prevent default behavior (opening file)
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault(); // Prevent default behavior (opening file)
        uploadArea.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            handleFileSelect(files[0]);
        }
    });

    // Handle file selection from the file input
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            handleFileSelect(fileInput.files[0]);
        }
    });

    // Function to display the selected file name
    function handleFileSelect(file) {
        if (file) {
            fileNameDisplay.textContent = `Selected file: ${file.name}`;
        } else {
            fileNameDisplay.textContent = '';
        }
    }
});



/******************************************************************
 *                  Contact page
 ******************************************************/

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const formStatus = document.getElementById('formStatus');

    // Helper function to show an error
    const showError = (field, message) => {
        field.classList.add('invalid-field');
        const errorMessage = field.nextElementSibling;
        errorMessage.innerText = message;
    };

    // Helper function to clear errors
    const clearError = (field) => {
        field.classList.remove('invalid-field');
        const errorMessage = field.nextElementSibling;
        errorMessage.innerText = '';
    };

    // Helper function to validate email format
    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // --- Clear previous status and errors ---
        formStatus.innerText = '';
        formStatus.className = '';
        let isFormValid = true;

        const fields = [
            'fullName', 
            'companyName', 
            'email', 
            'message'
        ];

        fields.forEach(id => clearError(document.getElementById(id)));

        // --- Get field values ---
        const fullName = document.getElementById('fullName');
        const companyName = document.getElementById('companyName');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // --- Validation ---
        if (fullName.value.trim() === '') {
            showError(fullName, 'Full name is required.');
            isFormValid = false;
        }

        if (companyName.value.trim() === '') {
            showError(companyName, 'Company name is required.');
            isFormValid = false;
        }
        
        if (email.value.trim() === '') {
            showError(email, 'Email address is required.');
            isFormValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            isFormValid = false;
        }

        if (message.value.trim() === '') {
            showError(message, 'Message is required.');
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }
        
        // --- If form is valid, proceed with submission ---
        submitBtn.disabled = true;
        submitBtn.innerText = 'Submitting...';

        // Simulate API call
        setTimeout(() => {
            console.log('Form Submitted Successfully!');
            console.log({
                fullName: fullName.value.trim(),
                companyName: companyName.value.trim(),
                email: email.value.trim(),
                phone: document.getElementById('phone').value.trim(),
                message: message.value.trim()
            });

            formStatus.innerText = 'Thank you! Your message has been sent.';
            formStatus.classList.add('success');
            
            contactForm.reset(); // Clear the form fields
            submitBtn.disabled = false;
            submitBtn.innerText = 'Submit';

            // Clear the success message after a few seconds
            setTimeout(() => {
                formStatus.innerText = '';
                formStatus.className = '';
            }, 5000);

        }, 1500); // 1.5 second delay
    });
});


document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle (from before) ---
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- NEW: Account Type Selector ---
    const accountTypeSelector = document.getElementById('account-type-selector');
    if (accountTypeSelector) {
        const buttons = accountTypeSelector.querySelectorAll('.account-type-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active styles from all buttons
                buttons.forEach(btn => {
                    btn.classList.remove('bg-white', 'text-blue-700', 'shadow-sm');
                    btn.classList.add('text-gray-600');
                });
                // Add active styles to the clicked button
                button.classList.add('bg-white', 'text-blue-700', 'shadow-sm');
                button.classList.remove('text-gray-600');
            });
        });
    }

    // --- NEW: Password Visibility Toggle ---
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.previousElementSibling;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggle.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                toggle.textContent = 'Show';
            }
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // --- Account Type Selection & Form Redirect ---
    const accountTypeSelector = document.getElementById('account-type-selector');
    const registrationForm = document.querySelector('form');
    let selectedAccountType = 'ticket-buyer'; // Default value

    if (accountTypeSelector) {
        const accountButtons = accountTypeSelector.querySelectorAll('.account-type-btn');

        accountTypeSelector.addEventListener('click', (e) => {
            const targetButton = e.target.closest('.account-type-btn');
            if (!targetButton) return;

            // Update the selected account type
            selectedAccountType = targetButton.dataset.type;

            // Update button styles
            accountButtons.forEach(button => {
                button.classList.remove('bg-white', 'text-blue-700', 'shadow-sm');
                button.classList.add('text-gray-600');
            });

            targetButton.classList.add('bg-white', 'text-blue-700', 'shadow-sm');
            targetButton.classList.remove('text-gray-600');
        });
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            // Prevent the default form submission behavior
            e.preventDefault();

            // Redirect based on the selected account type
            switch (selectedAccountType) {
                case 'organizer':
                    window.location.href = 'organizer-dashboard.html';
                    break;
                case 'sponsor':
                    window.location.href = 'sponsor-dashboard.html';
                    break;
                case 'ticket-buyer':
                    window.location.href = 'user-dashboard.html';
                    break;
                default:
                    // Fallback to a default page if something goes wrong
                    window.location.href = 'user-dashboard.html';
                    break;
            }
        });
    }
    
    // --- Password Visibility Toggle ---
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.previousElementSibling;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggle.textContent = 'Hide';
            } else {
                passwordInput.type = 'password';
                toggle.textContent = 'Show';
            }
        });
    });
});