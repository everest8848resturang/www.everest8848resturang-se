// Configuration
 import dynamic from 'next/dynamic';
const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
];

// 1. Populate Dropdowns
const timeSelect = document.getElementById('time');
const guestSelect = document.getElementById('guests');

timeSlots.forEach(time => {
    let opt = document.createElement('option');
    opt.value = time;
    opt.innerHTML = time;
    timeSelect.appendChild(opt);
});

for (let i = 1; i <= 10; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = `${i} ${i === 1 ? 'Guest' : 'Guests'}`;
    guestSelect.appendChild(opt);
   

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
// Do the same for TileLayer, Marker, and Popup
}

// 2. Handle Date (Disable past dates)
const dateInput = document.getElementById('date');
dateInput.min = new Date().toISOString().split('T')[0];

// 3. Form Submission logic
const bookingForm = document.getElementById('booking-form');
const submitBtn = document.getElementById('submit-btn');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Change button state (Loading)
    submitBtn.disabled = true;
    submitBtn.innerText = "SENDING...";

    // Collect Data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: parseInt(document.getElementById('guests').value),
        special_requests: document.getElementById('special_requests').value,
        status: 'pending'
    };

    try {
        // REPLACE THIS with your actual API endpoint
        console.log("Submitting to API:", formData);
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show Success Screen
        showSuccess(formData);
    } catch (error) {
        alert("Something went wrong. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerText = "CONFIRM BOOKING";
    }
});
<form 
  action="https://formspree.io/f/your-id" 
  method="POST" 
  className="space-y-6"
></form>

function showSuccess(data) {
    document.getElementById('form-container').classList.add('hidden');
    document.querySelector('.hero').classList.add('hidden');
    
    document.getElementById('success-screen').classList.remove('hidden');
    document.getElementById('conf-email').innerText = data.email;
    document.getElementById('conf-details').innerHTML = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>Date:</strong> ${data.date}<br>
        <strong>Time:</strong> ${data.time}<br>
        <strong>Guests:</strong> ${data.guests}
    `;
    
}