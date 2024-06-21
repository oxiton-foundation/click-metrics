import NotFoundPic from '../../assets/404.png';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function NoFoundPage() {
    return (
        <>
            <img src={NotFoundPic} alt="404" className="w-1/2 mx-auto justify-center hover:drop-shadow-2xl duration-800" />
            <Button asChild className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto justify-center ms-auto absolute bottom-10 right-1/3 left-2/4">
              <Link to="/">Go Back</Link>
            </Button>
        </>
    );
}