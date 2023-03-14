import React, { useState } from "react";

import {FaPlusCircle,FaMinusCircle} from "react-icons/fa"

function Question({title,info}) {
    const [showPlus,setShowPlus] = useState(false)
  return (
    <div className="question">
      <article className="article">
          <header className="header">
            <h5>{title}</h5>
            <button className="button" onClick={() => setShowPlus(!showPlus)}>
                {
                    showPlus ? <FaMinusCircle /> : <FaPlusCircle/>
                }
            </button>
          </header>
          <p>
            {
                showPlus && info

            }
            </p>
        </article>
    </div>
  );
}

export default Question;
