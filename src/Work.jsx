import { Jobs, ListContainer, SectionDivider, SideMargin } from "./Constants";
import { Box, Typography } from "@mui/material";

function Work() {
  return (
    <Box
      sx={{
        paddingLeft: SideMargin,
        paddingRight: SideMargin,
        paddingTop: "17px",
      }}
    >
      <Typography variant="h2">Work Experience</Typography>
      <SectionDivider />
      {Jobs.map((job, index) => {
        return (
          <Box
            key={index}
            sx={{
              marginBottom: "10px",
              marginTop: "3px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: 1 / 3 }}>
                <Typography variant="h3">{job.title}</Typography>
              </Box>
              <Box
                sx={{ width: 1 / 3, display: "flex", justifyContent: "center" }}
              >
                <Typography variant="h4">{job.company}</Typography>
              </Box>
              <Box
                sx={{ width: 1 / 3, display: "flex", justifyContent: "right" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>{job.dates}</Typography>
              </Box>
            </Box>
            <ListContainer>
              {job.points.map((point, pIndex) => {
                return (
                  <li key={pIndex}>
                    <Typography>{point}</Typography>
                  </li>
                );
              })}
            </ListContainer>
          </Box>
        );
      })}
    </Box>
  );
}

export default Work;
