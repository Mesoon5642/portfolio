import { Outlet, Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Ball from "../components/Ball"; // adjust path if needed

export default function Layout() {
    return(
<div className="relative h-full">
    <div className="hidden">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap" rel="stylesheet" />
    </div>

    {/* Navigation Bar with Canvas Background */}
    <div className="flex text-white items-center justify-around relative h-[5rem] bg-purple-950">
        {/* Links content */}
        <Link className="transition-transform duration-300 hover:scale-125 m-0 text-3xl" to="/"><h1>Home</h1></Link>
        <Link className="transition-transform duration-300 hover:scale-125 m-0 text-3xl" to="/portfolio"><h1>Portfolio</h1></Link>
        <div>
            <Canvas
                style={{ width: '200px', height: '200%' }}
                className="fixed top-10 rounded-full bg-purple-950 left-auto inset-0 z-10 pointer-events-none"
                camera={{ position: [0, 0, 1.5], fov: 100 }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} />
                <Ball />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
        <Link className="transition-transform duration-300 hover:scale-125 m-0 text-3xl" to="/about"><h1>About Me</h1></Link>
        <Link className="transition-transform duration-300 hover:scale-125 m-0 text-3xl" to="/thangs"><h1>Web Thingies</h1></Link>
    </div>

    {/* Main Content */}
    <div className="h-full">
        <Outlet />
    </div>
</div>

    )
}