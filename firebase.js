import firebase from "firebase/app";
import "firebase/firestore";

// Define your Firebase configuration (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyCVLnRuK3p1wwazi-mmFGcMLi5YyBKLru4",
  authDomain: "education-ce757.firebaseapp.com",
  projectId: "education-ce757",
  storageBucket: "education-ce757.appspot.com",
  messagingSenderId: "235451837896",
  appId: "1:235451837896:web:081aab2ede42d6a740e4fd",
  measurementId: "G-HY9K0P941Y"
};

// Initialize Firebase and Firestore (client-side)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Initialize charts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Revenue Trends Chart (Line Chart)
  var revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Revenue',
        data: [12000, 15000, 14000, 17000, 16000, 19000],
        backgroundColor: 'rgba(37,99,235,0.2)',
        borderColor: '#2563eb',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Payment Distribution Chart (Pie Chart)
  var paymentCtx = document.getElementById('paymentChart').getContext('2d');
  new Chart(paymentCtx, {
    type: 'pie',
    data: {
      labels: ['Completed', 'Pending', 'Overdue'],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: ['#16a34a', '#facc15', '#dc2626']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
});

// Function to add a new payment (simulated via prompt)
function addPayment() {
  var date = prompt("Enter payment date (YYYY-MM-DD):");
  var description = prompt("Enter payment description:");
  var amount = prompt("Enter amount:");
  if (date && description && amount) {
    var tbody = document.getElementById('transactionsBody');
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + date + '</td>' +
      '<td>' + description + '</td>' +
      '<td>$' + amount + '</td>' +
      '<td><span class="status-badge pending">Pending</span></td>' +
      '<td><button onclick="viewTransaction(this)">View</button></td>';
    tbody.appendChild(row);
    alert("Payment added successfully.");
  } else {
    alert("All fields are required.");
  }
}

// Function to generate a dummy invoice.
function generateInvoice() {
  var invoiceId = Math.floor(Math.random() * 1000000);
  alert("Invoice #" + invoiceId + " generated successfully.");
}

// Function to download a dummy report as a CSV file.
function downloadReport() {
  var csvContent =
    "Date,Description,Amount,Status\n" +
    "2023-12-15,Tuition Fee - John Doe,1200,Completed\n" +
    "2023-12-14,Library Fine - Jane Smith,45,Pending\n";
  var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement("a");
  var url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "report.csv");
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to simulate navigating to the Scholarship Management page.
function manageScholarships() {
  alert("Redirecting to Scholarship Management page...");
  // For a real application, you might redirect:
  // window.location.href = 'scholarships.html';
}

// Function to view transaction details.
function viewTransaction(btn) {
  var row = btn.parentElement.parentElement;
  var details =
    "Transaction Details:\n" +
    "Date: " + row.cells[0].innerText + "\n" +
    "Description: " + row.cells[1].innerText + "\n" +
    "Amount: " + row.cells[2].innerText + "\n" +
    "Status: " + row.cells[3].innerText;
  alert(details);
}

// Function to send an email reminder via the server-side endpoint.
function sendReminder(btn) {
  var row = btn.parentElement.parentElement;
  var description = row.cells[1].innerText;
  
  // For demonstration, using a static recipient email.
  const email = "kidspoiler6@gmail.com";
  const subject = "Payment Reminder";
  const message = "This is a reminder for your pending payment: " + description;

  fetch('/send-reminder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, subject, message })
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to send reminder email.');
  });
}
