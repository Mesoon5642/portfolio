export default function Home() {
    return (
      <div className="bg-violet-200 min-h-screen absolute w-full">
        <div className="flex">
            <div className="w-[50vh] h-[50vh] flex-shrink-0 ml-20 mt-20 rounded-full border-4 border-violet-950 overflow-hidden">
            <img
                className="w-full h-full object-cover object-[center_-10px]"
                src="/portfolio/Mason-139.jpg"
                alt="Self portrait"
            />
            </div>
            <div className="w-full text-center bg-violet-400 border-4 border-violet-950 p-5 m-10 mt-40">
                <p className="text-black">This personal website is under development. Keep watching for more cool stuff!</p>
            </div>
        </div>
      </div>
    );
  }