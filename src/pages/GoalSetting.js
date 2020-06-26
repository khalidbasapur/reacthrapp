import React from 'react';
import { Box, Button, Divider, makeStyles, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, TextField, Grid, withStyles, TextareaAutosize, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize : theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightRegular
    },
    panelHeader: {
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white'
    },
    formWrapper: {
        display: 'flex', 
        width:'100%', 
        alignItems:'stretch', 
        flexDirection: 'column'
    }
}));

const GlobalCss = withStyles({
    '@global': {
        '.MuiExpansionPanel-root.Mui-expanded': {
            margin: 0,            
        },
    },
})(() => null);

const GoalSetting = () => {
    const classes = useStyles();
    const fields = [
        {id: 1, required: true, label: 'Field x1', fieldType: 'Date', empAccess: 'RWH', mgrAccess: 'RWH', adminAccess: 'RW'},
        {id: 2, required: false, label: 'Field x2', fieldType: 'Text Field', empAccess: 'RWH', mgrAccess: 'RWH', adminAccess: 'RW'},
        {id: 3, required: true, label: 'Field x3', fieldType: 'LOV', empAccess: 'RWH', mgrAccess: 'RWH', adminAccess: 'RW'},
        {id: 4, required: false, label: 'Field x4', fieldType: 'Text Area', empAccess: 'RWH', mgrAccess: 'RWH', adminAccess: 'RW'},
        {id: 5, required: true, label: 'Field x5', fieldType: 'Checkbox', empAccess: 'RWH', mgrAccess: 'RWH', adminAccess: 'RW'}
    ]
    return (
        <>
            <Box display="flex" alignItems="center" flexDirection="row" className="button-container">
                <Box flexGrow={1}>
                </Box> 
                <Box>
                    <Button size="small" variant="contained" color="primary">Save</Button>
                </Box>
                <Box>
                    <Button size="small" variant="contained" color="primary">Save As</Button>
                </Box>
                <Box>
                    <Button size="small" variant="contained" color="primary">Cancel</Button>
                </Box>
            </Box>
            <Divider />
            <div className={classes.root}>
                <GlobalCss/>
                <ExpansionPanel style={{borderBottom: '1px solid white'}}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        aria-controls="goal-setting-content"
                        id="goal-setting-header"
                        className={classes.panelHeader}
                    >
                        <Typography className={classes.heading}>Goal Basic Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.formWrapper}>
                            <form noValidate autoComplete="off">
                                    <Grid container direction="row" spacing={3}>
                                        <Grid item sm={4}>
                                            <TextField label="Name" style={{display: 'flex'}}></TextField>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextField label="Start Date" 
                                                style={{display: 'flex'}} 
                                                id="start-date"
                                                type="date"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            >
                                            </TextField>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextField label="End Date" 
                                                style={{display: 'flex'}} 
                                                id="end-date"
                                                type="date"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            >
                                            </TextField>
                                        </Grid>
                                        <Grid item sm={12}>
                                                <TextareaAutosize
                                                    style={{width: '100%'}}
                                                    rowsMin={4}
                                                    rowsMax={4}
                                                    placeholder="Instructions"
                                                />
                                        </Grid>
                                    </Grid>
                            </form>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}
                        aria-controls="goal-setting-content-1"
                        id="goal-setting-header-1"
                        className={classes.panelHeader}
                    >
                        <Typography className={classes.heading}>Manage Fields</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.formWrapper}>
                            <form noValidate autoComplete="off">
                                <Grid container direction="row" spacing={3}>
                                    <Grid item sm={12}>
                                        <Box display="flex" alignItems="center" flexDirection="row" className="button-container">
                                            <Box flexGrow={1}>
                                            </Box> 
                                            <Box>
                                                <Button size="small" variant="contained" color="primary">Add Fields</Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <TableContainer component={Paper} style={{width: '100%'}}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Field Id</TableCell>
                                                        <TableCell>Label</TableCell>
                                                        <TableCell>Required</TableCell>
                                                        <TableCell>Field Type</TableCell>
                                                        <TableCell>Employee Access</TableCell>
                                                        <TableCell>Manager Access</TableCell>
                                                        <TableCell>Admin Access</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    { fields.map((field, key) => (
                                                        <TableRow key={key}>
                                                            <TableCell>{field.id}</TableCell>
                                                            <TableCell>{field.label}</TableCell>
                                                            <TableCell>{field.required ? 'Y' : 'N'}</TableCell>
                                                            <TableCell>{field.fieldType}</TableCell>
                                                            <TableCell>{field.empAccess}</TableCell>
                                                            <TableCell>{field.mgrAccess}</TableCell>
                                                            <TableCell>{field.adminAccess}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

                                </Grid>
                            </form>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        
        </>
    )
};

export default GoalSetting;