import {makeStyles} from "@material-ui/core/styles";
import {SideMargin, LightGrey, SkillList, SectionDivider} from "./Constants";
import {Box, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    paddingLeft: SideMargin,
    paddingRight: SideMargin,
    paddingTop: '17px'
  },
  skill: {
    background: LightGrey,
    borderRadius: '3px',
    margin: '4px',
    padding: '5px'
  }
});

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant='h2'>Skills</Typography>
      <SectionDivider/>
      <Box component="div" display="flex" style={{flexWrap: 'wrap'}}>
        {
          SkillList.map((skill, index) => {
            return <Typography key={index} className={classes.skill}>{skill}</Typography>
          })
        }
      </Box>
    </div>
  );
}

export default Skills;
