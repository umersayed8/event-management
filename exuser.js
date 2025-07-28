const activityData = [
  {
    date: "Mar 18, 2024",
    activity: "Content Upload",
    details: "Uploaded 'Guide to Digital Marketing'",
  },
  {
    date: "Mar 15, 2024",
    activity: "Profile Update",
    details: "Updated profile information",
  },
  {
    date: "Feb 28, 2024",
    activity: "Course Enrollment",
    details: "Enrolled in 'Advanced Analytics' course",
  },
  {
    date: "Feb 10, 2024",
    activity: "Community Post",
    details: "Posted in 'Marketing Strategies' forum",
  },
  {
    date: "Jan 15, 2023",
    activity: "Account Creation",
    details: "Account created successfully",
  },
];

const tbody = document.getElementById("activity-body");
activityData.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.date}</td>
    <td>${item.activity}</td>
    <td>${item.details}</td>
  `;
  tbody.appendChild(row);
});
