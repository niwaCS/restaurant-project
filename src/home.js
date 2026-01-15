import img from './img/hero-photo.jpg';
export function homePage() {

    
    const contentHolder = document.getElementById('content');

    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    heroSection.style.backgroundImage = `url(${img})`;
    const heroSectionImageCredit = document.createElement('div');
    heroSectionImageCredit.classList.add('hero-section-image-credit');
    const heroSectionCreditText = document.createElement('p');
    heroSectionCreditText.innerHTML = 'Photo by <a href="https://unsplash.com/@iulialaslea"> Iulia Laslia</a> on <a href="https://unsplash.com/">Unsplash</a>';


    const restaurantHeadline = document.createElement('h1');
    restaurantHeadline.textContent = "Trattoria Luna Rossa";

    const subtitle = document.createElement('p');
    subtitle.textContent = "Experience authentic Italian cuisine...";
    subtitle.classList.add('hero-subtitle');


    heroSectionImageCredit.appendChild(heroSectionCreditText);
    heroSection.appendChild(heroSectionImageCredit);
    heroSection.appendChild(restaurantHeadline);
    heroSection.appendChild(subtitle);

    heroSection.appendChild(restaurantHeadline);
    heroSection.appendChild(subtitle);
    contentHolder.appendChild(heroSection);

    const reservationBtn = document.createElement('button');
    reservationBtn.classList.add('reservation-button');
    reservationBtn.textContent = "Reservations";

    const welcomeText = document.createElement('p');
    welcomeText.textContent= "Since 1992, Luna Rossa has been serving authentic Italian cuisine in the heart of Portland. Our handmade pasta, wood-fired pizza, and carefully curated wine selection honor the traditions of Emilia-Romagna.";
    welcomeText.classList.add('welcome-text');
    contentHolder.appendChild(welcomeText);

    const reservationModal = document.createElement('div');
    reservationModal.classList.add('reservation-dialog');
    reservationModal.style.display ='none';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeResBtn = document.createElement('span');
    closeResBtn.classList.add('close-button');
    closeResBtn.textContent = '✖';
    closeResBtn.addEventListener('click', () => {
        reservationModal.style.display = "none";
    });

    const reservationForm = document.createElement('form');
    reservationForm.classList.add('reservation-form');
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Please enter your details';

    heroSection.appendChild(reservationBtn);
    
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:'
    const nameInput = document.createElement('input');   
    nameInput.type='text';
    nameInput.name='name';
    nameInput.required=true;

    const dateInput = document.createElement('input');
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date:'
    dateInput.type='date';
    dateInput.required=true;

    const timeInput = document.createElement('input');
    const timeLabel = document.createElement('label');
    timeLabel.textContent = 'Time:'
    timeInput.type='time';
    timeInput.required=true;

    const emailLabel = document.createElement('label');
    emailLabel.textContent= 'Email:'
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.required=true;

    const phoneInputLabel = document.createElement('label');
    phoneInputLabel.textContent = 'Phone:';
    const phoneInput = document.createElement('input');
    phoneInput.type= 'tel';
    phoneInput.name= 'phone';
    phoneInput.placeholder = "222-333-4444"
    phoneInput.required = true;

    const partySizeLabel = document.createElement('label');
    partySizeLabel.textContent = 'Party Size:';
    const partySizeInput = document.createElement('input');
    partySizeInput.type = 'number';
    partySizeInput.name = 'partySize';
    partySizeInput.min = '1';
    partySizeInput.max = '20';
    partySizeInput.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit Reservation';

    reservationForm.classList.add('reservation-form');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            date: dateInput.value,
            time: timeInput.value,
            partySize: partySizeInput.value
        };



        console.log('Reservation submitted:', formData);
        alert('Reservation submitted! We look forward to seeing you.');

        reservationModal.style.display = 'none';
        reservationForm.reset();
    });

    modalContent.appendChild(closeResBtn);
    modalContent.appendChild(reservationForm);

    reservationForm.appendChild(formTitle);
    reservationForm.appendChild(nameLabel);
    reservationForm.appendChild(nameInput);
    reservationForm.appendChild(emailLabel);
    reservationForm.appendChild(emailInput);
    reservationForm.appendChild(phoneInputLabel);
    reservationForm.appendChild(phoneInput);
    reservationForm.appendChild(dateLabel);
    reservationForm.appendChild(dateInput);
    reservationForm.appendChild(timeLabel);
    reservationForm.appendChild(timeInput);
    reservationForm.appendChild(partySizeLabel);
    reservationForm.appendChild(partySizeInput);
    reservationForm.appendChild(submitBtn);

    reservationModal.appendChild(closeResBtn);
    reservationModal.appendChild(reservationForm);
    reservationModal.appendChild(modalContent);    

    contentHolder.appendChild(reservationModal);

    reservationBtn.addEventListener('click', () => {
        reservationModal.style.display= 'flex';
    });

    reservationModal.addEventListener('click', (e) => {
        if (e.target === reservationModal) {
            reservationModal.style.display = 'none';
        }
    });


    const quickInfoSection = document.createElement('div');
    quickInfoSection.classList.add('quick-info');

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('info-item');
    
    const addressLabel = document.createElement('h3');
    addressLabel.textContent = 'Location'

    const addressText = document.createElement('p');
    addressText.innerHTML=`
    847 Merchant Boulevard<br>
    Riverside District<br>
    Portland, OR 97214
    `;

    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(addressText);


    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('info-item');
    
    const phoneLabel = document.createElement('h3');
    phoneLabel.textContent = "Phone";


    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(503)-555-8742';

    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneNumber);


    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('info-item');

    const hoursLabel = document.createElement('h3');
    hoursLabel.textContent = 'Hours';
    
    const hoursText = document.createElement('p');
    hoursText.textContent = 'Tue-Thu: 5-10 PM | Fri-Sat: 5-11 PM | Sun: 4-9 PM';

    hoursDiv.appendChild(hoursLabel);
    hoursDiv.appendChild(hoursText);

    quickInfoSection.appendChild(addressDiv);
    quickInfoSection.appendChild(phoneDiv);
    quickInfoSection.appendChild(hoursDiv);

    contentHolder.appendChild(quickInfoSection);





    const handleEscapeKey = (e) => {
        if(e.key === 'Escape' && reservationModal.style.display === 'flex') {
            reservationModal.style.display = 'none';
        }
    }

    document.addEventListener('keydown', handleEscapeKey);


    

}
