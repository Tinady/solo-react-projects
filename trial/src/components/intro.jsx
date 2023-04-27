import React from "react";

export default function Intro(props){
    return(
        <div className={props.darkMode?"introdark":"intro"}>
          <div className="intro-description">
            <h1> Exceed your limit </h1>
            <p>Generating random paragraphs 
              can be an excellent way for writers 
              to get their creative flow going at
               the beginning of the day. The writer
                has no idea what topic the random 
                paragraph will be about when it appears. 
                This forces the writer to use creativity to
                 complete one of three common writing challenges.
                  The writer can use the paragraph as 
              the first one of a short story and build</p>

            <button>Start your free Trial </button>
          </div>


        </div>
    )
}