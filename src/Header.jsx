import { SideMargin, LightGrey, Primary } from "./Constants";
import { Box, Grid, Link, SvgIcon, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "@emotion/styled";

const HeaderLink = styled(Link)({
  textDecoration: "none",
  color: "rgb(67, 96, 181)",
  marginLeft: "0.25rem",
});

function Header() {
  return (
    <Box
      sx={{
        height: "140px",
        background: LightGrey,
      }}
    >
      <Typography variant="h1" align="center" style={{ paddingTop: "0.3in" }}>
        Chris Vettese
      </Typography>
      <Grid container style={{ paddingLeft: SideMargin, marginTop: "-10px" }}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SchoolIcon
              sx={{
                color: Primary,
                width: "15px",
                height: "15px",
              }}
            />
            <Typography sx={{ ml: 0.5 }}>
              BASc in Software Engineering
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccountBalanceIcon
              sx={{
                color: Primary,
                width: "15px",
                height: "15px",
              }}
            />
            <Typography sx={{ ml: 0.5 }}>University of Ottawa</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SvgIcon
              sx={{
                color: Primary,
                width: "15px",
                height: "15px",
              }}
            >
              <path d="M12 0l2.139 2.629 3.068-1.441.786 3.297 3.389.033-.722 3.312 3.039 1.5-2.088 2.67 2.088 2.67-3.039 1.5.722 3.312-3.389.033-.786 3.297-3.068-1.441-2.139 2.629-2.139-2.629-3.068 1.441-.786-3.297-3.389-.033.722-3.312-3.039-1.5 2.088-2.67-2.088-2.67 3.039-1.5-.722-3.312 3.389-.033.786-3.297 3.068 1.441z" />
            </SvgIcon>
            <Typography sx={{ ml: 0.5 }}>
              Dean's Honour List, 2018 - 2022
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon
              sx={{
                color: Primary,
                width: "15px",
                height: "15px",
              }}
            />
            <Typography sx={{ ml: 0.5 }}>Toronto, ON, Canada</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ ml: "140px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LanguageIcon
                sx={{
                  color: Primary,
                  width: "15px",
                  height: "15px",
                }}
              />
              <Typography>
                <HeaderLink
                  href="https://chrisvettese.github.io/"
                  target="_blank"
                >
                  chrisvettese.github.io
                </HeaderLink>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon
                sx={{
                  color: Primary,
                  width: "15px",
                  height: "15px",
                }}
              />
              <Typography>
                <HeaderLink
                  href="https://www.linkedin.com/in/christopher-vettese/"
                  target="_blank"
                >
                  linkedin.com/in/christopher-vettese/
                </HeaderLink>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PhoneIcon
                sx={{
                  color: Primary,
                  width: "15px",
                  height: "15px",
                }}
              />
              <Typography sx={{ ml: 0.5 }}>(416) 700-7221</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <EmailIcon
                sx={{
                  color: Primary,
                  width: "15px",
                  height: "15px",
                }}
              />
              <Typography>
                <HeaderLink
                  href="mailto: chris.vettese2@gmail.com"
                  target="_blank"
                >
                  chris.vettese2@gmail.com
                </HeaderLink>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
