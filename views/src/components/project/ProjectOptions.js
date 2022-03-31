import React from 'react';

import './ProjectOptions.css'
import Card from '../UI/Card'

const Projectoptions = () => {
    return <Card className="Card__projectOptions flex__column space_around">
        <h3 className='h3__title--bold'>Don't see someone?</h3>
        <button id="inviteButton">Invite a member</button>
        <h3 className="h3__title--bold">Added by mistake?</h3>
        <button id="removeButton">Leave Project</button>
    </Card>;
}

export default Projectoptions;
