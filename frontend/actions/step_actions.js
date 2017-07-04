export const REQUEST_STEPS = "REQUEST_STEPS";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const DESTROY_STEP = "DESTROY_STEP";
export const REMOVE_STEP = "REMOVE_STEP";
export const CREATE_STEP = "CREATE_STEP";
export const UPDATE_STEP = "UPDATE_STEP";

export const requestSteps = () => ({
  type: REQUEST_STEPS
})

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
})

export const createStep = step => ({
  type: CREATE_STEP,
  step
})

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
})

export const updateStep = step => ({
  type: RECEIVE_STEP,
  step
})

export const destroyStep = id => ({
  type: DESTROY_STEP,
  id
})

export const removeStep = id => ({
  type: REMOVE_STEP,
  id
})
