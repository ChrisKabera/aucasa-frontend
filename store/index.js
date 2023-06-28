export const state = () => ({
    // auth
    step: 1,
    darkTheme:false
    
  })
  
  export const getters = {
    getStep(state) {
      return state.step
    },
    getTheme(state) {
      return state.darkTheme
    },
   
  }
  
  export const mutations = {
    SET_NEW_STEP(state, step) {
      state.step = step
    },
    SET_NEW_Dark_Theme(state, darkTheme) {
      state.darkTheme = darkTheme
    },
    
  }
  
  export const actions = {
    setNewStep(vuexContext, step) {
      vuexContext.commit('SET_NEW_STEP', step)
    },
    setDarkTheme(vuexContext, darkTheme) {
      vuexContext.commit('SET_NEW_Dark_Theme', darkTheme)
    },
    
  }
  