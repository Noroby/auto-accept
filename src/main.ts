import { initAutoAccept, listenAutoAccept } from "./auto-accept"

export function init(context : any) {
  listenAutoAccept(context.socket)
}
export function load() {
  initAutoAccept();
}

window.addEventListener('load', load);