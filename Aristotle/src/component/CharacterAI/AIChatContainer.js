import { Avatar, Fade } from "@mui/material";

const AIChatContainer = ({message,image}) => {

    return (

        <div className="tw-flex-col tw-mr-7 mx-auto">
            <Fade in={true} timeout={800} >
                <div
                    className={`tw-flex tw-w-fit tw-p-4 tw-items-center `}
                >
                    <div className="tw-mr-4">
                        <Avatar
                            src={image}
                            className="top-3 tw-mt-1"
                            style={{ backgroundColor: 'grey' }}
                        />
                    </div>
                    <div
                        className={`tw-flex tw-w-[160px] tw-h-[90px] tw-p-4 tw-mr-3 tw-rounded-xl 
                             "tw-text-left tw-bg-[#646e7f] text-black-500 tw-mr-10"
                         tw-text-white font-Roboto`}
                        style={{
                            top: "50px",
                            marginTop: "70px",
                            borderRadius: "0 20px 20px 20px",
                            height: "auto",
                            width: "auto",

                        }}
                    >
                        <p className="tw-mb-2 tw-text-quattrocento-sans">{message}</p>
                        <div
                            className={`tw-absolute  "tw-left-0" 
                             tw-top-0 tw-border-t-1 tw-border-r-4 tw-border-theme-dark-black tw-w-0 tw-h-0 tw-transform tw-translate-x-1/2 tw-translate-y-1/2`}
                            style={{
                                transform: "translate(-50%, -50%)",
                                borderRadius: "0 20px 0 0",
                            }}
                        ></div>
                    </div>
                </div>
            </Fade>
        </div>
        
    )

}

export default AIChatContainer