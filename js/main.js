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
        },

        chats: [
            {
                nome: "Mario",
                image: "avatar_1.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Genoveffa",
                image: "avatar_2.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Michelina B.",
                image: "avatar_3.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Benedetta",
                image: "avatar_4.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "Miao Miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Susan",
                image: "avatar_5.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "miao miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Carletto T.",
                image: "avatar_6.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "miao miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Portina",
                image: "avatar_7.jpg",
                lastAccess: "12:00",
                show: true,
                messages: [
                    {
                        text: "miao miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },

            {
                nome: "Yang J.",
                image: "avatar_8.jpg",
                lastAccess: "12:00 AM",
                show: true,
                messages: [
                    {
                        text: "miao miao",
                        time: "12:25 AM",
                        received: true,
                    },
                ]
            },
        ]
    },

    methods: {
        changeCurrentChat(number) {
            this.activeChat = number;
            setTimeout(this.scrollDown, 10);
            console.log(this.activeChat);
        },

        sendMessage(currentChat) {
            this.chats[currentChat].messages.push({
                text: this.activeProfile.textMessage.trim(),
                time: dayjs().format('h:m A').toString(),
                received: false,
            });
            this.activeProfile.textMessage = "";
            setTimeout(this.scrollDown, 10);
            setTimeout(this.answerText, 1000);
        },

        scrollDown() {
            let container = document.querySelector(".current-chat")
            container.scrollTop = container.scrollHeight;
        },

        answerText() {
            this.chats[this.activeChat].messages.push({
                text: "ok",
                time: dayjs().format('h:m A').toString(),
                received: true,
            });

            this.chats[this.activeChat].lastAccess = dayjs().format('h:m A').toString();
        },

        searchUser() {
            this.chats.forEach((element) => {
                if (element.nome.toLowerCase().includes(this.searchingProfile.toLowerCase())) {
                    element.show = true;
                }

                else {
                    element.show = false;
                }
            });
        }
    },



});