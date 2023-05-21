import { Box, MenuItem, TextField } from "@mui/material";

import "./TextField.css";

const TextFieldV2 = (props) => {
  const {
    label,
    hiddenLabel,
    variant,
    color,
    size,
    fullWidth,
    margin,
    type,
    name,
    id,
    value,
    onChange,
    select,
    onBlur,
    onFocus,
    disabled,
    required,
    error,
    helperText,
    InputLabelProps,
    InputProps,
    FormHelperTextProps,
    FormLabelProps,
    dropdownValues,
    ...otherProps
  } = props;

  return (
    <TextField
      label={label}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      margin={margin}
      type={type}
      name={name}
      id={id}
      select={select}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      required={required}
      error={error}
      helperText={helperText}
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      FormHelperTextProps={FormHelperTextProps}
      FormLabelProps={FormLabelProps}
      {...otherProps}
      className="textfield-v2"
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "white",
          height: "56px",
          borderRadius: "12px",
          fontFamily: "Poppins-Medium !important",
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Poppins-Regular !important",
        },
        "& .MuiFilledInput-root:hover": {
          backgroundColor: "white",
        },
        "& .Mui-focused": {
          backgroundColor: "white !important",
        },
        "& .MuiInputBase-input": {
          paddingTop: hiddenLabel ? "8px" : "22px",
          paddingLeft: "12px",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: "Poppins-Medium !important",
        },
        "& .MuiFilledInput-root:before": {
          borderBottom: "none !important",
        },
        "& .MuiFilledInput-root:after": {
          borderBottom: "none !important",
        },
        "& .MuiFormHelperText-root": {
          position: "absolute",
          bottom: "-24px",
          fontFamily: "Poppins-Regular !important",
          whiteSpace: "nowrap",
          color: "#303038",
        },
        "& .MuiInputLabel-root": {
          display: hiddenLabel ? "none !important" : "block",
        },

        "& input[type=number]": {
          "-moz-appearance": "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      }}
    >
      {select ? (
        dropdownValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      ) : (
        <></>
      )}
    </TextField>
  );
};

export default TextFieldV2;
