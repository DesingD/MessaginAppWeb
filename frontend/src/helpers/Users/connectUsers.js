export function usersConnected  () {
    const Users = [
        {
            urlImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            connect: true,
            nameUser: "Alexia Armania",
            lastMessage: {
                send: false,
                message: "Have you ever heard of Airport for de my station"
            },
            lastConnection: "18:17 PM",
            messageNotRead: 7,
        },
        {
            urlImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            connect: true,
            nameUser: "Jhon Snow",
            lastMessage: {
                send: false,
                message: "Thank you!"
            },
            lastConnection: "6:34 PM",
            messageNotRead: 1,
        },
        {
            urlImage: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            connect: false,
            nameUser: "Jennie Miles",
            lastMessage: {
                send: true,
                message: "Are you losing sales becouse"
            },
            lastConnection: "1:26 AM",
            messageNotRead: 0,
        },
    ]
    return Users
}