import React from 'react';

const InPerson = () => (
    <div class="form-style-3">
        {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div> */}
        <fieldset>
            <legend>Face to Face Interview</legend>
            <label for="field1"><span>Interviewer/s <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
            <label for="field2"><span>Date <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
            <label for="field3"><span>Time <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
            <label for="field3"><span>Venue <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
            {/* <legend>Message</legend> */}
            <label for="field6"><span>Message <span class="required">*</span></span>
            <textarea name="field6" class="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
        </fieldset>
    </div>
);

export default InPerson;