//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development Executive",
    cardImage: "assets/images/experience-page/brandking.jpeg",
    place: "Brandking Digital Agency",
    time: "(Nov, 2021 to April 2022)",
    desp: "<li>Created Polaris Connect website.</li> <li>Created Shockwaves Investments website.</li> <li>Updated Brandking Digital Agency website.</li> <li>Created Kiomobee website.</li> <li>Added data to Littlekings website.</li><li>Created static websites for shockwaves, kulan cafe, and dentmind companies.</li> "
  },
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/brandking.jpeg",
    place: "Brandking Digital Agency",
    time: "(Jul, 2021 to Oct, 2021)",
    desp: "<li>Created email signatures for Brandking Digital Agency and Safari Afrika.</li> <li>Added tours to Safari Afrika website.</li> <li>Created a chatbot for Safari Afrika and Brandking Digital Agency.</li> <li>Updated Brandking Digital Agency website.</li> <li>Updated The Jacaranda Hotel website.</li> <li>Added content to LittleKings website.</li>"
  },
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/object.jpg",
    place: "Object Reference Limited",
    time: "(Feb, 2021 - May, 2021)",
    desp: "<li>Developed a content management system that updates users on the development of the organization.</li> <li>Developed an email system that notifies subscription from users for Favour Medical Services.</li> <li>Created wireframes for Favour Medical Services.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


