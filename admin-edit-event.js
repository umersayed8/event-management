document.getElementById('editEventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  console.log('Form submitted:', data);

  // You can use this space to send data to a server via fetch/AJAX.
  alert('Event updated successfully!');
});
