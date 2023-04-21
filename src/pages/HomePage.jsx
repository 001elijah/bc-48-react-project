import Hero from "components/Hero/Hero";
import { Outlet } from "react-router-dom";

export const HomePage = () => {

    return (
        <section>
            <Hero />
            <Outlet />
        </section>
    );
};