/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Nithin SJ",
  title: "Hey there ! I'm Nithin :)",
  subTitle: emoji(
    "A student who codes for fun and an aspiring Full Stack Dev 🚀 having an experience of building Web applications with JavaScript / ReactJS / NodeJS  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/humanbeeng",
  linkedin: "https://www.linkedin.com/in/thenithinraj/",
  gmail: "thenithinraj@gmail.com",

  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "Most of the stuff which I do is to explore new tech everyday (and I play games toooo)😄"
  ),
  skills: [
    "Technical Stuff : ",
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Learn about Algorithms and challenge myself on Coding platforms everyday"
    ),
    emoji(
      "⚡ Integration of third party services such as Heroku, Git, Google Dev Console"
    ),
    "Kinda non technical stuff : ",
    emoji("📚 Read books and blogs on Medium and dev.to"),
    emoji("📽️ Edit YouTube Content for clients"),
    emoji("🎮 Stream games on Youtube @Retro"),
    emoji("🚴🏻 Go on cycling looong way... "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "vscode",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish",
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/dsce.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2017 - August 2021",
      desc:
        "Participated in the research in the domain of Computer Network and Parallel Computing and presented a paper.",
      descBullets: [
        "Took courses about Software Engineering, Mobile App Dev, Operating Systems etc..",
        "Active member of Web Dev club.",
      ],
    },
    {
      schoolName: "Cambridge International Public School",
      logo: require("./assets/images/cips.png"),
      subHeader: "High School Education",
      duration: "September 2013 - April 2015",
      desc: "Stood as a rank 1 of our school and top 3% in the district.",
      descBullets: [
        "Represented our district in the Iken Scientifica expo and a Gold medalist from zonals.",
      ],
    },
    {
      schoolName: "I C Tutorials",
      logo: require("./assets/images/grad3.png"),
      subHeader:
        "Most of the practical stuff I learnt was through YouTube and Internet in general",
      descBullets: [
        "Learnt Web Dev from Steven Grider on Udemy",
        "Learnt Data Structures and Algorithms from Algoexpert.io",
        "Practiced DSA from Leetcode, Geeksforgeeks, CodeChef.. ",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ReactJS", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "NodeJS",
      progressPercentage: "60%",
    },
    {
      Stack: "NoSQL/MongoDB",
      progressPercentage: "60%",
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Dev.",
      company: "Rent the Place",
      companylogo: require("./assets/images/building.png"),
      date: "Fall, 2020",
      desc: "A Workspace Rental Platform",
      descBullets: [
        "Led a team of four and contributed as majorly in the Frontend Development using ReactJS and Redux for state management.",
        "Developed a platform which allows employees and team managers to rent a workplace of a desired hotel.",
        "Deployed the project on Heroku with configuration emulating production environment",
      ],
    },
    {
      role: "Bash Scripter",
      company: "Hadoop Auto",
      companylogo: require("./assets/images/terminal.png"),
      date: "Winter, 2020",
      desc: "An Automated tool for a Pseudo-Distributed Hadoop HDFS",
      descBullets: [
        "Wrote a Bash script for auto Hadoop Installation and HDFS Configuration in a Pseudo Distributed Environment.",
        "Part of a team of two and was responsible for developing the shell script which significantly reduced the installation time from 40 mins down to 20 mins.",
      ],
    },
    {
      role: "Software Developer",
      company: "Shareloader",
      companylogo: require("./assets/images/shareloader.png"),
      date: "Winter, 2021",
      desc: "An Advanced Multipart Downloader",
      descBullets: [
        "Developing a product where local users can parallelly download a same file thereby reducing the download time upto 5 times.",
        "Working as a team of two, where we are currently developing the prototype in the form of a Command line executable.",
      
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Technical Projects",
  subtitle: "Some projects which helped me build my knowledge",
  projects: [
    {
      projectName: "Hadoop Auto",
      projectDesc: "An automation script for Pseudo-Distributed Hadoop HDFS",
      footerLink: [
        {
          name: "View Source Code",
          url: "http://github.com/humanbeeng/hadoop-auto-install",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      projectName: "Rent the Place",
      projectDesc: "A Workspace rental platform developed on the MERN Stack",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://rent-the-place.herokuapp.com",
        },
      ],
    },
    {
      projectName: "Just Express !",
      projectDesc: "A minimal and realtime survey webapp",
      footerLink: [
        {
          name: "Coming soon..",
          url: "/#",
        },
        //  you can add extra buttons here.
      ],
    },

    {
      projectName: "ShareLoader",
      projectDesc:
        "An advanced multipart downloader based on our research @DSCE",
      footerLink: [
        {
          name: "Coming soon..",
          url: "/#",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: emoji("Lets have a chat. Hit me up on any of these platforms 👇"),

  emailAddress: "thenithinraj@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
