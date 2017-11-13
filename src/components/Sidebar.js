import React from "react";

const SideBar = (props) =>{

    function getSections(sections) {
      return sections.map(section => {
          // return (<li key={section.id} onClick={onSectionSelected} className="collection-item">{section.name}</li>);
          return (<li key={section.id} onClick={onSectionSelected(null,section.id)} className="collection-item">{section.name}</li>);
      });
    }
    
    function onSectionSelected(e, id) {
        // e.preventDefault();
        console.log(id);
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