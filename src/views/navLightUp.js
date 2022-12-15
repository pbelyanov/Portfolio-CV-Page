export function navSelect(event) {
    document.getElementById('home').style.borderBottom = '';
    document.getElementById('home').style.color = '';

    document.getElementById('aboutMe').style.borderBottom = '';
    document.getElementById('aboutMe').style.color = '';

    document.getElementById('prevExp').style.borderBottom = '';
    document.getElementById('prevExp').style.color = '';

    document.getElementById('projects').style.borderBottom = '';
    document.getElementById('projects').style.color = '';

    document.getElementById('contact').style.borderBottom = '';
    document.getElementById('contact').style.color = '';

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