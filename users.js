const users = [
  { username: "@alex_smith", email: "alex.smith@email.com", joinDate: "2023-01-15", status: "Active", role: "Standard User" },
  { username: "@jane_doe", email: "jane.doe@email.com", joinDate: "2022-11-20", status: "Active", role: "Admin" },
  { username: "@mike_jones", email: "mike.jones@email.com", joinDate: "2023-03-05", status: "Inactive", role: "Standard User" },
  { username: "@sara_miller", email: "sara.miller@email.com", joinDate: "2023-02-10", status: "Active", role: "Standard User" },
  { username: "@david_brown", email: "david.brown@email.com", joinDate: "2022-12-28", status: "Active", role: "Standard User" },
  { username: "@emily_clark", email: "emily.clark@email.com", joinDate: "2023-04-12", status: "Inactive", role: "Standard User" },
  { username: "@chris_evans", email: "chris.evans@email.com", joinDate: "2023-01-22", status: "Active", role: "Standard User" },
  { username: "@olivia_white", email: "olivia.white@email.com", joinDate: "2022-10-18", status: "Active", role: "Admin" },
  { username: "@ryan_green", email: "ryan.green@email.com", joinDate: "2023-03-10", status: "Inactive", role: "Standard User" },
  { username: "@sophia_taylor", email: "sophia.taylor@email.com", joinDate: "2023-02-25", status: "Active", role: "Standard User" }
];

const tbody = document.getElementById("userTableBody");

function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.joinDate}</td>
      <td><span class="status ${user.status.toLowerCase()}">${user.status}</span></td>
      <td><span class="role">${user.role}</span></td>
      <td><a href="#">View</a></td>
    `;
    tbody.appendChild(row);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = users.filter(u =>
    u.username.toLowerCase().includes(keyword) || u.email.toLowerCase().includes(keyword)
  );
  renderTable(filtered);
});

renderTable(users);
