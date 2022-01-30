import React, { useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
    loginInput: {
        ...theme.typography.customInput
    }
}));

const PasswordField = (props) => {
    const { touched, value, handleBlur, handleChange, error } = props;
    const classes = styles();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl fullWidth error={Boolean(touched && error)} className={classes.loginInput}>
            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={value}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                    handleChange(e);
                    // changePassword(e.target.value);
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                inputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline
                    }
                }}
            />
            {touched && error && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                    {' '}
                    {error}{' '}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default PasswordField;
