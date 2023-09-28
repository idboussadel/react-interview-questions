# Interview 1 :
In the game, the player needs to match a country to its capital by clicking on appropriate buttons.
* Your component should receive a data property in the following format (an object with the correct answer, where the keys are the names of the countries and the value of each key is the capital of country):
```sh
<CountryCapitalGame data={{Germany: "Berlin", France: "Paris"}} />
```
* A button should be displayed for each country and each capital.
* The buttons should be displayed in a random order.
*  Clicking a button should set its background color to blue (#009Bff)
*  Clicking another button should:
    - remove both buttons if a correct country and capital pair has been selected;<br/>
    - set the background color of both buttons to red (#ff0000bd) if a wrong pair has been selected.
* Assuming the previously selected pair was wrong, clicking another button should restore the default background color of the wrong pair and set the background color of the clicked button to blue.
* When there are no buttons left, display a message: Congratulations.

## Results :
![image](https://github.com/Devai-coding/react-interview-questions/assets/113947156/07c62924-a645-41dc-989b-27bb7e81929c)

![image](https://github.com/Devai-coding/react-interview-questions/assets/113947156/e4057b40-878a-4fb3-ad18-c308690e617b)

![image](https://github.com/Devai-coding/react-interview-questions/assets/113947156/6adc9484-9e83-4b3a-9ff2-7baa44dfc4bf)

![image](https://github.com/Devai-coding/react-interview-questions/assets/113947156/3ba6bcd9-e6f7-4345-8658-ef4c3f09b4ea)

![image](https://github.com/Devai-coding/react-interview-questions/assets/113947156/50a9bde0-4032-4bf5-ab68-bbde601ddc2e)


