import React from 'react';

import './MembersList.css'
import Card from "../UI/Card";

const Memberslist = () => {
    return (
      <Card className="Card__membersList flex__column">
        <h2 className="h2__title">Members</h2>
        <hr style={{ margin: "10px 0" }} />
        <ul id="memberList" className='flex__column'>
          <p>Michael Klein</p>
        </ul>
      </Card>
    );
}

export default Memberslist;
