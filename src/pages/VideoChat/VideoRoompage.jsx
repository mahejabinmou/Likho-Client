import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const VideoRoompage = () => {
    const { roomID } = useParams()

    const myMeeting = async (element) => {
        console.log("element",element)
        const appID = 1840904011;
        const serverSecret = "fd52496b34da382d34dfe2c55f6e8673";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Bayezid")

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:5176/room/${roomID}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
        });
    };
    return (
        <div className="w-full flex justify-center mt-28 mb-20">
            <div ref={myMeeting} />
        </div>
    );
};

export default VideoRoompage;