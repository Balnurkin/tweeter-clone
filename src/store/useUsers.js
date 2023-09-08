import { create } from "zustand";


export const useUsers = create((set) => (
    {
        users: [{
            userId: 1,
            userName: 'Balnur',
            userSurname: "Aimbetova",
            nickname: "@balnurochka",
            joinedDate: "may 2023",
            following: 0,
            followers: 0,
            tweets: 0
        }]
    }
))