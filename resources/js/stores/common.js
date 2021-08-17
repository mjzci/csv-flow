export default {
  initialState: {
    showMobileSidebar: false,
    notification: null
  },
  actions: [
    {
      name: 'toggleMobileSidebar',
      cb: (prev) => {
        return { showMobileSidebar: !prev.showMobileSidebar }
      }
    },
    {
      name: 'setNotification',
      cb: (_, value) => {
        return { notification: value }
      }
    }
  ]
}
