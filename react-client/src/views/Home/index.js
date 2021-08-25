import React from "react";
import { SideBar, Feed, RightSideBar } from "../../layout";


const Home = () => {

    return (
        <>
            <main className="main-layout">
                <SideBar />
                <Feed />
                <RightSideBar />
            </main>
        </>
    );
}

export default Home;
