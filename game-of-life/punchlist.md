
# MVP

[x] grid to display cells

[x] minimum grid size of 25 x 25

[x] cell objects / components that have these props:

     [x] current state (black == alive | white == dead)

     [x] clickable

     [x] can be clicked to allow user to setup initial cell configuration

     [x] should NOT be clickable when simulation is running

[x] cell objects should have these behaviours:

     [x] toggle state switch:

         [x] switch between alive & dead either because:

         [x] user manually toggled cell before starting simulation

         [x] simulation is running and the Rules of Life caused the cell to change state

[x] text to display current generation # being displayed:

     [x] use a timeout function to build the next generation of cells & update the display at the chosen time interval

[x] buttons to start and stop the simulation

[x] buttons to clear the grid

## Implement Custom Features

Implement at least 3 of the following features:

[x] Create a few sample cell configurations that users can load and run
[x] Add an option that creates a random cell configuration that users can run
[ ] Add additional cell properties, like color or size, and incorporate them into your visualization
[x] Allow users to specify the speed of the simulation
[ ] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
[ ] Allow users to change the dimension of the grid being displayed
[ ] Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).
If you have an idea for a custom feature on this list, run it by your TL or instructor

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
[x] update Material UI colors from the base
[x] update Browser Tab text
[x] update favico
[x] Get Generation counter to work
[x] work on CSS
[ ] work on media queries (responsive design)
[ ] check and update accessability
[ ] Add repo badges to readme
[ ] Deploy to github pages/Heroku
[ ] Update readme with deployed link
[x] work on a random start initial fill
[ ] work on a drop down for grid size
[ ] work on getting the game to "wrap around" instead on ending at the sides/top/bottom
[x] check viewport meta in index.html
