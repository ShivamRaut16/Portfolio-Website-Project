document.addEventListener('DOMContentLoaded', function() {
  // Array containing different role descriptions
  var roles = ['developer', 'designer', 'digital marketer'];
  var currentIndex = 0;
  var typingSpeed = 100; // Adjust typing speed as needed

  // Function to update the role description with typing effect
  function updateRoleDescription() {
    var roleDescription = "I'm Shivam Raut, a passionate ";
    var roleSpan = document.getElementById('roleSpan');
    var roleText = roles[currentIndex];
    var roleLength = roleText.length;
    var count = 0;
    var interval = setInterval(function() {
      if (count < roleLength) {
        roleSpan.innerHTML += roleText.charAt(count);
        count++;
      } else {
        clearInterval(interval);
        setTimeout(function() {
          roleSpan.innerHTML = '';
          currentIndex = (currentIndex + 1) % roles.length;
          updateRoleDescription();
        }, 1000); // Delay before next role
      }
    }, typingSpeed);
    // Change color for each role
    switch(roleText) {
      case 'developer':
        roleSpan.style.color = '#ff006a'; // Red color for developer
        break;
      case 'designer':
        roleSpan.style.color = '#ff006a'; // Green color for designer
        break;
      case 'digital marketer':
        roleSpan.style.color = '#ff006a'; // Blue color for digital marketer
        break;
    }
  }

  // Call the function initially
  updateRoleDescription();
});

/*

document.addEventListener("DOMContentLoaded", function () {
  const skillsData = [
    {
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
      heading: "C",
      description: "Description of C.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/cpp.png",
      heading: "C++",
      description: "Description of C++.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FINZsH6XtRIqQqxvYGP6Q&w=384&q=75",
      heading: "HTML / CSS",
      description: "Description of HTML / CSS.Description of HTML / CSSDescription of HTML / CSSDescription of HTML / CSSDescription of HTML / CSSDescription of HTML / CSSDescription of HTML / CSS",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/bootstrap.png",
      heading: "Bootstrap",
      description: "Description of Bootstrap.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/tailwind.png",
      heading: "Tailwind",
      description: "Description of Tailwind.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/mongodb.png",
      heading: "MongoDB",
      description: "Description of MongoDB.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/expressjs.png",
      heading: "ExpressJS",
      description: "Description of ExpressJS.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/react.png",
      heading: "React",
      description: "Description of React.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/nodejs.png",
      heading: "NodeJS",
      description: "Description of NodeJS.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/nextjs.png",
      heading: "NextJS",
      description: "Description of NextJS.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/api.png",
      heading: "API",
      description: "Description of API.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/docker.png",
      heading: "Docker",
      description: "Description of Docker.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/python.png",
      heading: "Python",
      description: "Description of Python.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/java.png",
      heading: "Java",
      description: "Description of Java.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/android.png",
      heading: "Android",
      description: "Description of Android.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/react_native.png",
      heading: "React Native",
      description: "Description of React Native.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/flutter.png",
      heading: "Flutter",
      description: "Description of Flutter.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/ios.png",
      heading: "iOS",
      description: "Description of iOS.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/swift.png",
      heading: "Swift",
      description: "Description of Swift.",
      buttonText: "Learn More"
    },
    {
      imageSrc: "images/git_github.png",
      heading: "Git/GitHub",
      description: "Description of Git/GitHub.",
      buttonText: "Learn More"
    },
    // Reorder other skills as needed
  ];

  // Function to create card
  function createCard(skill) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${skill.imageSrc}" alt="${skill.heading} Image">
      <h2>${skill.heading}</h2>
      <p>${skill.description}</p>
      <button>${skill.buttonText}</button>
    `;
    cardContainer.appendChild(card);
  }

  const cardContainer = document.querySelector(".card-container");

  // Create cards based on the reordered skillsData array
  skillsData.forEach(skill => createCard(skill));

  // Start card animation
  function moveCards() {
    const cards = document.querySelectorAll(".card");
    const firstCard = cards[0];
    cardContainer.appendChild(firstCard);
  }

  setInterval(moveCards, 8000); // Adjust the interval for slower speed (milliseconds)
});

*/


document.addEventListener("DOMContentLoaded", function() {
  const cardContainer = document.getElementById("cardContainer");
  const cards = cardContainer.getElementsByClassName("card");
  const interval = 1000; // 1 second

  let currentCard = 0;

  function showNextCard() {
    if (currentCard < cards.length) {
      cards[currentCard].style.display = "block";
      currentCard++;
      setTimeout(showNextCard, interval);
    }
  }

  // Initially hide all cards
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  // Start showing cards one after another
  showNextCard();
});
