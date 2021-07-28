import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {Jobs, SectionDivider, SideMargin} from "./Constants";

const useStyles = makeStyles({
  container: {
    paddingLeft: SideMargin,
    paddingRight: SideMargin,
    paddingTop: '17px'
  },
  jobInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  jobContainer: {
    marginBottom: '10px',
    marginTop: '3px'
  },
  point: {
    fontSize: '30px',
    lineHeight: '0.6',
    marginRight: '10px'
  },
  pointContainer: {
    display: 'flex'
  }
});

function Work() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h2'>Work Experience</Typography>
      <SectionDivider/>
      {
        Jobs.map((job, index) => {
          return (
            <div key={index} className={classes.jobContainer}>
              <div className={classes.jobInfo}>
                <Typography variant='h3'>{job.title}</Typography>
                <Typography style={{fontWeight: 'bold'}}>{job.dates}</Typography>
              </div>
              <Typography variant='h4'>{job.company}</Typography>
              {
                job.points.map((point, pIndex) => {
                    return (
                      <div key={pIndex} className={classes.pointContainer}>
                        <Typography className={classes.point}>&#x2022;</Typography>
                        <Typography style={{lineHeight: '1.5'}}>{point}</Typography>
                      </div>
                    )
                  }
                )
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default Work;
