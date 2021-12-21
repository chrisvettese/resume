import {Divider} from "@material-ui/core";

export const Primary = '#4360b5';
export const LightGrey = '#dedede';

export const SideMargin = '0.5in';

export const SkillList = [
  'Java, Kotlin, TypeScript, JavaScript, Python',
  'Spring Framework, Flask',
  'PostgreSQL, MySQL, JPA, ORM, Firebase',
  'REST APIs, Postman, Swagger/OpenAPI',
  'Docker containerization',
  'Web development with React',
  'Git version control'
];

export const Jobs = [
  {
    title: 'Product Development Coop',
    company: 'Mitel Networks',
    dates: '05/2021 - 08/2021',
    points: [
      'Created web components for Echo design system using StencilJS and TypeScript. Investigated and resolved bugs reported by users for these components.',
      'Wrote unit and end-to-end tests using Jest'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Thomson Reuters',
    dates: '01/2020 - 04/2020 & 09/2020 - 12/2020',
    points: [
      'Developed Java/Spring microservices with a PostgreSQL database. Configured AWS EC2 instances for said microservices',
      'Wrote Python scripts to automate database tasks',
      'Participated in the Agile development process as part of a Scrum Team'
    ]
  },
  {
    title: 'Software Designer Intern',
    company: 'Nokia',
    dates: '05/2019 - 08/2019',
    points: [
      'Created a Java and Bash script to convert XML to JSON for a REST API',
      'Debugged problems in Java program and designed code to correct them'
    ]
  }
];

export const ProjectList = [
  {
    point: 'Participated in Microsoft Student Hackathon, uOttaHack 2020, Hack the North 2019, and uOttaHack 2019',
    subpoints: []
  },
  {
    point: 'Developed a Kotlin and Spring Framework rental advertising app for a university course',
    subpoints: [
      'Saved and updated data in a MySQL database using Spring repositories and JPA',
      'Supported uploading and viewing of rental property images',
      'Created endpoints according to REST API specification, and tested endpoints in Swagger'
    ]
  },
  {
    point: 'Developed full stack hotel booking system, with a PostgreSQL database, Flask server, and React frontend',
    subpoints: [
      'Dockerized the app so it can be easily deployed with any web hosting service',
      'Added PL/pgSQL scripts to database to determine hotel availability and prevent booking conflicts',
      'Utilized NginX as reverse proxy, and to serve React app'
    ]
  },
  {
    point: 'Developed a home security system using Android Studio',
    subpoints: [
      'Implemented Google Cloud machine learning libraries to detect motion, and distinguish between humans and animals',
      'Used Google Firebase to manage user accounts, and to allow users to check their home status from any location'
    ]
  },
  {
    point: 'Designed a web app with React to search for cooking recipes that match a user\'s ingredients, and rank them by healthiness',
    subpoints: []
  },
  {
    point: 'Developed a multiplayer, team-based action game in Java',
    subpoints: [
      'Used object oriented programming concepts to maximize code reuse and simplify collision detection',
      'Designed a TCP protocol to communicate between clients and the server; exchanging information such as live player positions and team scores'
    ]
  },
  {
    point: 'Constructed an Android maze game in Java with libGDX',
    subpoints: [
      'Utilized the A* search algorithm for enemy pathfinding. Used multithreading to allow the algorithm to run separately from the rendering thread, to improve the framerate'
    ]
  }
]

export function SectionDivider() {
  return (
    <Divider style={{marginBottom: '8px', background: 'darkgrey'}}/>
  );
}
