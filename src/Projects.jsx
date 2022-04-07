import {
  ListContainer,
  ProjectList,
  SectionDivider,
  SideMargin,
} from "./Constants";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

function Projects() {
  return (
    <Box
      sx={{
        paddingLeft: SideMargin,
        paddingRight: SideMargin,
        paddingTop: "7px",
      }}
    >
      <Typography variant="h2">Software Projects</Typography>
      <SectionDivider />
      <ListContainer>
        {ProjectList.map((project, index) => {
          return (
            <Fragment key={index}>
              <li>
                <Typography>{project.point}</Typography>
              </li>
              <ListContainer>
                {project.subpoints.map((subpoint, sIndex) => {
                  return (
                    <li key={sIndex}>
                      <Typography>{subpoint}</Typography>
                    </li>
                  );
                })}
              </ListContainer>
            </Fragment>
          );
        })}
      </ListContainer>
    </Box>
  );
}

export default Projects;
