import { useState } from 'react';
import PropTypes from 'prop-types';
export default function AddFieldForm( props) {
  // initialize the form fields state
  const [fields, setFields] = useState([{ value: '' }]);

  // additiing a new field
  const addField = () => {
    setFields([...fields, { value: '' }]);
  };

  // removaling a field
  const removeField = (index) => {
    if (fields.length != 1 || props.fieldName ==="Member") {
      const newFields = fields.filter((field, i) => i !== index);
      setFields(newFields);
    }
  };

  // Handle input change for dynamic fields
  const handleInputChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };


  return (
      <div>
        {fields.map((field, index) => (
          <div key={index} className=" mt-1 shadow-md">
            <label className="block  italic text-sm" htmlFor={`field-${index}`}>
              {props.fieldName} {index + 1}:
            </label>
            <div className="flex items-center">
              <input
                name={`${props.fieldName}${index}`}
                id={`field-${index}`}
                type="text"
                value={field.value}
                onChange={(event) => handleInputChange(index, event)}
                className="mt-1 mb-2 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-logoColor w-full"
                placeholder={`Enter ${props.fieldName} ${index + 1} Name... `}
              />
              <button
                type="button"
                onClick={() => removeField(index)}
                className="mx-2 px-3 py-2 rounded-lg font-bold bg-logoColor text-tertiary hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button
          // style={{:"50%"}}
          type="button"
          onClick={addField}
          className="mt-2 mb-4 font-bold ml-13  text-tertiary hover:bg-secondary px-4 py-2 bg-logoColor rounded-lg"
        >
          Add {props.fieldName}
        </button>
      </div>

  )
}
AddFieldForm.propTypes = {
  fieldName: PropTypes.string.isRequired,
};