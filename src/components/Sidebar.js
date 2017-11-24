import React from "react";

const SideBar = (props) =>{

    function getSections(sections) {
      return sections.map(section => {
          return (<li key={section.id} onClick={(e) => props.selectSetion(section.id, e)} className="collection-item valign-wrapper"><i className="material-icons">radio_button_unchecked</i> {section.name}</li>);
      });
    }

      return(
          <div className="col s3">
              <ul className="collection">
                  {getSections(props.sections)}
              </ul>
          </div>
      );
};

export default SideBar;