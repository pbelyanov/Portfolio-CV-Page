export function navSelect(event) {
    document.getElementById('home').style.borderBottom = 'none';
    document.getElementById('home').style.color = 'white';

    document.getElementById('aboutMe').style.borderBottom = 'none';
    document.getElementById('aboutMe').style.color = 'white';

    document.getElementById('prevExp').style.borderBottom = 'none';
    document.getElementById('prevExp').style.color = 'white';

    document.getElementById('projects').style.borderBottom = 'none';
    document.getElementById('projects').style.color = 'white';

    document.getElementById('contact').style.borderBottom = 'none';
    document.getElementById('contact').style.color = 'white';

    switch (event) {
        case 'home':
            document.getElementById('home').style.borderBottom = '2px solid #7867b4';
            document.getElementById('home').style.color = '#7867b4';
            break;
        case 'aboutMe':
            document.getElementById('aboutMe').style.borderBottom = '2px solid #7867b4';
            document.getElementById('aboutMe').style.color = '#7867b4';
            break;
        case 'prevExp':
            document.getElementById('prevExp').style.borderBottom = '2px solid #7867b4';
            document.getElementById('prevExp').style.color = '#7867b4';
            break;
        case 'projects':
            document.getElementById('projects').style.borderBottom = '2px solid #7867b4';
            document.getElementById('projects').style.color = '#7867b4';
            break;
        case 'contact':
            document.getElementById('contact').style.borderBottom = '2px solid #7867b4';
            document.getElementById('contact').style.color = '#7867b4';
            break;
    }
}