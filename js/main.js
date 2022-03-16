const app = new Vue({
    el: '#root',
    data: {
        searchingProfile: "",
        activeProfile:
        {
            nome: "Alessandro",
            image: "avatar_io.jpg",
            textMessage: "",
            activeChat: 0,
        },

        chats: [
            {
                nome: "Mario",
                image: "avatar_1.jpg",
                lastMessage: "",
                messages: [
                    {
                        text: "",
                        time: "",
                    }
                ]
            },

            {
                nome: "Genoveffa",
                image: "avatar_2.jpg",
                lastMessage: "",
            },

            {
                nome: "Michelina B.",
                image: "avatar_3.jpg",
                lastMessage: "",
            },

            {
                nome: "Benedetta",
                image: "avatar_4.jpg",
                lastMessage: "",
            },

            {
                nome: "Susan",
                image: "avatar_5.jpg",
                lastMessage: "",
            },

            {
                nome: "Carletto T.",
                image: "avatar_6.jpg",
                lastMessage: "",
            },

            {
                nome: "Portina",
                image: "avatar_7.jpg",
                lastMessage: "",
            },

            {
                nome: "Yang J.",
                image: "avatar_8.jpg",
                lastMessage: "",
            },
        ]
    },

    methods: {
        changeCurrentChat(number) {
            this.activeChat = number;
            console.log(this.activeChat);
        },
    }
});