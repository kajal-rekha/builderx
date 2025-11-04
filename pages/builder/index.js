import Library from "./components/Library";
import Preview from "./components/Preview";

const Builder = () => {
    return (
        <div className="wrapper">
            <div className="grid grid-cols md:grid-cols-2 justify-between items-center gap-10 mt-5">
                <Library />
                <Preview />
            </div>
        </div>
    );
};

export default Builder;
