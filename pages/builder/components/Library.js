import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Library = () => {
    return (
        <div className="border p-3 min-h-screen">
            <h2 className="">Components</h2>
            <div className="flex flex-col gap-5">
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    );
};

export default Library;
