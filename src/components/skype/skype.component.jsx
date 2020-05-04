import React from 'react';

const Skype = () => (
    <div className="form-style-3">
        {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div> */}
        <fieldset>
            <legend>Skype Interview</legend>
            <label for="field2">
                <span>Interviewer/s<span className="required">*</span></span>
                <input type="email" className="input-field" name="field2" value="" />
            </label>
            <label for="field1">
                <span>Skype Interview Link<span className="required">*</span></span>
                <input type="text" className="input-field" name="field1" value="" />
            </label>
            <label for="field2">
                <span> Interview Time<span className="required">*</span></span>
                <input type="email" className="input-field" name="field2" value="" />
            </label>
            <label for="field3">
                <span>Interview Date <span className="required">*</span></span>
                <input type="text" className="input-field" name="field3" value="" />
            </label>
            <label for="field4">
                <span>Profile Handler</span>
                <select name="field4" className="select-field">
                    <option value="Appointment">Ajit Satpathy</option>
                    <option value="Interview">Supraja</option>
                    <option value="Regarding a post">Vivek Kumar</option>
                    <option value="Appointment">Yash Priyam</option>
                    <option value="Interview">Kaushik Rameshbhai</option>
                    <option value="Regarding a post">Shashwat Shrivastav</option>
                </select>
            </label>
            {/* <legend>Message</legend> */}
            <label for="field6"><span>Message <span className="required">*</span></span>
            <textarea name="field6" className="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit" /></label>
        </fieldset>
    </div>
);

export default Skype;