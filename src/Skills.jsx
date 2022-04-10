import { SideMargin, SectionDivider, ListContainer } from "./Constants";
import { Box, Typography } from "@mui/material";

function Skills() {
  return (
    <Box
      sx={{
        paddingLeft: SideMargin,
        paddingRight: SideMargin,
        paddingTop: "17px",
      }}
    >
      <Typography variant="h2">Skills</Typography>
      <SectionDivider />
      <ListContainer>
        <li>
          <Typography>
            Languages: Java, Kotlin, TypeScript, JavaScript, Python, SQL,
            Postgres
          </Typography>
        </li>
        <li>
          <Typography>
            Libraries: Spring Framework (Web MVC, WebFlux), Hibernate, Flask,
            Node.js, Express.js, Apollo Server/Client, React
          </Typography>
        </li>
        <li>
          <Typography>
            Tools: GCP (Cloud Run, Cloud Storage), AWS (EC2, RDS), Docker,
            GraphQL Federation, REST, Git
          </Typography>
        </li>
      </ListContainer>
    </Box>
  );
}

export default Skills;
