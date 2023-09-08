// import { create } from "zustand";


// export const usePosts = create((set) => (
//     {
//         posts: [{
//             postId: 1,
//             creatorId: 1,
//             postText: 'text',
//             publishTime: new Date()
//         }],
//         push: (creatorId, postText) => set(state => (
//             {
//                 posts: [...state.posts, {
//                     postId: state.posts.at(-1).postId +1,
//                     creatorId: creatorId,
//                     postText: postText,
//                     publishTime: new Date()
//                 }]
//             }
//         ))
//     }
// ))

import { create } from "zustand";
import { useEffect } from "react";

// Создайте ключ для сохранения данных в localStorage
const localStorageKey = "posts";

export const usePosts = create((set) => {
  // Попробуйте извлечь состояние из localStorage, если оно там есть
  const savedState = JSON.parse(localStorage.getItem(localStorageKey));

  const initialState = {
    posts: savedState ? savedState.posts : [
      {
        postId: 1,
        creatorId: 1,
        postText: "text",
        publishTime: new Date(),
      },
    ],
    push: (creatorId, postText) =>
      set((state) => ({
        posts: [
          ...state.posts,
          {
            postId: state.posts[state.posts.length - 1].postId + 1,
            creatorId: creatorId,
            postText: postText,
            publishTime: new Date(),
          },
        ],
      })),
  };

  return initialState;
});

// Добавьте эффект для сохранения состояния в localStorage при его изменении
usePosts.subscribe((state) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});
