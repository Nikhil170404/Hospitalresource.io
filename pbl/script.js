document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const locationInput = document.getElementById('locationInput');

    searchButton.addEventListener('click', function() {
        const location = locationInput.value.trim();
        if (location !== '') {
            const hospitalsNearLocation = getHospitalsNearLocation(location);
            displayHospitalList(hospitalsNearLocation);
        } else {
            alert('Please enter a location.');
        }
    });

    function getHospitalsNearLocation(location) {
        // Dummy data for demonstration
        const hospitals = [
            { name: 'Disha Hospital', address: 'AG Jambhulpada, AG Link Road Landmark: Near Jagruti Nagar Metro Station Ghatkopar West, Mumbai, Mumbai', bedsAvailable: 2 },
            { name: 'Sarvoda Hospital', address: 'Sarvoda Temple Near GhatKopar Station ,Mumbai', bedsAvailable: 5 },
            { name: 'Shree Kandivali Hitwardhak Mandal Hospital', address: 'Kandivali West, Mumbai', bedsAvailable: 15 },
            { name: 'Hospital A', address: '123 Main St, Nalasopara', bedsAvailable: 10 },
            { name: 'Hospital B', address: '456 Elm St, Mumbai', bedsAvailable: 5 },
            { name: 'Hospital C', address: '789 Oak St, Ghatkopar', bedsAvailable: 15 },
            { name: 'Hospital A', address: '123 Main St, Mumbai', bedsAvailable: 14 },
            { name: 'Hospital B', address: '456 Elm St, Kandivali', bedsAvailable: 5 },
            { name: 'Hospital C', address: '789 Oak St, Mumbai', bedsAvailable: 15 },
            { name: 'Hospital A', address: '123 Main St, Mumbai', bedsAvailable: 10 },
            { name: 'Hospital B', address: '456 Elm St, Mumbai', bedsAvailable: 5 },
            { name: 'Hospital C', address: '789 Oak St, Mumbai', bedsAvailable: 15 }
        ];

        // Filter hospitals based on the city name
        const hospitalsInCity = hospitals.filter(hospital => {
            // Assuming the city name is part of the hospital's address
            return hospital.address.toLowerCase().includes(location.toLowerCase());
        });

        return hospitalsInCity;
    }

    function displayHospitalList(hospitals) {
        const hospitalList = document.getElementById('hospitalList');
        hospitalList.innerHTML = ''; // Clear previous entries

        hospitals.forEach(hospital => {
            const listItem = document.createElement('li');
            listItem.classList.add('hospital-info');
            listItem.innerHTML = `
                <h3>${hospital.name}</h3>
                <p><strong>Address:</strong> ${hospital.address}</p>
                <p><strong>Beds Available:</strong> ${hospital.bedsAvailable}</p>
                <button class="details-button">Details</button>
            `;
            hospitalList.appendChild(listItem);
        });
    }
});
