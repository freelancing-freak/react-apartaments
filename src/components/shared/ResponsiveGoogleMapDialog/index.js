import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {GoogleMapDialog, GoogleMapLocationHref, GoogleMapWrapper} from "./ResponsiveGoogleMapDialogElements";
import {Tooltip} from "@mui/material";

export default function ResponsiveGoogleMapDialog({title, location, iframeSrc}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={'Otwórz w Google Maps'} placement='right-start'>
                <GoogleMapLocationHref onClick={handleClickOpen}>
                    <i style={{fontSize: '20px'}} className="fa fa-map-marker"/>
                    <b>&nbsp;{location}</b>
                </GoogleMapLocationHref>
            </Tooltip>
            <GoogleMapDialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    <h5>{location}</h5>
                </DialogTitle>
                <GoogleMapWrapper>
                    <iframe
                        src={iframeSrc}
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{
                            border: "0",
                            left: '0',
                            top: '0',
                            height: '100%',
                            width: '100%',
                            position: 'absolute'
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </GoogleMapWrapper>
                <DialogContent>
                    <h6>{title}</h6>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Zamknij
                    </Button>
                </DialogActions>
            </GoogleMapDialog>
        </div>
    );
}
