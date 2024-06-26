import { useState } from "react"
import PropTypes from 'prop-types';

export default function UploadElement( props) {
  const [element, setElement] = useState("");

  let handleElement = (e) => {
    console.log(e.target.files)
    setElement(e.target.files[0]);

    // const formData = new FormData();: This creates a new instance of FormData, which is an object used to compile a set of key/value pairs to send via XMLHttpRequest or fetch API. It is often used for uploading files along with other data.
    //formData.append('image', element);: This method appends a new value to an existing key inside a FormData object, or adds the key if it does not already exist. Here, 'image' is the key, and element (presumably the image file) is the value.
    const formData = new FormData();
    formData.append(props.type, element)
  }
  
  return (
    <div>
      <input id='upload' className="hidden" type="file" name="file"/>
      <label htmlFor='upload' className="inline-block cursor-pointer font-bold hover:bg-card  bg-primary px-6 text-tertiary py-2 rounded-lg" onChange={handleElement}>{ props.text }</label>
    </div>
  )
}

UploadElement.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};