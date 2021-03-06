import _ from 'lodash'

export function getName (state) {
  return function (id) {
    const type = _.find(state.types, { 'value': _.toInteger(id) })

    return _.get(type, 'label', '[לא ידוע]')
  }
}

export function getTestConfig (state) {
  return function (id) {
    return _.find(state.testsList, { 'value': id })
  }
}

export function getByID (state) {
  return function (id) {
    return state.activities[id]
  }
}
