Model:

let model = {
    meals: [],
    showForm: false,
    description: 'Dinner',
    calories: 600,
    editId: 3,
    nextId: 1,
}

let meal = {
    id: 1,
    description: 'Breakfast',
    calories: 460,
}

View Functions

view 
    formView
        fieldSet
        buttonSet
    tableView
        tableHeader
        mealsBody
        mealRow
            cell
        totalRow

Update Functions

Clicking Add Meal Button
meal input
calorie input
click Save (add / update meal)
click edit 
click delete

