import React from "react";

import "./Widgets.scss"

import { search } from '../../../assets/icons'

const Widgets = () => {
  return (
    <div className="widgets">
        <div className="container">
            <div className="widgets-inner">
                <div className="widgets__input">
                    <label>{search}</label>
                    <input placeholder="Search Twitter" type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Widgets);