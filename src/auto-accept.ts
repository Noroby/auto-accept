function getState() {
  if(DataStore.get("auto-accept")) return "开"
  else return "关"
}

export function initAutoAccept() {
  Toast.success("自动接受: " + getState())
  CommandBar.addAction({
    id: "自动接受",
    name: "切换自动接受对局",
    group: "自动接受",
    perform: () => {
      DataStore.set("auto-accept", !DataStore.get("auto-accept"))
      Toast.success("自动接受: " + getState())
    }
  })
}

export function listenAutoAccept(socket : any) {
  socket.observe('/lol-gameflow/v1/gameflow-phase', (data: { data: string }) => {
    if (data.data === 'ReadyCheck' && DataStore.get("auto-accept")) {
      fetch("/lol-matchmaking/v1/ready-check/accept", {
        method: "POST",
      }).then(() => {})
    }
  })
}