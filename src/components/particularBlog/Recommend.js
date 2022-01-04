import React from "react";
import "./Recommend.css";
import Related from "../../assets/images/related.svg";

function Recommend() {
  return (
    <div className="rmd-main">
      <div className="rmd-topic">
        <div className="rmd-th">Related Content </div>
        <ul className="rmd-list">
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
          <li className="rmd-odd">Topic related to the content</li>
          <li className="rmd-even">Topic related to the content</li>
        </ul>
      </div>
      <div className="rmd-content">
        <div className="rmd-th"> Explore Related Content </div>
        <img src={Related} alt="related" className="rmd-img" />
        <div className="rmd-ch">Topic</div>
        <div className="rmd-cb">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
          pretium mauris, at blandit massa....more
        </div>
        <img src={Related} alt="related" className="rmd-img" />
        <div className="rmd-ch">Topic</div>
        <div className="rmd-cb">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
          pretium mauris, at blandit massa....more
        </div>
        <img src={Related} alt="related" className="rmd-img" />
        <div className="rmd-ch">Topic</div>
        <div className="rmd-cb">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
          pretium mauris, at blandit massa....more
        </div>
      </div>
    </div>
  );
}

export default Recommend;
