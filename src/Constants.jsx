import { Divider, styled } from "@mui/material";

export const ListContainer = styled("ul")({
  margin: 0,
  paddingLeft: "1rem",
});

export const Primary = "#4360b5";
export const LightGrey = "#dedede";

export const SideMargin = "0.5in";

export const Jobs = [
  {
    title: "Software Engineer Intern",
    company: "TD Bank",
    dates: "05/2022 - 08/2022",
    points: [
      "Developed Java/Spring services to allow branches to manage millions of bank accounts",
      "Interacted with Oracle SQL Database using an ORM framework"
    ],
  },
  {
    title: "Product Development Coop",
    company: "Mitel Networks",
    dates: "05/2021 - 08/2021",
    points: [
      "Created web components for UI component library using StencilJS and TypeScript",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Thomson Reuters",
    dates: "01/2020 - 04/2020 & 09/2020 - 12/2020",
    points: [
      "Developed Java/Spring microservices with PostgreSQL databases, running on AWS EC2 instances",
      "Configured CI/CD pipelines for said microservices, and wrote Flyway database migrations",
      "Participated in the Agile development process as part of a Scrum Team",
    ],
  },
  {
    title: "Software Designer Intern",
    company: "Nokia",
    dates: "05/2019 - 08/2019",
    points: [
      "Created Bash script to automate testing of a REST API",
      "Debugged issues in Java program and designed code to correct them",
    ],
  },
];

export const ProjectList = [
  {
    point:
      "Engineering capstone project: Developed a same day shipping app based on a Kotlin/GraphQL/Spring WebFlux microservice architecture",
    subpoints: [
      "Used GraphQL Federation to fetch data from multiple services in a single query",
      "Developed JWT-based authentication system to handle various user roles in the services",
      "Designed algorithm to efficiently match delivery drivers with the closest shipment",
      "Created Postgres databases for each microservice; used Flyway for migrations",
      "Set up CI/CD pipeline to deploy services to Google Cloud Run",
      "Created React Native driver app, React merchant and admin websites",
      "Participated in sprint planning as technical lead; consulted with team to prioritize work",
    ],
  },
  {
    point:
      "Developed full stack hotel booking system, with a PostgreSQL database, Python Flask server, and React frontend",
    subpoints: [
      "Dockerized the app so it can be easily deployed with any web hosting service",
      "Utilized NginX as reverse proxy, and to serve React app",
    ],
  },
  {
    point: "Developed a home security system using Android Studio",
    subpoints: [
      "Implemented Google Cloud machine learning libraries to detect motion, and distinguish between humans and animals",
      "Used Google Firebase to manage user accounts, and to allow users to check their home status from any location",
    ],
  },
  {
    point: "Developed a multiplayer, team-based action game in Java",
    subpoints: [
      "Designed a TCP protocol to communicate between clients and the server; exchanging information such as live player positions and team scores",
    ],
  },
  {
    point: "Constructed an Android maze game in Java with libGDX",
    subpoints: [
      "Utilized the A* search algorithm for enemy pathfinding. Used multithreading to allow the algorithm to run separately from the rendering thread, to improve the framerate",
    ],
  },
];

export function SectionDivider() {
  return <Divider style={{ marginBottom: "8px", background: "darkgrey" }} />;
}
