import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, SvgIcon, Typography} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {SideMargin, LightGrey, Primary} from "./Constants";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles({
  header: {
    height: '140px',
    background: LightGrey
  },
  iconText: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    color: Primary,
    width: '15px',
    height: '15px'
  }
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant='h1' align='center' style={{paddingTop: '0.3in'}}>Chris Vettese</Typography>
      <Grid container style={{paddingLeft: SideMargin, marginTop: '-10px'}}>
        <Grid item xs={6}>
          <div className={classes.iconText}>
            <SchoolIcon className={classes.icon}/>
            <Typography>&nbsp;BASc in Software Engineering, 3rd Year</Typography>
          </div>
          <div className={classes.iconText}>
            <AccountBalanceIcon className={classes.icon}/>
            <Typography>&nbsp;University of Ottawa</Typography>
          </div>
          <div className={classes.iconText}>
            <SvgIcon className={classes.icon}>
              <path d="M12 0l2.139 2.629 3.068-1.441.786 3.297 3.389.033-.722 3.312 3.039 1.5-2.088 2.67 2.088 2.67-3.039 1.5.722 3.312-3.389.033-.786 3.297-3.068-1.441-2.139 2.629-2.139-2.629-3.068 1.441-.786-3.297-3.389-.033.722-3.312-3.039-1.5 2.088-2.67-2.088-2.67 3.039-1.5-.722-3.312 3.389-.033.786-3.297 3.068 1.441z"/>
            </SvgIcon>
            <Typography>&nbsp;Member of the Dean's Honour List</Typography>
          </div>
          <div className={classes.iconText}>
            <LocationOnIcon className={classes.icon}/>
            <Typography>&nbsp;Ottawa, ON, Canada</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{marginLeft: '140px'}}>
            <div className={classes.iconText}>
              <LanguageIcon className={classes.icon}/>
              <Typography>
                <Link href="https://chrisvettese.github.io/" target="_blank">
                  &nbsp;chrisvettese.github.io
                </Link>
              </Typography>
            </div>
            <div className={classes.iconText}>
              <LinkedInIcon className={classes.icon}/>
              <Typography>
                <Link href="https://www.linkedin.com/in/christopher-vettese/" target="_blank">
                  &nbsp;linkedin.com/in/christopher-vettese/
                </Link>
              </Typography>
            </div>
            <div className={classes.iconText}>
              <PhoneIcon className={classes.icon}/>
              <Typography>&nbsp;(416) 700-7221</Typography>
            </div>
            <div className={classes.iconText}>
              <EmailIcon className={classes.icon}/>
              <Typography>
                <Link href="mailto: cvett018@uottawa.ca" target="_blank">
                  &nbsp;cvett018@uottawa.ca
                </Link>
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
