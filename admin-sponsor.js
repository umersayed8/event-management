const sponsors = [
  ["Tech Innovators Inc.", "contact@techinnovators.com", "Gold", "Tech Conference 2024"],
  ["Global Solutions Ltd.", "info@globalsolutions.com", "Silver", "Community Outreach Program"],
  ["Creative Minds Agency", "hello@creativeminds.com", "Bronze", "Art Exhibition"],
  ["EcoTech Solutions", "support@ecotechsolutions.com", "Gold", "Sustainability Summit"],
  ["Digital Dynamics Corp.", "inquiries@digitaldynamics.com", "Silver", "Digital Marketing Workshop"],
  ["Innovate Forward LLC", "partnerships@innovateforward.com", "Bronze", "Innovation Challenge"],
  ["Future Trends Group", "contact@futuretrends.com", "Gold", "Future of Tech Forum"],
  ["Strategic Alliances Inc.", "info@strategicalliances.com", "Silver", "Business Networking Event"],
  ["Creative Visionaries Co.", "hello@creativevisionaries.com", "Bronze", "Design Thinking Workshop"],
  ["Sustainable Growth Partners", "support@sustainablegrowth.com", "Gold", "Green Business Expo"],
];

const tableBody = document.getElementById("sponsorTable");

function populateTable(data) {
  tableBody.innerHTML = "";
  data.forEach(([name, contact, level, campaign]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${contact}</td>
      <td><span class="badge ${level.toLowerCase()}">${level}</span></td>
      <td>${campaign}</td>
      <td><a href="#" class="view-link">View</a></td>
    `;
    tableBody.appendChild(row);
  });
}

populateTable(sponsors);

document.getElementById("searchInput").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = sponsors.filter(([name, email, , campaign]) =>
    name.toLowerCase().includes(keyword) ||
    email.toLowerCase().includes(keyword) ||
    campaign.toLowerCase().includes(keyword)
  );
  populateTable(filtered);
});
