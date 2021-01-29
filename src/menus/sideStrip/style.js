
const menuExpandWidth = 150;

export const styles = (theme ) => {
    return ({
        menuSecond: {
            minWidth: menuExpandWidth,
            marginLeft: menuExpandWidth
        },
        userLabel: {
            marginTop: -20,
            marginBottom: 10,
            marginLeft: "auto",
            marginRight: "auto",
        },
        menuBase: {
            backgroundColor: "#626166",
            color: "#fdfbff",
            minWidth: 63,
            overflow: "hidden",
        },
        closeButton: {
            color: "#cfcdd1",
            margin: 0,
            position: "absolute",
            right: 0
        },
        menuCollapse: {
            width: 63,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuExpand: {
            width: menuExpandWidth,
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
        menuButtonExpandMobile: {
            position: "fixed",
            top:0,
            zIndex: 999
        },
        menuButtonLabel: {
            marginLeft: 5,
            width: 100
        },
        menuButtonShape: {
            minWidth: 0,
            width: "92%",
            paddingRight: 0,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            textAlign: "left"
        },
        menuButton: {
            color: "#cfcdd1",
            marginBottom: 7,
            marginTop: 7,
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "#838285"
            },
        },
        menuButtonActive: {
            color: "#6ea625",
            backgroundColor: "#fdfbff",
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "#fdfbff"
            },
            marginBottom: 12,
            marginTop: 12
        },
        littleRightBorder : {
            //backgroundColor: "beige",
            width: 150,
            height: "calc(100% - 10px)",
            position: "absolute"
        }
    });
};