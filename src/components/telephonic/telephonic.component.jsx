import React from 'react';

const Telephonic = () => (
    <div classname="form-style-3">
        {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div> */}
        <fieldset>
            <legend>Telephonic Interview</legend>
            <label for="field1"><span>Name <span classname="required">*</span></span><input type="text" classname="input-field" name="field1" value="" /></label>
            <label for="field2"><span>Email <span classname="required">*</span></span><input type="email" classname="input-field" name="field2" value="" /></label>
            <label for="field3"><span>Phone <span classname="required">*</span></span><input type="text" classname="input-field" name="field3" value="" /></label>
            <label for="field4"><span>Subject</span>
            <select name="field4" classname="select-field">
                <option value="Appointment">Appointment</option>
                <option value="Interview">Interview</option>
                <option value="Regarding a post">Regarding a post</option>
            </select></label>
            {/* <legend>Message</legend> */}
            <label for="field6"><span>Message <span classname="required">*</span></span>
            <textarea name="field6" classname="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
        </fieldset>
    </div>
);

export default Telephonic;