import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'
import { showFormMsg, mealInputMsg, caloriesInputMsg } from './update'

const { pre, div, h1, button, form, label, input } = hh(h)

function buttonSet(dispatch) {
    return div([
        button({ 
            className: 'f3 pv2 ph3 bg-blue white bn mr2 dim', 
            type: 'submit',
        },
        'Save',
        ),

        button({
            className: 'f3 pv2 bg-blue white bn mr2 dim',
            type: button,
            onclick: () => dispatch(showFormMsg(false)),
        },
        'Cancel'
        )
    ])
}

function fieldSet(labelText, inputValue, oninput){
    return div([
        label({ className: 'db mb1' }, labelText),
        input({ 
            className: 'pa2 input-reset ba w-100 mb2',
            type: 'text',
            value: inputValue, 
            oninput
        })
    ])
}

function formView(dispatch, model){
    const { description, calories, showForm } = model
    if (showForm) {
        return form({
            className: 'w-100 mv2',
        },
            [
                fieldSet('Meal', description, 
                event => dispatch(mealInputMsg(event.target.value))),
                fieldSet('Calories', calories || '',
                event => dispatch(caloriesInputMsg(event.target.value))),
                buttonSet(dispatch),
            ],
        )
    }
    return button({ 
        className: 'f3 pv2 bg-blue white bn mr2 dim', 
        onclick: () => dispatch(showFormMsg(true)),
    }, 
    'Add Meal' 
    )
}

function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1({ className: 'f2 pv2 bb' }, 'Calorie Counter'),
        formView(dispatch, model),
        pre(JSON.stringify(model, null, 2)),
    ])
}

export default view