import React from 'react';

const styles = {
    labelStyle: {
        color: "#fff"
    }
}

const FormTextInput = ({
                    type,
                    id,
                    label,
                    onChange,
                    value,
                    disabled,
                    name,
                    minLength,
                    maxLength,
                    placeholder,
                    helpText
                }) => {
    return (
        <div className="form-group">
            <label style={styles.labelStyle} htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                name={name}
                disabled={disabled}
                onChange={onChange}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                aria-describedby={type+"Help"}
                placeholder={placeholder}
            />
            <small id="emailHelp" className="form-text text-muted">{helpText}</small>
          </div>
    )

}

export {FormTextInput}
