import { ChevronLeftRegular, ChevronRightRegular } from "@/assets/icons";

const ScrollButton = ({ onScroll }) => {
    return (
        <div
            className="d-flex align-items-center mt-5"
            style={{ cursor: "pointer" }}
        >
            <ChevronLeftRegular fontSize={20} onClick={() => onScroll(-50)} />
            <ChevronRightRegular fontSize={20} onClick={() => onScroll(50)} />
        </div>
    );
};

export { ScrollButton }