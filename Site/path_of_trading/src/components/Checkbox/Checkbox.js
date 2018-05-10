import React from 'react';
import s from './Checkbox.css';

function Checkbox(props) {
    return (
        <div class="container">
          <div class="control-group">
            <label class="control control--checkbox">
              <input
                type="checkbox"
              />
              <div class="control__indicator">
              </div>
            </label>
          </div>
        </div>
    );
}

export default(Checkbox);
