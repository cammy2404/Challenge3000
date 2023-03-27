import * as React from 'react';
import './Common.css';
import Who from './Content/Who'
import What from './Content/What';
import When from './Content/When';
import Why from './Content/Why';
import DonateNow from './DonateNow';

function Content() {

  const style = {
      backgroundColor: "#f0f0f0",
      paddingLeft: '15%', 
      paddingRight: '15%'
  }

  return (
    <>
      <div style={style}>
        {/* <DonateNow /> */}
        <Who />
        <What />
        <When />
        <Why />
      </div>
    </>
  )
  
}
  
export default Content;