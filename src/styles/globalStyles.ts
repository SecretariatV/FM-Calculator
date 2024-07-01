import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /** Theme1 */
    /** Background */
    --theme-primary-main: hsl(222, 26%, 31%);
    --theme-primary-toggle: hsl(223, 31%, 20%);
    --theme-primary-screen: hsl(224, 36%, 15%);

    /** Key */
    --theme-primary-key-bg: hsl(225, 21%, 49%);
    --theme-primary-key-shadow: hsl(224, 28%, 35%);
    --theme-primary-key-red: hsl(6, 63%, 50%);
    --theme-primary-key-dark-red: hsl(6, 70%, 34%);
    --theme-primary-key-light-orange: hsl(30, 25%, 89%);
    --theme-primary-key-orange: hsl(28, 16%, 65%);

    /** Text */
    --theme-primary-text: hsl(221, 14%, 31%);
    --text-white: hsl(0, 0%, 100%);

    /** Theme2 */
    /** Background */
    --theme-secondary-main: hsl(0, 0%, 90%);
    --theme-secondary-toggle: hsl(0, 5%, 81%);
    --theme-secondary-screen: hsl(0, 0%, 93%);

    /** Key */
    --theme-secondary-key-bg: hsl(185, 42%, 37%);
    --theme-secondary-key-shadow: hsl(185, 58%, 25%);
    --theme-secondary-key-orange: hsl(25, 98%, 40%);
    --theme-secondary-key-dark-orange: hsl(25, 99%, 27%);
    --theme-secondary-key-light-yellow: hsl(45, 7%, 89%);
    --theme-secondary-key-dark-gray-orange: hsl(35, 11%, 61%);

    /** Text */
    --theme-secondary-text: hsl(60, 10%, 19%);

    /** Theme3 */
    /** Background */
    --theme-third-main: hsl(268, 75%, 9%);
    --theme-third-toggle: hsl(268, 71%, 12%);

    /** Key */
    --theme-third-key-bg: hsl(281, 89%, 26%);
    --theme-third-key-shadow: hsl(285, 91%, 52%);
    --theme-third-key-cyan: hsl(176, 100%, 44%);
    --theme-third-key-soft-cyan: hsl(177, 92%, 70%);
    --theme-third-key-violet: hsl(268, 47%, 21%);
    --theme-third-key-dark-magenta: hsl(290, 70%, 36%);

    /** Text */
    --theme-third-text-yellow: hsl(52, 100%, 62%);
    --theme-third-text-blue: hsl(198, 20%, 13%);
}

body {
    height: 100vh;
    transition: background-color 0.3s ease-in-out;
}

body:has(input[name="theme1"]:checked) {
    background-color: var(--theme-primary-main);
}

body:has(input[name="theme2"]:checked) {
    background-color: var(--theme-secondary-main);
}

body:has(input[name="theme3"]:checked) {
    background-color: var(--theme-third-main);
}

.toggle_btn {
    width: calc(100% / 3);
    position: absolute;
    display: grid;
    place-items: center;
    transition: all 0.3s ease-in-out;
    
    .btn {
        width: 18px;
        aspect-ratio: 1/1;
        border-radius: 100%;
    }
}

.toggle_btn:has(~ input[name="theme1"]:checked) > .btn {
    background-color: var(--theme-primary-key-red);
}

.toggle_btn:has(~ input[name="theme2"]:checked) > .btn {
    background-color: var(--theme-secondary-key-orange);
}

.toggle_btn:has(~ input[name="theme3"]:checked) > .btn {
    background-color: var(--theme-third-key-cyan);
}
`;

export default GlobalStyles;
