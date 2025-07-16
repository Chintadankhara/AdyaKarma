

const ToastMessage = ({ message, type }) => {
    const classes = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
    };

    return (
        <div className={`fixed font-semibold  top-12 right-0 mt-4 mr-4 ${classes[type]} text-white p-4 rounded-md shadow-md`}>
            <span>{message}</span>
        </div>
    )

}

export default ToastMessage;