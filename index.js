const body = document.body;

const div = document.createElement('div');
const text = document.createElement('h4');

text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat esse asperiores? Maxime possimus voluptatibus odio vero. Odio sequi iste rem sed ipsam saepe. Sequi est porro exercitationem maxime dolorum?";

div.prepend(text);
body.prepend(div);

div.style.display = 'flex';
div.style.justifyContent = 'center';

text.style.width = "350px";
text.style.heighjt = "100px";
text.style.border = "1.8px solid #000";
text.style.borderColor = "red";
text.style.borderRadius = '20px';
text.style.padding = '20px';
text.style.textAlign = "center";
text.style.justifyContent = 'center';

const url = document.createElement('div');

const int = document.createElement('a');
const you = document.createElement('a');
const inst = document.createElement('a');

int.textContent = 'intocode';
you.textContent = 'youtube';
inst.textContent = 'instagram';

int.setAttribute('href','#');
you.setAttribute('href','#');
inst.setAttribute('href','#');

url.style.width = '350px';
url.style.height = '50px';
url.style.display = 'flex';
url.style.justifyContent = "space-between";
url.style.margin = 'auto';

url.append(int, you, inst);

body.append(url);




