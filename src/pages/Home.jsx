import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import React from 'react';

function Home() {
    return (
        <div>
            {/*add veggie and popular. Rendering the components in the home page*/}
            <Veggie />
            <Popular />
        </div>
    );
}

export default Home;

// where we add the components, eg latest trends, popular, sneakers, etc.