import Image from "next/image";

export default function NavBar() {
    return (
        <header>
            <div id="nav">
                <div id="nav1">
                    {/* logo */}
                    <Image src="/download (4).jpg" alt="logo" width={100} height={100}></Image>
                </div>
                <div id="nav2">
                    <p>Tuition Free Education Program On Latest Technologies</p>
                </div>
                <div id="nav3">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#result">Result</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </header>
    )
}