import _ from 'lodash'

export function getName (state) {
  return function (id) {
    const type = _.find(state.types, { 'value': id })

    return _.get(type, 'label', '[לא ידוע]')
  }
}

export function getTestConfig (state) {
  return function (id) {
    return _.find(state.testsList, { 'value': id })
  }
}
