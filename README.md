# 🎉 Evently - Event Management Platform

Evently is a modern **Event Management Platform** designed to simplify the way people discover, organize, and attend events. It provides a seamless experience for organizers, sponsors, and attendees by bringing all event-related activities onto a single platform.

---

## 🚀 Features

### 🌐 Website Features
- Event organizers can **create and manage events** with detailed information, images, and categories.  
- Sponsors can explore **sponsorship opportunities** with smart matchmaking features.  
- Attendees can **browse events, purchase tickets securely**, and receive instant booking confirmations.  
- **Secure payment integration** with cards, UPI, and digital wallets (future-ready).  
- **Personalized dashboards** for users and organizers.  
- Analytics and reporting for organizers to track engagement & performance.  
- Clean, responsive, and user-friendly interface with instant notifications.  
- Scalable for both small meetups and large-scale festivals.  

### 💻 Software Service Features
- **Event Creation & Customization**: Add branding, schedules, speakers, and banners.  
- **Online Ticketing & Registration**: Supports free, paid, tiered tickets, discount codes, group booking, and QR check-ins.  
- **Payment Gateway Integration (Future Scope)**: Razorpay, PayPal, Stripe.  
- **Attendee Management**: Registrations, cancellations, reminders, and feedback.  
- **Organizer Dashboard**: Real-time ticket sales, attendance, and revenue tracking.  
- **Analytics & Reporting**: Actionable insights for future improvements.  
- **Communication Tools**: Automated emails, notifications, and updates.  
- **Cloud-ready and mobile responsive** for smooth access anywhere.  

---

## 🛠️ Tech Stack

### Frontend
- **HTML**  
- **CSS**  
- **Tailwind CSS**  
- **Figma** (for UI/UX design, event catalogue)  

### Backend
- **PHP**  
- **MySQL**  
- **XAMPP (Apache, MySQL)** for local development  

---

## ⚙️ Setup Instructions (Local Development with XAMPP)

### 1. Download and Install XAMPP
- Download from [Apache Friends](https://www.apachefriends.org/).  
- Install with required components (Apache, MySQL).  

### 2. Start Apache and MySQL
- Open **XAMPP Control Panel**.  
- Start **Apache** and **MySQL** services.  

### 3. Place Project Files
- Copy the project folder into the `htdocs` directory of your XAMPP installation.  
  Example:  
C:/xampp/htdocs/evently

### 4. Create Database
- Open [phpMyAdmin](http://localhost/phpmyadmin).  
- Create a new database (e.g., `evently_db`).  
- Import the provided SQL file into this database.  

### 5. Configure Database Connection
- Open the project folder and edit `config.php`.  
- Update with your database details:  
```php
$servername = "localhost";
$username   = "root";      // default XAMPP username
$password   = "";          // default XAMPP password
$dbname     = "evently_db";
```
### 6. Run the Project
- Open your browser and run:
- http://localhost/evently

### 📂 Project Structure
evently-frontend/
│── admin/ # Admin-related pages and features
│── general/ # General components and common pages
│── images/ # Project images and assets
│── organizer/ # Organizer module (event creation & management)
│── sponsor/ # Sponsor module (sponsorship features)
│── ticket-buyer/ # Ticket buyer module (browsing, booking, payments)
│── index.html # Main entry point (temporary, may be deleted later)
│── script.js # JavaScript logic for frontend
│── style.css # Global styles for frontend

---

### 👨‍💻 Group Credits

This project was developed as a group effort. Special thanks to the team members:

[Ronit Rijhwani] – Frontend Development (HTML, CSS, Tailwind CSS)

[Umer Sayed] – Backend Development (PHP, MySQL)

[Umer Sayed] – Database Design & Integration

[Karan Nagrani] – UI/UX Design (Figma, Event Catalogue)

[Akash Makhija] – Presentation, Report & Testing



