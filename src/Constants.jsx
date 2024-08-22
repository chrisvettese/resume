import { Divider, styled } from "@mui/material";

export const ListContainer = styled('ul')({
  margin: 0,
  paddingLeft: "1rem",
});

export const ListPoint = styled('li')({
  fontSize: "15px",
  lineHeight: 0
})

export const Primary = "#4360b5";
export const LightGrey = "#dedede";

export const SideMargin = "0.5in";

export const Jobs = [
  {
    title: "Software Development Engineer",
    company: "Amazon",
    dates: "02/2023 - present",
    points: [
      "Created, tuned, and debugged Apache Spark jobs running on AWS EMR for measuring ad traffic",
      "Led end-to-end development of system to measure traffic and conversions of scans of QR codes burnt into video ad creatives",
      "Designed system to enable attribution of bidless ad traffic by reusing DMA-mitigation infrastructure with similar limitations",
      "Scaled up systems for large events such as Amazon Prime Day as part of team on-call and operations",
      "Performed migration and rewrite of Spark 2 apps to new orchestration system based on Spark 3",
      "Conducted data investigations into traffic reporting discrepancies raised by advertisers and determined appropriate resolutions",
      "Improved test coverage of Spark apps via unit and integration tests, reducing risk of service outages"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "TD Bank",
    dates: "05/2022 - 12/2022",
    points: [
      "Developed Java/Spring middleware with a React frontend to allow branches to manage printing new credit and debit cards for customers",
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
  }
];

export function SectionDivider() {
  return <Divider style={{ marginBottom: "8px", background: "darkgrey" }} />;
}
