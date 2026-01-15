export function aboutPage() {
    const contentHolder = document.getElementById('content');

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Trattoria Luna Rossa';
    contentHolder.appendChild(pageHeading);

    const tagline = document.createElement('p');
    tagline.textContent = 'Where Tradition Meets Elegance';
    tagline.id = "aboutTagline";
    contentHolder.appendChild(tagline);

    const aboutUs = document.createElement('section');
    const aboutUsHeading = document.createElement('h2');
    aboutUsHeading.textContent = 'Our Story';
    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = "Trattoria Luna Rossa opened its doors in 1992, bringing the warmth of Emilia-Romagna to our community. Founded by Chef Marco Benedetti and his wife Sofia, our restaurant honors Marco's grandmother's recipes while showcasing the finest seasonal ingredients. Every pasta is rolled by hand, every sauce simmers for hours, and every guest becomes part of our family."
    const aboutUsList = document.createElement('ul');
    aboutUsList.classList.add('features-list');
    aboutUsText.id = 'about-story';
    
    aboutUs.appendChild(aboutUsHeading);
    aboutUs.appendChild(aboutUsText);
    contentHolder.appendChild(aboutUs);

    const featureListHeading = document.createElement('h2');

    featureListHeading.textContent = 'What Makes Us Special: '
    contentHolder.appendChild(featureListHeading);
    
    const features = [
        'All pasta made fresh daily in-house',
        'Wine cellar featuring over 200 Italian vintages',
        'Ingredients imported weekly from Parma and Bologna',
        'Wood-fired oven from Naples for authentic pizza',
        'Private dining room available for special occasions'
    ]

    features.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        aboutUsList.appendChild(li);
    });

    contentHolder.appendChild(aboutUsList);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactHTML = `
    <p><strong>Address:</strong><br>
    847 Merchant Boulevard<br>
    Riverside District<br>
    Portland, OR 97214</p>

    <p><strong>Phone:</strong> (503)-555-8742</p>

    <p><strong>Email:</strong> reservations@lunarossapdx.com</p>
    
    
    `;
    
    contactInfo.innerHTML = contactHTML;

    contentHolder.appendChild(contactInfo);

    const hopSection = document.createElement('div');
    const hopHeading = document.createElement('h2');
    hopHeading.textContent = 'Hours of Operation';

    hopSection.classList.add('hours-section');

    const hours = [
        'Tuesday - Thursday: 5:00 PM - 10:00 PM',
        'Friday - Saturday: 5:00 PM - 11:00 PM',
        'Sunday: 4:00 PM - 9:00 PM',
        'Monday: Closed'
    ];

    const hoursList = document.createElement('ul');
    hours.forEach(time => {
        const li = document.createElement('li');
        li.textContent = time;
        hoursList.appendChild(li);
    });

    hoursList.classList.add('hours-list');

    hopSection.appendChild(hopHeading);
    hopSection.appendChild(hoursList);
    contentHolder.appendChild(hopSection);

    const funFactsSection = document.createElement('section');
    const funFactsHeader = document.createElement('h2');
    funFactsHeader.textContent = "Accolades";
    funFactsSection.appendChild(funFactsHeader);
    contentHolder.appendChild(funFactsSection);

    const funFacts = document.createElement('div');
    const funFactOne = document.createElement('p');
    funFactOne.textContent = "Winner of Portland Dining Magazine's 'Best Italian' 2023";
    funFactOne.classList.add('funFacts');
    
    const funFactTwo = document.createElement('p');
    funFactTwo.textContent = "Featured in Bon Appétit's 50 Best Italian Restaurants in America' 2024";
    funFactTwo.classList.add('funFacts');

    const funFactThree = document.createElement('p');
    funFactThree.textContent = "Zagat Rated: Outstanding Food, Service & Ambiance";
    funFactThree.classList.add('funFacts');

    contentHolder.appendChild(funFactThree);
    contentHolder.appendChild(funFactTwo);
    contentHolder.appendChild(funFacts);
    contentHolder.appendChild(funFactOne);

    









}