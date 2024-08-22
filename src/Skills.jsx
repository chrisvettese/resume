import { SideMargin, SectionDivider, ListContainer, ListPoint } from "./Constants";
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
        <ListPoint>
          <Typography>
            Languages: Java, Scala, Kotlin, TypeScript, JavaScript, Python, SQL,
            Postgres
          </Typography>
        </ListPoint>
        <ListPoint>
          <Typography>
            Libraries: Apache Spark, Spring Framework (Web MVC, WebFlux), Hibernate, Flask,
            Node.js, Express.js, Apollo Server/Client, React
          </Typography>
        </ListPoint>
        <ListPoint>
          <Typography>
            Tools: AWS (EC2, EMR, DynamoDB, ECS, S3, CloudFormation), GCP (Cloud Run, Cloud Storage), Docker,
            GraphQL Federation, REST, Git
          </Typography>
        </ListPoint>
      </ListContainer>
    </Box>
  );
}

export default Skills;
