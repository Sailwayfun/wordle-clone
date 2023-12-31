# Wordle Clone
[Wordle Clone](https://wordle-sail--wordle-4lmsa6dh.web.app) is a replication of the popular word-guessing game.

## About Wordle Clone
- Accelerated UI development with ``Tailwind CSS``.
- Enhanced user interaction by adding non-blocking alerts with ``React-Hot-Toast``.
- Boosted type safety to reduce runtime errors with ``TypeScript``.
- Implemented state management with ``useReducer``.

## Built With
<div style="display:flex; justify-content: center; margin-bottom: 16px; gap: 8px;">
   <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React"/> 
   <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/>
   <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" alt="Tailwind CSS"/>
   <img src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white" alt="GIT"/>
   <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite">
   <img src="https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
</div>

Base

- React / Vite
- Tailwind
- ESLint
- TypeScript

Libraries

- react-hot-toast

## Demo

- After entering five letters, a player's guess will be compared to the answer.
<ol>
    <li>
        <p>When the guess does not match any letters in the answer, the puzzle pieces turn gray.</p>
        <img src="public/assets/no-match.gif" />
    </li>
    <li>
        <p>When a letter in the guess matches the answer, but the positions are different, the puzzle piece turns yellow.</p>
        <img src="public/assets/letter-match-position-wrong.gif" />
    </li>
     <li>
        <p>When a letter in the guess matches the answer, and the position is correct, the puzzle piece turns green.</p>
        <img src="public/assets/letter-and-position-match.gif"/>
    </li>
     <li>
        <p>Each game allows the player to guess 6 times at most. If the 6th guess is wrong, a toast saying "答錯了! 再挑戰一次！"  would appear; If the guess is correct, a toast saying "答對了，恭喜!" would appear.</p>
        <div style="display: flex;">
            <img align="top" src="public/assets/correct-guess.gif"/>
            <img align="top" src="public/assets/wrong-guess.gif"/>
        </div>
    </li>
</ol>

## Contact
<div style="display:flex; gap: 12px">
   <a href="https://www.linkedin.com/in/sailliaodev/">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white" alt="LinkedIn"/>
   </a>
   <a href="mailto:liaoleon000513@gmail.com">
      <img src="https://img.shields.io/badge/Gmail-EA4335.svg?style=for-the-badge&logo=Gmail&logoColor=white" alt="Gmail"/>
   </a>
</div>
