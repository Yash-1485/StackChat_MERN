import { MapPinIcon } from "lucide-react";
import { Link } from "react-router";
// import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
    return (
        <div className="card bg-base-200 hover:shadow-md transition-shadow">
            <div className="card-body p-4">
                {/* USER INFO */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="avatar size-12">
                        <img src={friend.profilePic} alt={friend.fullName} />
                    </div>
                    <h3 className="font-semibold truncate">{friend.fullName}</h3>
                    {friend.location && (
                        <div className="flex items-center text-xs opacity-70 mt-1">
                            <MapPinIcon className="size-3 mr-1" />
                            {friend.location}
                        </div>
                    )}
                </div>



                {friend.bio && <p className="text-sm opacity-70">{friend.bio}</p>}

                <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
                    Message
                </Link>
            </div>
        </div>
    );
};
export default FriendCard;