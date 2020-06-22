
# MVP

[x] grid to display cells

[x] minimum grid size of 25 x 25

[x] cell objects / components that have these props:

     [x] current state (black == alive | white == dead)

     [x] clickable

     [x] can be clicked to allow user to setup initial cell configuration

     [ ] should NOT be clickable when simulation is running

[x] cell objects should have these behaviours:

     [x] toggle state switch:

         [x] switch between alive & dead either because:

         [x] user manually toggled cell before starting simulation

         [x] simulation is running and the Rules of Life caused the cell to change state

[ ] text to display current generation # being displayed:

     [ ] use a timeout function to build the next generation of cells & update the display at the chosen time interval

[x] buttons to start and stop the simulation

[x] buttons to clear the grid

## Algorithm

For each cell in the current generation's grid:

    > examine state of all 8 neighbors

    > apply Rules of Life to determine if this cell will change states (alive / dead)

    > when the main loop completes:

    > swap current and next grids

        > repeat until simulation is stopped

    > uses double buffering to update grid with next generation

    > assume all edge cells are permanently dead OR wrap around to far side

Yet to-do:
[ ] update Material UI colors from the base
[ ] update Browser Tab text
[ ] update favico
[ ] Get Generation counter to work
[ ] work on CSS
[ ] work on media queries (responsive design)
[ ] check and update accessability
[ ] Add repo badges to readme
[ ] Deploy to github pages/Heroku
[ ] Update readme with deployed link
[ ] work on a random start initial fill
[ ] work on getting the game to "wrap around" instead on ending at the sides/top/bottom
[ ] check viewport meta in index.html
