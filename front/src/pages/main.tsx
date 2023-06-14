import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "../components/NavBar";
import {TextForm} from "../components/FormForAlgo";
import {MyCarousel} from "../components/Carousel";

export function MainPage() {
    return (
        <div>
            <NavigationBar />
            <MyCarousel />
            <TextForm />
        </div>
    );
}