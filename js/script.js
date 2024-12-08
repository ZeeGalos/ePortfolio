// Project Carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");

    const projects = [
        {
            title: "Project 1",
            description: "This game is a clone of the classic Angry Birds, developed entirely in pure Java. It features similar gameplay mechanics, where players launch birds to topple structures and eliminate pigs using realistic physics. The project demonstrates the capabilities of Java for creating engaging, physics-based arcade games",
            imageSrc: "assets/images/github.png",
            githubLink: "https://drive.google.com/drive/folders/1FcmMTOZK1uFMx-N8QhFWYMbmkCmHFpPu?usp=sharing",
        },
        {
            title: "Project 2",
            description: "A Simple RPG-Tetris Game combines classic RPG mechanics with the puzzle-solving fun of Tetris. Players engage in battles where they arrange falling blocks to unlock skills, perform attacks, or defend against enemies. The game features a progression system with leveling, equipment upgrades, and skill trees, encouraging strategic thinking and quick reflexes. This innovative blend of genres offers an engaging challenge, balancing puzzle-solving with RPG-style decision-making",
            imageSrc: "assets/images/github.png",
            githubLink: "https://drive.google.com/drive/folders/12BLo8DxG15AARRZkqyvLvZ-D3cr-pMXq?usp=sharing",
        },
        {
            title: "Project 3",
            description: "This Gym Management App is a web-based application developed using Flask and MySQL. It streamlines gym operations by allowing users to manage memberships, track member progress, schedule classes, and handle payments. With an intuitive interface and robust backend, the app ensures efficient management for both gym owners and members, leveraging the power of Flask for web development and MySQL for reliable data storage.",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/franku69/final_crud_app",
        },
        {
            title: "Project 4",
            description: "This Simple E-Commerce App is a web application built using Laravel and phpMyAdmin. It provides essential features for online shopping, including product browsing, cart management, and secure checkout. Powered by Laravel's robust framework and phpMyAdmin for database management, the app ensures a smooth and efficient shopping experience while maintaining a developer-friendly backend for easy customization and scalability.",
            imageSrc: "assets/images/github.png",
            githubLink: "https://github.com/franku69/rizz-store",
        },
        {
            title: "Project 5",
            description: "This Simple Battle Royale Game is a Roblox experience where players choose from four distinct races: Elf, Human, Orc, and Demon, each with unique skills and abilities. Engage in fast-paced combat, strategic gameplay, and explore a dynamic battleground as you strive to be the last player standing. With diverse playstyles and abilities tailored to each race, this game offers endless fun and replayability for Roblox enthusiasts.",
            imageSrc: "assets/images/roblox.jpg",
            githubLink: "https://www.roblox.com/games/91729729851451/battle-royale-game",
        },
        {
            title: "Project 6",
            description: "Sans Obby is a thrilling Roblox game inspired by the iconic character from Undertale and his theme, 'Megalovania.' Players navigate a challenging obstacle course filled with bones, lasers, and tricky puzzles, all designed to evoke the essence of a Sans boss fight. With intense gameplay, thematic hazards, and an atmosphere true to the Undertale vibe, this obby offers a fun and nostalgic experience for fans and gamers alike.",
            imageSrc: "assets/images/roblox.jpg",
            githubLink: "https://www.roblox.com/games/18942713089/Sans-Lobby-BOSS-FIGHT-HARDCORE",
        },
        {
            title: "Project 7",
            description: "Isekai Magic is an immersive Roblox game where players are transported to a fantastical world brimming with magic and adventure. Choose your magical class—Mage, Summoner, Elementalist, or Enchanter—and master unique spells to battle mythical creatures, explore vast landscapes, and complete epic quests. With dynamic combat, customizable abilities, and a richly detailed isekai world, this game offers endless possibilities for fans of magic and fantasy.",
            imageSrc: "assets/images/roblox.jpg",
            githubLink: "https://www.roblox.com/games/119264217516627/Isekai-Tower-of-Heptesies",
        },
      
    ];

    // Generate carousel items
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("carousel-item");
        projectItem.innerHTML = `
            <div class="carousel-image-container">
                <img src="${project.imageSrc}" alt="${project.title} Screenshot">
            </div>
            <div class="carousel-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a class="btn" href="${project.githubLink}" target="_blank" style="
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #333;
                    color: #fff;
                    font-size: 1rem;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                    border: none;
                    transition: background-color 0.3s, transform 0.3s;
                ">Check it</a>
            </div>
        `;
        carousel.appendChild(projectItem);
    });

    // Add navigation functionality
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let scrollAmount = 0;
    const scrollStep = 300; // Adjust for scroll sensitivity

    nextButton.addEventListener("click", () => {
        scrollAmount += scrollStep;
        carousel.scrollLeft = scrollAmount;
    });

    prevButton.addEventListener("click", () => {
        scrollAmount -= scrollStep;
        carousel.scrollLeft = scrollAmount;
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const toggleButton = document.createElement("button");
    const navMenu = document.querySelector("nav");

    // Configure toggle button
    toggleButton.classList.add("menu-toggle");
    toggleButton.setAttribute("aria-label", "Toggle navigation menu");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.innerHTML = `
        <img src="assets/images/profile.jpg" alt="Logo" class="menu-logo">
        <div class="lines">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
    `;

    document.body.appendChild(toggleButton);

    // Backdrop for overlay effect
    const backdrop = document.createElement("div");
    backdrop.classList.add("menu-backdrop");
    document.body.appendChild(backdrop);

    // Toggle menu function
    function toggleMenu() {
        const isActive = header.classList.toggle("active");
        toggleButton.setAttribute("aria-expanded", isActive);
        backdrop.classList.toggle("visible", isActive);
        document.body.classList.toggle("no-scroll", isActive); // Prevent body scrolling when menu is open
    }

    // Event listeners
    toggleButton.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", toggleMenu); // Close menu on backdrop click

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && header.classList.contains("active")) {
            header.classList.remove("active");
            toggleButton.setAttribute("aria-expanded", "false");
            backdrop.classList.remove("visible");
            document.body.classList.remove("no-scroll");
        }
    });
});

