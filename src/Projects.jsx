import {
  ListContainer,
  ProjectList,
  SectionDivider,
  SideMargin,
  ListPoint
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
              <ListPoint>
                <Typography>{project.point}</Typography>
              </ListPoint>
              <ListContainer>
                {project.subpoints.map((subpoint, sIndex) => {
                  return (
                    <ListPoint key={sIndex}>
                      <Typography>{subpoint}</Typography>
                    </ListPoint>
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
