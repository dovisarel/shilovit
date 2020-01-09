export function setActivities (state, payload) {
  state.activities = payload.activities
  state.summary = payload.summary
  state.metadata = payload.metadata
  state.weeks = payload.weeks
}
