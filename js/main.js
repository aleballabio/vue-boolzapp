const app = new Vue({
    el: '#root',
    data: {
        searchingProfile: "",
        activeChat: 0,
        activeProfile:
        {
            nome: "Alessandro",
            image: "avatar_io.jpg",
            textMessage: "",
            time: "",
        },

        chats: [
            {
                nome: "Mario",
                image: "avatar_1.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Genoveffa",
                image: "avatar_2.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Michelina B.",
                image: "avatar_3.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Benedetta",
                image: "avatar_4.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Susan",
                image: "avatar_5.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Carletto T.",
                image: "avatar_6.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Portina",
                image: "avatar_7.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "",
                        time: "12:25",
                        received: true,
                    },
                ]
            },

            {
                nome: "Yang J.",
                image: "avatar_8.jpg",
                lastMessage: "",
                lastAccess: "",
                messages: [
                    {
                        text: "",
                        time: "12:25",
                        received: true,
                    },
                ]
            },
        ]
    },

    methods: {
        changeCurrentChat(number) {
            this.activeChat = number;
            console.log(this.activeChat);
        },

        sendMessage(currentChat) {
            this.chats[currentChat].messages.push({
                text: this.activeProfile.textMessage,
                date: "",
                received: false,
            });
            this.activeProfile.textMessage = "";
            console.log(currentChat);
            console.log(this.chats[currentChat].messages);
        },
    }
});