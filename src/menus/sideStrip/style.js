
export const styles = (theme ) => ({
    userLabel: {
        marginTop: -20,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
    },
    menuBase: {
        backgroundColor: "#626166",
        color: "#fdfbff",
        minWidth : 63
    },
    menuCollapse: {
        width : 63,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuExpand: {
        width: 150,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
        marginLeft: "auto",
        marginRight: "auto",
        border: "1px solid white",

    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    menuButtonLabel: {
        marginLeft: 5,
        width: 100
    },
    menuButton: {
        color: "#cfcdd1",
        width: "90%",
        minWidth: 0,
        paddingRight:0,
        marginBottom: 7,
        marginTop: 7,
        textAlign: "left"
    },
    menuButtonActive: {
        color: "#6ea625",
        backgroundColor: "#fdfbff",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#fdfbff"
        },
        width: "90%",
        minWidth: 0,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingRight:0,
        marginBottom: 12,
        marginTop: 12,
        textAlign: "left"
    }
});