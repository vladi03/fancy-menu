export const styles = () => ({
    root: {
        backgroundColor: "#626166",
        color: "#fdfbff"
    },
    divider: {
        backgroundColor: "#919095",
        marginBottom: 30,
    },
    avatar: {
        margin: 10,
    },
    avatarMain: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        border: "1px solid white",

    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    menuButtonLabel: {
        marginLeft: 5,
    },
    menuButton: {
        color: "#919095",
        width: 55,
        minWidth: 0,
        paddingRight:0,
        marginBottom: 7,
        marginTop: 7,
    },
    menuButtonActive: {
        color: "#6ea625",
        backgroundColor: "#fdfbff",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#fdfbff"
        },
        width: 50,
        minWidth: 0,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingRight:0,
        marginBottom: 12,
        marginTop: 12,
    }
});