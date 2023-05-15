/*These are basically notes and reflections on how to go about our project*/
---------------------------------------------------

--For the javascript part or the project, steps or issues to tackle :
* Grab the inputs from the input fields "bill amount", "tip percentage" and "number of people"
* Check if the inputs are in the correct format or have actual usable values
    - Check that the "custom" field has a value >= 0 and different from a text (sort of string)
    - Check that the number of people field is >= 0, otherwise, display error message
* Calculate the tip-cost and total-cost per person
* Display the values in correct format ($ currency actually), 02 decimals max

--What do we need to work with :
* js variables to grab the inputs (by class, by id, ...)
* functions to calculate the tip and total cost
* function to display the tip and total cost 

--What else ?
* Handle division by zero scenario
* Keep any selected/chosen percentage tip "active" on the UI and select the active value each time for calculation
* Enable the "reset" button whenever there are values in the input fields and disable if none
* Handle case where custom value is set to zero, but bill amount and number of people are given. Should the total per person actually be displayed ? What do you think ?
* Actually considering events (onchange, onclick, ...), just thinking...ohhhh

