import AuthNav from "./AuthNav/AuthNav";
import UserNav from "./UserNav/UserNav";

// const navItems = [
//     { href: "/", text: "Home" },
//     { href: "movies", text: "Movies" }
// ];

export const Header = () => {
    return (
        <header>
            <UserNav />
            <AuthNav />
        </header>
    );
}