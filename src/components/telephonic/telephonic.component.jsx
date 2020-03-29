import React from 'react';

const Telephonic = () => (
    <div class="form-style-3">
        {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div> */}
        <fieldset>
            <legend>Telephonic Interview</legend>
            <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
            <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
            <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
            <label for="field4"><span>Subject</span>
            <select name="field4" class="select-field">
                <option value="Appointment">Appointment</option>
                <option value="Interview">Interview</option>
                <option value="Regarding a post">Regarding a post</option>
            </select></label>
            {/* <legend>Message</legend> */}
            <label for="field6"><span>Message <span class="required">*</span></span>
            <textarea name="field6" class="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
        </fieldset>
    </div>
);

export default Telephonic;