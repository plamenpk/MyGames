# MyNextLevelGames
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

MyNextLevelGames is an implementation of [sudoku](https://en.wikipedia.org/wiki/Sudoku) and [tic-tac-toe.](https://en.wikipedia.org/wiki/Tic-tac-toe) Sudoku and tic-tac-toe are logic-based puzzle games. The point of the sudoku is to fill a 9x9 grid with numbers so that each column, row, and each of the nine 3x3 subgrids contain all of the digits from 1 - 9. The point of the tic-tac-toe is to succeed a place three of your marks in a horizontal, vertical, or diagonal row.

MyNextLevelGames offers random sudoku boards stored in the database.
## Getting Started

Assuming you have yarn/npm installed, start by clone the repo or download zip from:

```
https://github.com/plamenpk/MyGames.git
```

Once you have the repo files in a local directory, run yarn/npm to install all the dependencies:

```bash
yarn install
```
or

```bash
npm install
```
Finally, after the installation is complete run:
```bash
 npm run dev
 ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Interface
Home page:
![User Interface Example](/assets/UI/HomePage.png)
You can log or register:
![User Interface Example](/assets/UI/Register.png)
Games:
![User Interface Example](/assets/UI/Games.png)
Tic-tac-toe game: <br>
You can change player alias and play <br>
below the game board appear game log.
![User Interface Example](/assets/UI/ticTacToe.png)
Sudoku game:<br>
You can change cell number using the keyboard or numeric keypad in the right on the screen.<br>
`New Game` button will reset the board with new one.<br>
`undo` button gives you the necessary back steps .<br>
`redo` button takes you one step ahead.<br>
![User Interface Example](/assets/UI/sudoku.png)
New game:<br> You can shear board of you choice and upload it on the database.
![User Interface Example](/assets/UI/newSudoku.png)
## Happy puzzling!