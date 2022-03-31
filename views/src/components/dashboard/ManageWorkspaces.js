import React from 'react';

import './ManageWorkspaces.css'
import Card from '../UI/Card'

const Manageworkspaces = () => {
    return (
      <Card className="Card__manageWorkspaces flex__column">
        <h2 className="h2__title--small--grey">YOUR WORKSPACES</h2>
        <hr style={{margin:"10px 0 0 0"}}/>
        <div className="flex__column buttons__manageworkspace">
          <button>Starting a new project?</button>
          <button>Add members to project</button>
        </div>
      </Card>
    );
}

export default Manageworkspaces;
