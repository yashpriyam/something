import React from 'react';

const InPerson = () => (
    <div classname="form-style-3">
        {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div> */}
        <fieldset>
            <legend>Face to Face Interview</legend>
            <label for="field1"><span>Interviewer/s <span classname="required">*</span></span><input type="text" classname="input-field" name="field1" value="" /></label>
            <label for="field2"><span>Date <span classname="required">*</span></span><input type="email" classname="input-field" name="field2" value="" /></label>
            <label for="field3"><span>Time <span classname="required">*</span></span><input type="text" classname="input-field" name="field3" value="" /></label>
            <label for="field3"><span>Venue <span classname="required">*</span></span><input type="text" classname="input-field" name="field3" value="" /></label>
            {/* <legend>Message</legend> */}
            <label for="field6"><span>Message <span classname="required">*</span></span>
            <textarea name="field6" classname="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
        </fieldset>
    </div>
);

export default InPerson;