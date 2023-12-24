import { initAutoAccept, listenAutoAccept } from "./auto-accept"

window.addEventListener("keydown", (event) => {
  const key = event.key
  if (key === "F5") {
    window.reloadClient()
  } else if (key === "F1") {
    CommandBar.show()
  }
})

export function init(context : PenguContext) {
  listenAutoAccept(context.socket)
}
export function load() {
  initAutoAccept();
}