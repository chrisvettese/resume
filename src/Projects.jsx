import {makeStyles} from "@material-ui/core/styles";
import {Divider, Typography} from "@material-ui/core";
import {ProjectList, SideMargin} from "./Constants";

const useStyles = makeStyles({
  container: {
    paddingLeft: SideMargin,
    paddingRight: SideMargin,
    paddingTop: '7px'
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

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h2'>Software Projects</Typography>
      <Divider style={{marginBottom: '8px'}}/>
      {
        ProjectList.map((project, index) => {
          return (
            <div key={index}>
              <div className={classes.pointContainer}>
                <Typography className={classes.point}>&#x2022;</Typography>
                <Typography style={{lineHeight: '1.5'}}>{project.point}</Typography>
              </div>
              {
                project.subpoints.map((subpoint, sIndex) => {
                  return (
                    <div key={sIndex} className={classes.pointContainer} style={{marginLeft: '30px'}}>
                      <Typography className={classes.point}>&#x25E6;</Typography>
                      <Typography style={{lineHeight: '1.5'}}>{subpoint}</Typography>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default Projects;
