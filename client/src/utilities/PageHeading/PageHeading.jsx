import React from "react";
import './PageHeading.css'

export default function PageHeading(props) {
  return (
    <div className="heading-container">
      <div className="page-heading">
        <span>{props.title}</span>
      </div>

      {props.subHeading ? (
        <div className="page-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className='heading-seperator'>
          <div className='seperator-line'>
              <div className='seperator-blob'>
                  <div></div>
              </div>
          </div>
      </div>
    </div>
  );
}
