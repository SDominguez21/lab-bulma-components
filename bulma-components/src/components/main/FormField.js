import React from "react";
import "../../App.css";
import "bulma/css/bulma.css";
import { directive } from "@babel/types";

function FormField(props) {
  return (
    <div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith" />
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default FormField;
