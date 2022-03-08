import React from "react";
import propTypes from "prop-types";

const BmiForm = (props) => {

    const{
        title,
        type,
        name,
        value,
        onChange
    } = props

    return (
        <div className="row mb-2">
            <div className="col-6">
                <label htmlFor="">{title}</label>
            </div>
            <div className="col-6">
                <input type={type} name={name} value={value} className="form-control form-control-sm" onChange={onChange} />
            </div>
        </div>
    );
};

BmiForm.propTypes = {
    title: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func.isRequired,
    type: propTypes.oneOf(['text','number'])
}

export default BmiForm;
